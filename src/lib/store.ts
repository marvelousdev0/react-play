import productsReducer from '@/components/features/products/products-slice.ts';
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector, useStore } from 'react-redux';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

type AppStore = typeof store;
type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppState = useSelector.withTypes<AppState>();
const useAppStore = useStore.withTypes<AppStore>();

export { useAppDispatch, useAppState, useAppStore };
export default store;
