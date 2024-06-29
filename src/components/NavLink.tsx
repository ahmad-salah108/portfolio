"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  disableUnderlined?: boolean;
}

export default function NavLink(props: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={clsx(
        "gold-text-hover text-bold-500",
        props.disableUnderlined || "underlined-glow",
        pathname === props.href && "active text-gold"
      )}
    >
      {props.children}
    </Link>
  );
}
