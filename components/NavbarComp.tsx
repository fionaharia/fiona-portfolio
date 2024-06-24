"use client"
import React,{ useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Toggle from "./ui/Toggle";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const menuItems = [
    "home",
    "about me",
    "projects",
    "contact",
    <Toggle />
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent md:border-1 md:border-black md:rounded-full dark:border-white top-6 mx-auto container">
      <NavbarContent>
       <NavbarItem className="justify-start">
          <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">fionaharia</Link>
        </NavbarItem> 
      </NavbarContent>
      <NavbarContent className="hidden   sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            about me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl">
            <Toggle />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black dark:text-white font-semibold"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black dark:text-white font-semibold text-sm md:text-lg 2xl:text-xl"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComp