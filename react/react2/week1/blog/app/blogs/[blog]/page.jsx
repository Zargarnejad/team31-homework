"use client";

import { usePathname } from "next/navigation";

export default function Blog() {
  const pathname = usePathname();
  const title = pathname
    .split("/")[2]
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return <p>Blog Title: {title}</p>;
}
