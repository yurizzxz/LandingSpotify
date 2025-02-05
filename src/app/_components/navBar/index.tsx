import Image from "next/image";
import Link from "next/link";
import React from "react";
const Links = () => {
  return (
    <>
      <li>
        <Link href="#">Home</Link>
      </li>
      <li>
        <Link href="#">Sobre</Link>
      </li>
      <li>
        <Link href="#">Contato</Link>
      </li>
    </>
  );
};

const NavBar = () => {
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
                width={120}
                height={120}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
          <div className="navContent">
            <ul className="navMenu flex flex-row items-center gap-7">
              <Links />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
