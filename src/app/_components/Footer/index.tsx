"use client";

import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#020504] text-white py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="hover:text-spotifyhover transition-all"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="plans"
                  className="hover:text-spotifyhover transition-all"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="#beneficios"
                  className="hover:text-spotifyhover transition-all"
                >
                  Benefícios
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.spotify.com/br/legal/privacy-policy/"
                  className="hover:text-spotifyhover transition-all"
                >
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@spotify.com"
                  className="hover:text-spotifyhover transition-all"
                >
                  support@spotify.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/spotify"
                className="text-2xl hover:text-green-500"
              >
                <i className="fab fa-facebook"></i>
              </Link>
              <Link
                href="https://twitter.com/spotify"
                className="text-2xl hover:text-green-500"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="https://www.instagram.com/spotify"
                className="text-2xl hover:text-green-500"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                href="https://www.youtube.com/user/spotify"
                className="text-2xl hover:text-green-500"
              >
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Image
            width={300}
            height={300}
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify Logo"
            className="mx-auto mb-4 w-36"
          />
          <p className="text-sm text-gray-400">
            &copy; 2025 Spotify. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
