"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";




const menuItems = [
  { item: "Home", link: "/" },
  { item: "Contact Me", link: "/contact" },
  { item: "Project", link: "/project" },
];


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
     <Menu setActive={setActive}>
    {menuItems.map(({ item, link }) => (
      <MenuItem key={item} setActive={setActive} active={active} item={item}>
        <Link href={link}>{item}</Link>
      </MenuItem>
    ))}
  </Menu>
    </div>
  );
}