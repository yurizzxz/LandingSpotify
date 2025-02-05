"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Links = () => {
  return (
    <>
      <li className="nav-link">
        <Link href="#">Home</Link>
      </li>
      <li className="nav-link">
        <Link href="#">Premium</Link>
      </li>
      <li className="nav-link">
        <Link href="#">Suporte</Link>
      </li>
    </>
  );
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
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
          <div className="navContent flex flex-row items-center gap-7">
            <ul className="navMenu flex flex-row items-center gap-7">
              <Links />
            </ul>
            <p>|</p>
            <ul className="flex flex-row items-center gap-4">
              <Image
                src="/profile.jpeg"
                alt="Imagem de perfil"
                width={40}
                className="rounded-full"
                height={40}
              />
              <li
                className="flex items-center flex-row gap-2 cursor-pointer relative"
                onClick={toggleDropdown}
                onBlur={() => setIsOpen(false)}
                tabIndex={0}
              >
                <Link className="nav-link" href="#">
                  Perfil
                </Link>
                <span className="material-icons" style={{ fontSize: "18px" }}>
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
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
