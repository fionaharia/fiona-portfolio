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
    { id: 1, label: "home", component: "home" },
    { id: 2, label: "about me", component: "about me" },
    { id: 3, label: "projects", component: "projects" },
    { id: 4, label: "contact", component: "contact" },
    { id: 5, label: "toggle", component: <Toggle /> }
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent md:border-1 md:border-black md:rounded-full dark:border-white top-3 mx-auto container"
    >
      <NavbarContent>
        <NavbarItem className="justify-start z-10">
          <Link href="#" className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            fionaharia
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(0, 4).map((item) => (
          <NavbarItem key={item.id}>
            <Link href="#" className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
              {item.component}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem key={menuItems[4].id}>
          <Link href="#" className="text-black pt-1 pl-2 dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            {menuItems[4].component}
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
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              href="#"
              className="w-full mt-8 text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl"
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
