"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import SearchInput from "@/components/ui/search";
import Container from "@/components/container";
import { useMediaQuery } from "@/hooks/use-media-query";
import { myLoader } from "@/utils/all";
import CartAction from "@/components/ui/cart-action";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export default function Navbar(props) {
  const leftmenu = [

  ];

  const rightmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Products",
      href: "/product",

    },
    {
      label: "Blog",
      href: "/blog"
    },
    {
      label: "Contact",
      href: "/contact"
    },

    {
      label: "Catalog",
      href: "/catalog"
    },
    

  ];

  const mobilemenu = [...leftmenu, ...rightmenu];
  const isDesktop = useMediaQuery("(min-width:1025px)")
  return (
  <header className="sticky top-0 z-20 bg-cyan-900 text-slate-50 w-full">
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between lg:gap-10">
                <div className="flex w-full items-center justify-between lg:w-auto">
                  <Link href="/" className="dark:hidden max-w-40">
                    {props.logo ? (
                      <div className="flex gap-2 items-center">
                        <Image
                          {...urlForImage(props.logoalt)}
                          width={50}
                          height={50}
                          alt="Logo"
                          priority={true}
                          sizes="(max-width: 640px) 100vw, 200px"
                        />
                        <h2 className="block text-center text-2xl font-bold">
                          RBNTECH
                        </h2>
                      </div>
                    ) : (
                      <h2 className="block text-center">
                        RBNTECH
                      </h2>
                    )}
                  </Link>
                  <Link href="/" className="hidden max-w-40 dark:block">
                    {props.logoalt ? (
                      <div className="flex gap-2 items-center">
                        <Image
                          {...urlForImage(props.logoalt)}
                          alt="Logo"
                          width={50}
                          height={50}
                          priority={true}
                          sizes="(max-width: 640px) 100vw, 200px"
                        />
                        <h3 className="block text-center text-2xl font-bold">
                          RBNTECH
                        </h3>
                      </div>
                    ) : (
                      <h3 className="block text-center text-2xl font-bold text-slate-800">
                       RBNTECH
                      </h3>
                    )}
                  </Link>
                  {isDesktop? " ": <div className="flex gap-3 ml-auto lg:hidden"><a href={`tel:${props.phone}`} className="flex gap-3 mx-3"><Phone className="w-5 h-5"/>{props.phone}</a><CartAction /></div>}
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-2 rounded-md px-2 py-1 text-gray-50 hover:text-blue-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 lg:hidden ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div> 
                <div className="w-full flex-col items-center mt-4 justify-start lg:order-none lg:mt-0 lg:flex lg:w-auto lg:flex-auto lg:flex-row lg:justify-end">
                  <div className="w-full flex-1">
                      <div className="relative text-gray-400">
                        <form action="/product" method="GET" className="mt-4">
                          <SearchInput placeholder="Search Product" />
                        </form>
                      </div>
                  </div>
                </div>
                <div className="order-2 hidden w-full flex-col items-center justify-start lg:order-none lg:flex lg:w-auto lg:flex-1 lg:flex-row">
                  {rightmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-md uppercase font-semibold text-gray-50 hover:text-blue-500 "
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          <span> {item.label}</span>
                          {item.badge && (
                            <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                  <a href={`tel:${props.phone}`} className="flex gap-3 mx-3"><Phone className="w-5 h-5"/>{props.phone}</a>
                  <CartAction />
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start lg:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="w-full px-5 py-2 text-sm font-medium text-gray-50 hover:text-blue-500"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  </header>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-50 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="md:transition md:ease-out md:duration-100"
            enterFrom="md:transform md:opacity-0 md:scale-95"
            enterTo="md:transform md:opacity-100 md:scale-100"
            leave="md:transition md:ease-in md:duration-75"
            leaveFrom="md:transform md:opacity-100 md:scale-100"
            leaveTo="md:transform md:opacity-0 md:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
