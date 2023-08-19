import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PaginationLink } from "./PaginationLink";

export interface PaginationBarProps {
  href: string;
  page: number;
  pageCount: number;
}

export default function PaginationBar({
  href,
  page,
  pageCount,
}: PaginationBarProps) {
  return (
    <div className="flex items-center gap-1 pb-2">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="w-5 h5" />
        <span className="sr-only">previous page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="w-5 h5" />
        <span className="sr-only">next page</span>
      </PaginationLink>
    </div>
  );
}
