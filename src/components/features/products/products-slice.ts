import { OFFSET } from '@/components/features/products/product-list.tsx';
import { CategoryData } from '@/components/features/products/product-types.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';

type State = {
  categories: {
    loading: boolean;
    error: boolean;
    data: string[];
  };
  selectedCategory: string | null;
  categoryData: {
    loading: boolean;
    error: boolean;
    data: CategoryData | null;
  };
  pageNumber: number;
};

const initialState: State = {
  categories: {
    loading: false,
    error: false,
    data: [],
  },
  selectedCategory: null,
  categoryData: {
    loading: false,
    error: false,
    data: null,
  },
  pageNumber: 1,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategories(state, { payload }: PayloadAction<string[]>) {
      produce(state, (draft) => {
        draft.categories.data = payload;
      });
    },
    setSelectedCategory(state, { payload }: PayloadAction<string | null>) {
      state.selectedCategory = payload;
    },
    setCategoryData(state, { payload }: PayloadAction<CategoryData | null>) {
      produce(state, (draft) => {
        draft.categoryData.data = payload;
      });
    },
    setPageNumber(state, { payload }: PayloadAction<number>) {
      state.pageNumber = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.categories.loading = true;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.categories.error = true;
      state.categories.loading = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories.data = action.payload;
      state.selectedCategory = action.payload[0];
      state.categories.loading = false;
      state.categories.error = false;
    });

    builder.addCase(fetchCategoryData.pending, (state) => {
      state.categoryData.loading = true;
    });
    builder.addCase(fetchCategoryData.rejected, (state) => {
      state.categoryData.error = true;
      state.categoryData.loading = false;
    });
    builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
      state.categoryData.data = action.payload;
      state.categoryData.loading = false;
      state.categoryData.error = false;
    });
  },
});

const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await fetch('https://dummyjson.com/products/category-list');
  return response.json();
});

const fetchCategoryData = createAsyncThunk(
  'products/fetchCategoryData',
  async ({
    category,
    pageNumber,
    offset,
  }: {
    category: string;
    pageNumber: number;
    offset: number;
  }) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=${OFFSET}&skip=${(pageNumber - 1) * offset}`,
    );
    return response.json();
  },
);

export { productsSlice, fetchCategories, fetchCategoryData };
export const { setCategories, setSelectedCategory, setCategoryData, setPageNumber } =
  productsSlice.actions;
export default productsSlice.reducer;
