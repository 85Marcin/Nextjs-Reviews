"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface PaginationLinkProps {
  children: ReactNode;
  enabled: boolean;
  href: string;
}

export const PaginationLink = function ({
  children,
  href,
  enabled,
}: PaginationLinkProps) {
  const handleClick = (event) => {
    if (!enabled) {
      event.preventDefault();
    }
  };
  if (!enabled) {
    return (
      <Link
        href={href}
        className="text-sm border rounded cursor-not-allowed text-slate-200"
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="text-sm border rounded text-slate-500 hover:bg-orange-100 hover:text-slate-700"
    >
      {children}
    </Link>
  );
};
