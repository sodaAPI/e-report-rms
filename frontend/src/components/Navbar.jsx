import React, { useRef } from "react";
import { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { DropdownButton } from "./DropdownLink";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  // { name: "Home", ref:  mainRef , current: false },
  // { name: "About", ref:  aboutRef , current: false },
];

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {/* Navigation Bar */}

      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"
                        alt="Bank BTN"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"
                        alt="Bank BTN"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          ref={item.ref}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-bold"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className=" p-1 items-center gap-2 flex rounded-2xl bg-gray-800 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-1 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div className="sm:block hidden text-sm font-bold text-gray-300"></div>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute flex flex-col right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-slate-50 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700 gap-2 px-5">
                        {!user ? (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/login"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Login</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/register"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Register</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                          </>
                        ) : (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/dashboard"
                                  className={classNames(
                                    active ? " bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Dashboard</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/dashboard/settings"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Settings</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Logout</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                          </>
                        )}
                      </Menu.Items>
                      <Menu.Items className="absolute flex flex-col right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-slate-50 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700 gap-2 px-5">
                        {!user ? (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/login"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Login</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/register"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Register</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                          </>
                        ) : (
                          <>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/dashboard"
                                  className={classNames(
                                    active ? " bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Dashboard</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/dashboard/preferences"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Settings</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  <DropdownButton>Logout</DropdownButton>
                                </Link>
                              )}
                            </Menu.Item>
                          </>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
