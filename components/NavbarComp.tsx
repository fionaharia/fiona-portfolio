"use client"
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";
import Toggle from "./ui/Toggle";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const menuItems = [
    { label: "home", component: <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">home</Link> },
    { label: "about me", component: <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">about me</Link> },
    { label: "projects", component: <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">projects</Link> },
    { label: "contact", component: <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">contact</Link> },
    { label: "toggle", component: <Toggle key="toggle" /> }
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent md:border-1 md:border-black md:rounded-full dark:border-white top-3 mx-auto container"
    >
      <NavbarContent>
        <NavbarItem className="justify-start z-10">
          <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            fionaharia
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(0, 4).map((item) => (
          <NavbarItem key={item.label}>
            {item.component}
          </NavbarItem>
        ))}
        <NavbarItem>
          <Link className="text-black pt-1 pl-2 dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            <Toggle />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden mr-3 text-black dark:text-white font-semibold"
        />
      </NavbarContent>
      <NavbarMenu className="z-20">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full mt-8 text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl"
              href="#"
              size="lg"
            >
              {item.component}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComp;
