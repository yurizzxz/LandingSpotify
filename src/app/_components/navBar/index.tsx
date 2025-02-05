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
    <header className="w-full sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="flex justify-between flex-row items-center  py-5">
          <div className="navHeader">
            <h1 className="text-spotify hover:text-spotifyhover">Logo</h1>
          </div>
          <div className="navContent">
            <ul className="navMenu flex flex-row items-center gap-4">
              <Links />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
