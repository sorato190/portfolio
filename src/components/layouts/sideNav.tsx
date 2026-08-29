"use client";
import { useEffect, useState } from "react";

const navList = [
  { href: "#profile", content: "Profile" },
  { href: "#qualification", content: "Qualification" },
  { href: "#skills", content: "Skills" },
  { href: "#site", content: "Site" },
];

export default function SideNav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeId, setActiveId] = useState("profile");

  useEffect(() => {
    const sections = navList
      .map((nav) => document.getElementById(nav.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => href.slice(1) === activeId;

  const NavListElement = ({ onNavigate }: { onNavigate?: () => void }) => (
    <ul className="mt-6 flex flex-col gap-1 px-3">
      {navList.map((nav) => (
        <li key={nav.content}>
          <a
            href={nav.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
              isActive(nav.href)
                ? "bg-black/[0.04] text-espresso shadow-glow"
                : "text-cocoa/70 hover:bg-black/[0.03] hover:text-espresso"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                isActive(nav.href)
                  ? "bg-gradient-to-r from-gold to-terracotta"
                  : "bg-cocoa/30"
              }`}
            />
            {nav.content}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-espresso/10 bg-white/30 backdrop-blur-xl sm:flex">
        <div className="flex h-20 items-center px-6">
          <span className="font-display text-xl font-semibold gradient-text">
            Sorato
          </span>
        </div>
        <NavListElement />
      </nav>

      {/* Mobile toggler */}
      <button
        onClick={() => setOpenMenu(!openMenu)}
        type="button"
        aria-label="Toggle menu"
        className="fixed left-4 top-4 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-espresso/10 bg-white/60 backdrop-blur-md sm:hidden"
      >
        <span
          className={`h-0.5 w-5 bg-espresso transition-transform duration-300 ${
            openMenu ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-espresso transition-opacity duration-300 ${
            openMenu ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-espresso transition-transform duration-300 ${
            openMenu ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile drawer */}
      <nav
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-espresso/10 bg-ink/95 backdrop-blur-xl transition-transform duration-300 ease-in-out sm:hidden ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-end pl-6 pr-6">
          <span className="font-display text-xl font-semibold gradient-text">
            Sorato
          </span>
        </div>
        <NavListElement onNavigate={() => setOpenMenu(false)} />
      </nav>
    </>
  );
}
