import { Button } from '@/components/ui/button';

type CategoriesProps = {
  categories: string[];
  onCategoryClick: (category: string) => void;
  selectedCategory: string | null;
};

function beautifyCategoryTitle(category: string): string {
  return category
    .replace(/-/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

export default function Categories({
  categories,
  onCategoryClick,
  selectedCategory,
}: CategoriesProps) {
  return (
    <>
      {categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          onClick={() => onCategoryClick(category)}
          className={`justify-start hover:text-primary ${selectedCategory === category ? 'font-semibold text-primary' : ''}`}
        >
          {beautifyCategoryTitle(category)}
        </Button>
      ))}
    </>
  );
}
