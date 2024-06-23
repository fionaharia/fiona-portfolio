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
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
       <NavbarItem className="justify-start">
          <Link className="text-black dark:text-white">fionaharia</Link>
        </NavbarItem> 
      </NavbarContent>
      <NavbarContent className="hidden text-black dark:text-white sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-black dark:text-white">
            home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black dark:text-white">
            about me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black dark:text-white">
            projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black dark:text-white">
            contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black dark:text-white">
            <Toggle />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black dark:text-white"
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