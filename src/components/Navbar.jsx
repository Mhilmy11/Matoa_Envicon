import { NavLink } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";
import { Phone, Mail, Menu, X } from "lucide-react";

const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/aboutus" },
  { name: "Layanan", path: "/serviceproducts" },
  { name: "Proyek", path: "/project" },
  { name: "Artikel", path: "/article" },
  { name: "Kontak", path: "/contact" },
  { name: "Tim", path: "/ourteams" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-dark text-xs">
        <Container className="flex items-center justify-between py-2 text-light">
          <p className="hidden sm:block">
            PT Matoa Envicon | Konsultan Perizinan & Kepatuhan Lingkungan
          </p>

          <p className="sm:hidden">PT Matoa Envicon</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href="tel:+6281234567890"
              className="flex items-center gap-2 transition hover:text-secondary"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">+62 812-3456-7890</span>
            </a>

            <a
              href="mailto:info@matoaenvicon.co.id"
              className="flex items-center gap-2 transition hover:text-secondary"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">info@matoaenvicon.co.id</span>
            </a>
          </div>
        </Container>
      </div>

      <div className="relative z-50 bg-white shadow-xs">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            end
            onClick={() => setIsMenuOpen(false)}
            className="w-32 shrink-0 sm:w-36 md:w-38"
          >
            <img
              src="/assets/matoa_navbar_logo.png"
              alt="Matoa Envicon"
              className="h-auto w-full object-contain"
            />
          </NavLink>

          <nav className="hidden items-center gap-5 text-sm md:flex lg:gap-6">
            {navItems.map((nav) => (
              <NavLink
                to={nav.path}
                key={nav.path}
                end={nav.path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-primary"
                    : "text-neutral transition hover:text-primary"
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-lg p-2 text-neutral transition hover:bg-gray-100 hover:text-primary md:hidden"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-gray-100 bg-white px-4 py-3 shadow-md md:hidden sm:px-6"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navItems.map((nav) => (
                <NavLink
                  to={nav.path}
                  key={nav.path}
                  end={nav.path === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-primary/10 font-semibold text-primary"
                        : "text-neutral hover:bg-gray-50 hover:text-primary"
                    }`
                  }
                >
                  {nav.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
