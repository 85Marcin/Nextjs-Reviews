"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkParams {
  children: ReactNode;
  href: string;
  prefetch?: boolean;
}

export default function NavLink({ children, href, prefetch }: NavLinkParams) {
  const pathname = usePathname();
  if (href === pathname) {
    return <span className="text-orange-500">{children}</span>;
  }
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="text-orange-800 hover:font-bold"
    >
      {children}
    </Link>
  );
}
