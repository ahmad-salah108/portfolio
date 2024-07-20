"use client";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { ComponentProps, useEffect, useState } from "react";

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  disableunderlined?: "true" | "false"; // had to make it string cause the browser isn't happy with boolean type as an attribute
}

export default function NavLink(props: NavLinkProps) {
  const params = useParams();
  const [hash, setHash] = useState(window.location.hash);
  const hashLink = "#" + props.href.toString().split("#")[1];

  useEffect(() => {
    setHash(window.location.hash || "#");
  }, [params]);

  return (
    <Link
      {...props}
      className={clsx(
        "gold-text-hover text-bold-500",
        props?.disableunderlined === "true" || "underlined-glow",
        hashLink === hash && "active text-gold"
      )}
    >
      {props.children}
    </Link>
  );
}
