'use client'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SideNav() {

  const [openMenu, setOpenMenu] = useState(false);
  const currPath = usePathname();
  const isActiveLink = (path: string) => {
    return currPath === path ? 'text-indigo-500' : 'text-gray-900';
  };
  const handleMenuOpen = () => { setOpenMenu(!openMenu) }

  const navList = [
    { 'href': '#', 'content': 'Profile' },
    { 'href': '#qualification', 'content': 'Qualification' },
    { 'href': '#skills', 'content': 'Skills' },
  ]

  const NavListElement = () => {
    return (
      <ul className="relative m-0 list-none px-[0.2rem] mt-10" data-te-sidenav-menu-ref>
        {navList.map((nav) => {
          return (
            <li key={nav.content} className="relative">
              <a href={nav.href} className="flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 dark:text-white hover:text-gray-800 dark:hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-16 w-16 text-lg text-gray-600 dark:text-white "><i className="bx bx-home"></i></span>
                <span className="text-2xl">{nav.content}</span>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      {/* <!-- Sidenav --> */}
      <nav
        id='sidenav-1'
        className="hidden z-50 sm:block fixed left-0 top-0 z-[1035] h-screen w-80 -translate-x-full overflow-hidden bg-browndark shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-gray-400"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-mode="side"
        data-te-sidenav-content="#content">

        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl text-gray-700 dark:text-white">Portfolio</h1>
        </div>
        <NavListElement />
      </nav>
      {/* <!-- Sidenav --> */}

      {/* <!-- Toggler --> */}
      <div className='lg:hidden relative p-5 z-20'>
        <button onClick={handleMenuOpen} type="button" className="space-y-2">
          <div
            className={
              openMenu
                ? "w-7 h-0.5 bg-gray-700 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                : "w-7 h-0.5 bg-gray-700 transition duration-500 ease-in-out"
            }
          />
          <div
            className={
              openMenu
                ? "opacity-0 transition duration-500 ease-in-out"
                : "w-7 h-0.5 bg-gray-700 transition duration-500 ease-in-out"
            }
          />
          <div
            className={
              openMenu
                ? "w-7 h-0.5 bg-gray-700 -rotate-45 transition duration-500 ease-in-out"
                : "w-7 h-0.5 bg-gray-700 transition duration-500 ease-in-out"
            }
          />
        </button>
      </div>
      {/* Tggle Navigation */}
      <nav
        className={
          openMenu
            ? "z-10 sm:hidden text-left fixed bg-gray-100 left-0 top-0 w-[180px] h-full rounded-sm flex flex-col justify-start mt-10 ease-linear duration-300"
            : "z-10 sm:hidden fixed right-[-100%] ease-linear duration-300"
        }
      >
        <NavListElement />
      </nav>
      {/* <!-- Toggler --> */}
    </>
  )
}

