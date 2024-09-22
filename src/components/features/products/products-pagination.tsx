import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx';

export default function ProductsPagination({
  onNavigateToPage,
  onNext,
  onPrevious,
  pageNumber,
  totalPages,
}: {
  onNavigateToPage: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  pageNumber: number;
  totalPages: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious onClick={onPrevious} />
        </PaginationItem>
        {new Array(totalPages).fill(null).map((_, index) => (
          <PaginationItem key={index} className="cursor-pointer">
            <PaginationLink
              isActive={index + 1 === pageNumber}
              onClick={() => onNavigateToPage(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="cursor-pointer">
          <PaginationNext onClick={onNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
