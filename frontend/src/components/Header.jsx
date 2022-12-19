import React, { Fragment } from "react";
import { useProSidebar } from "react-pro-sidebar";
import {
  // ChartBarIcon,
  Bars3Icon,
  BellIcon,
  // ChatBubbleLeftRightIcon,
  // UserGroupIcon,
  // UserIcon,
  // InboxIcon,
  // Cog6ToothIcon,
  // InformationCircleIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { DropdownButton } from "./dropdownLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// TODO: Add Authentication

export default function Header() {
  const { collapseSidebar } = useProSidebar();

  return (
    <section className="w-full">
      {/* Navbar Header */}
      <div className="flex flex-row sm:gap-96 gap-40 text-slate-300">
        <div className="sm:w-3/4">
          <button
            onClick={() => collapseSidebar()}
            className="px-3 py-2 rounded-lg bg-sky-900 text-white">
            <div className="flex flex-row gap-2 hover:text-white">
              <Bars3Icon className="h-6 w-6 " />
              <p className="sm:block hidden">Menu</p>
            </div>
          </button>
        </div>
        <div className="flex flex-row items-center sm:gap-7 gap-3">

          {/* Notification */}

          <Menu as="div" className="relative ml-3">
            <div className="hover:text-white">
              <Menu.Button className=" p-1 items-center gap-1 flex rounded-2xl focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <BellIcon className="h-6 w-6" />
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
              <Menu.Items className="absolute flex flex-col right-0 z-50 mt-2 w-36 text-center items-center origin-top-right rounded-md bg-slate-50 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700 gap-2 px-5">
                <>
                  {/* Notification Sample */}

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        // to="/dashboard/profile"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}>
                        <DropdownButton>Notification Sample</DropdownButton>
                      </Link>
                    )}
                  </Menu.Item>

                  {/* Notification Sample */}

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        // to="/dashboard/preferences"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}>
                        <DropdownButton>Notification Sample</DropdownButton>
                      </Link>
                    )}
                  </Menu.Item>

                  {/* Notification Sample */}

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}>
                        <DropdownButton>Notification Sample</DropdownButton>
                      </Link>
                    )}
                  </Menu.Item>
                </>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Account */}
          <Menu as="div" className="relative ml-3">
            <div className="hover:text-white">
              <Menu.Button className=" p-1 items-center gap-2 flex rounded-2xl focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <UserCircleIcon className="w-6 h-6" />
                <div className="sm:block hidden ">Administrator</div>
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
              <Menu.Items className="absolute flex flex-col right-0 z-50 mt-2 w-36 text-center items-center origin-top-right rounded-md bg-slate-50 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700 gap-2 px-5">
                <>
                  {/* Profile */}

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/dashboard/profile"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}>
                        <DropdownButton>Profile</DropdownButton>
                      </Link>
                    )}
                  </Menu.Item>

                  {/* Preferences */}

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

                  {/* Logout */}

                  {/* TODO: Logout Func */}

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
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Logout */}

          <button className="sm:px-7 px-4">
            <div className="flex flex-row gap-1 items-center hover:text-white">
              <ArrowLeftOnRectangleIcon className="h-6 w-6" /> Logout
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
