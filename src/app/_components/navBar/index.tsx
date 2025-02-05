"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Links = () => {
  return (
    <>
      <li className="nav-link">
        <Link href="#home">Home</Link>
      </li>
      <li className="nav-link">
        <Link href="#planos">Planos</Link>
      </li>
      <li className="nav-link">
        <Link href="#beneficios">Benefícios</Link>
      </li>
      <li className="nav-link">
        <Link href="#faq">Perguntas Frequentes</Link>
      </li>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <header className="w-full fixed bg-[var(--background)] top-0 z-50">
      <div className="container max-w-7xl px-2 mx-auto">
        <nav className="flex justify-between flex-row items-center py-5">
          <div className="navHeader">
            <Link href="/home" style={{ cursor: "pointer" }}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
                alt="Spotify Logo"
                loading="lazy"
                width={110}
                height={110}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>

          <div className="navContent flex flex-row items-center ml-auto justify-end gap-7">
            <ul className="navMenu flex-row items-center gap-7 hidden md:flex">
              <Links />
            </ul>
            <p className="hidden md:flex">|</p>
            <ul className="hidden md:flex flex-row items-center gap-4">
              <li
                className="flex items-center gap-2 cursor-pointer relative"
                onClick={toggleDropdown}
                onBlur={() => setIsOpen(false)}
                tabIndex={0}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Imagem de perfil"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <button className="hidden md:flex nav-link z-[99]">
                  Perfil
                </button>
                <span
                  className="material-icons hover:text-spotify"
                  style={{ fontSize: "18px" }}
                >
                  keyboard_arrow_down
                </span>

                <div
                  className={`absolute left-0 top-full min-w-[8rem] bg-[var(--cardColor)] rounded-lg py-3 px-4 shadow-lg transition-opacity duration-200 z-50 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <Link className="nav-link block py-2" href="#">
                    Conta
                  </Link>
                  <Link className="nav-link block py-2" href="#">
                    Sair
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar} className="text-white">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-2/3 bg-[var(--background)] h-full z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex-1">
          <div className="flex justify-end mt-4">
            <button onClick={toggleSidebar} className="text-white text-2xl">
              <span className="material-icons">close</span>
            </button>
          </div>
          <ul className="space-y-6">
            <Links />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
