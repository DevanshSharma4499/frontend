
import React from "react";
import Cart from '../Cart/Cart'
import { NavLink, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { useContext } from "react";
// import { Context } from "react";
import Search from "../Search";
import { Dialog, Disclosure, Popover, Menu, Tab, Transition, } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../helper";
// import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const navigation = {
  
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const { username } = userData();
  // const [{ basket }, dispatch] = useStateValue();
  // const { cartCount } = useContext(Context);
  const [show, setShow] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const { jwt } = userData();
  const isLoggedIn = !!jwt
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const [open, setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);


  return (
    <>
    <div className="bg-[#D9F8FF]">
      <div className="bg-[#dff5ff] z-10 sticky top-0">
        {/* Mobile menu */}

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-100 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-[21rem] flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center border rounded-md p-2 text-gray-900"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}



                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <a
                          href={page.href}
                          className="-m-2 block p-2 font-semibold text-gray-900"
                        >
                          {page.name}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <a
                        href="./singin"
                        className="-m-2 block p-2 font-semibold text-gray-900"
                      >
                        Sign in
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="singup"
                        className="-m-2 block p-2 font-semibold text-gray-900"
                      >
                        Create account
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <NavLink to="./" className="-m-2 flex items-center p-2">
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-semibold text-gray-900">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </NavLink>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-[#dff5ff]">
          <p className="flex h-10 items-center justify-center bg-[#26365b]  text-lg font-semibold text-white sm:px-6 ">
            Welcome To Shopworks Portal
          </p>

          <nav
            aria-label="Top"
            className="mx-auto max-w-full px-6 sm:px-6 lg:px-6 pb-[4px]"
          >
            <div className="">
              <div className="flex h-[75px] items-center">
                <button
                  type="button"
                  className="border-2  rounded-md  bg-white p-2 text-black-600 lg:hidden focus:outline-0"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <NavLink to="/">
                    {/* <span className="sr-only">Your Company</span>
                    <h1 className="text-xl text-[#111]">Online Gadget Store</h1> */}
                    <img
                      className="h-[80px] w-auto "
                      src="/images/logo1.png"
                      alt=""
                      draggable="false"
                    />
                  </NavLink>
                </div>

                {/* Flyout menus */}
                <NavLink
                  to="./"
                  className="pl-12 font-semibold text-lg text-gray-700 imp"
                >
                  Home
                </NavLink>
               
                    <Menu as="div" className="relative inline-block text-left pl-12 font-semibold text-lg text-gray-700 imp">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-lg text-gray-700  ">
                       Category
                        <ChevronDownIcon className="-mr-1 mt-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <div onClick={()=> navigate("/category/" + 1)}
                                
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Dairy Products
                              </div>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                               <div onClick={()=> navigate("/category/" + 2)}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Eletronics
                              </div>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <div onClick={()=> navigate("/category/" + 3)}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Grains
                            </div>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                               <div onClick={()=> navigate("/category/" +4)}
                               className={classNames(
                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                 'block px-4 py-2 text-sm'
                               )}
                             >
                               Accessories
                             </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                               <div onClick={()=> navigate("/category/" +5)}
                               className={classNames(
                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                 'block px-4 py-2 text-sm'
                               )}
                             >
                               Snacks
                             </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                               <div onClick={()=> navigate("/category/" +6)}
                               className={classNames(
                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                 'block px-4 py-2 text-sm'
                               )}
                             >
                               Home Appliances
                             </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                               <div onClick={()=> navigate("/category/" +4)}
                               className={classNames(
                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                 'block px-4 py-2 text-sm'
                               )}
                             >
                               Kitchen Utencils
                             </div>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                               <div onClick={()=> navigate("/category/" +4)}
                               className={classNames(
                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                 'block px-4 py-2 text-sm'
                               )}
                             >
                               Drinks and Bevrages
                             </div>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                
                <NavLink
                  to="./cartpage"
                  className="pl-12 font-semibold text-lg text-gray-700 imp"
                >
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-lg text-gray-700  ">
                        Products
                        <ChevronDownIcon className="-mr-1 mt-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </NavLink>
                <NavLink
                  to="./cartpage"
                  className="pl-12 font-semibold text-lg text-gray-700 imp"
                >
                    <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-lg text-gray-700  ">
                        Stores
                        <ChevronDownIcon className="-mr-1 mt-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </NavLink>
                <NavLink
                  to="./EmblaCarousel"
                  className="pl-12 font-semibold text-lg text-gray-700 imp"
                >
                  Contact Us
                </NavLink>
                {/* <NavLink
                  to="./about"
                  className="pl-12 font-semibold text-lg text-gray-700 imp"
                >
                  About Us
                </NavLink> */}
                {/* <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-[#206c43] text-[#206c43]"
                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                  "relative z-10 -mb-px flex items-center border-b-2 pt-px text-lg font-semibold transition-colors duration-200 ease-out"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-lg text-gray-500">
                                
                                <div
                                  className="absolute inset-0 top-1/2 bg-white shadow "
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-8 ">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-6 ">
                                      <div className="col-start-2 grid grid-cols-3 gap-x-8 ">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative text-base sm:text-lg"
                                          >
                                            <div className="aspect-h-1 aspect-w-1 overflow-scroll rounded-lg bg-gray-100 group-hover:opacity-75 w-[150px]">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center w-[150px]"
                                              />
                                            </div>
                                            <a
                                              href={item.href}
                                              className="mt-2  block font-semibold text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0 z-10"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1 mb-2"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-lg">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className="font-semibold text-gray-900"
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <NavLink
                                                    to={item.href}
                                                    className="hover:text-gray-800"
                                                  >
                                                    {item.name}
                                                  </NavLink>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <NavLink
                        key={page.name}
                        to={page.NavLink}
                        className="flex items-center text-lg font-semibold text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </NavLink>
                    ))}
                  </div>
                </Popover.Group> */}

                <div className="ml-auto flex items-center">
                  {/* Search */}
                  <div
                    onClick={() => setSearchModal(true)}
                    className="flex lg:ml-6"
                  >
                    <a className="p-2 text-gray-600 hover:text-[#206c43] lg:mr-5 hover:border hover:rounded-[50%] hover:bg-[rgba(40,167,69,.0784)]">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  {/* end search */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {isLoggedIn ? (
                      <NavLink
                        to="./logout"
                        className="text-lg font-semibold text-gray-700 hover:text-gray-800"
                      >
                        Log out
                      </NavLink>
                    ) : (
                      <>
                        <NavLink
                          to="./login"
                          className="text-lg font-semibold text-gray-700 hover:text-gray-800"
                        >
                          Log in
                        </NavLink>
                        <span
                          className="h-6 w-px bg-gray-200"
                          aria-hidden="true"
                        />
                        <NavLink
                          to="./register"
                          className="text-lg font-semibold text-gray-700 hover:text-gray-800"
                        >
                          Create account
                        </NavLink>
                      </>
                    )}
                  </div>

                  <div className="hidden lg:ml-8 lg:flex">

                    {/* <a
                      href="#"
                      className="flex items-center text-gray-700 hover:text-gray-800"
                    >
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-lg font-semibold">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </a> */}
                  </div>

                  {/* Search */}
                  {/* <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-600 hover:text-[#206c43]"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </a>
                  </div> */}

                  {/* Cart */}

                  <div className="ml-4 flow-root lg:ml-6 dis-block ">
                    <div>
                      <div
                        onClick={() => setshowCart(true)}
                        // onClick={() => setShow(!show)}
                        className="group -m-2 flex items-center p-2 hover:border hover:rounded-md hover:bg-[rgba(40,167,69,.0784)] mr-2"
                      >
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-600 group-hover:text-[#206c43]"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-lg font-semibold text-gray group-hover:text-[#206c43]">
                          {products.length}
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </div>
                    </div>
                  </div>
                  <div className="hover:border hover:rounded-[50%] p-2 hover:bg-[rgba(40,167,69,.0784)]">
                    <NavLink to="./Login">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600 hover:text-[#206c43] "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400 flex" aria-hidden="true" /> */}
                    </NavLink>
                  </div>
                  {/*  */}

                </div>
              </div>
            </div>
            <div className=" border-[3px]  border-[#111] rounded-xl"></div>

          </nav>
        </header>
      </div>
      {showCart && <Cart setshowCart={setshowCart} />}
      {searchModal && <Search className="bg-[#D9F8FF]"  setSearchModal={setSearchModal} />}
      </div>
    </>
  );
}
