import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto py-5 border-b-2">
      <div className="text-3xl font-semibold">NEXT.JS</div>
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
