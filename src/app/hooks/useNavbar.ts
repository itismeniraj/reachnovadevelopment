"use client";

import { useState } from "react";

export default function useNavbar() {
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState("/");

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  // MOBILE MENU
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  // ACTIVE LINK
  const setActiveLink = (href: string) => {
    setActive(href);
  };

  // DROPDOWN HOVER
  const showDropdown = (label: string) => {
    setOpenDropdown(label);
  };

  const hideDropdown = () => {
    setOpenDropdown(null);
  };

  return {
    open,
    active,
    openDropdown,

    toggleMenu,
    closeMenu,

    setActiveLink,

    showDropdown,
    hideDropdown,
  };
}