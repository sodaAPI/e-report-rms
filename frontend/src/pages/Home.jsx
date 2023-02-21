import React, { useRef, Fragment, useEffect } from "react";
import Footer from "../components/Footer";
import {
  ChatBubbleBottomCenterTextIcon,
  Bars3Icon,
  XMarkIcon,
  PresentationChartBarIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { DropdownButton } from "../components/dropdownLink";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { getMe, LogOut, reset } from "../auth/authSlice";
import AOS from "aos";
import "aos/dist/aos.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const features = [
  {
    name: "Monitoring Reports",
    description:
      "Monitoring report adalah laporan yang menunjukkan hasil dari pemantauan sistem CMS (Content Management System) yang digunakan. Laporan ini dapat menunjukkan statistik report.",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Discussion",
    description:
      "Discussion adalah fitur yang terdapat di Website E-Report Management System yang dapat memudahkan user untuk berinteraksi dengan user lainnya satu sama lain menggunakan chat messages.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Mobile Responsive",
    description:
      "Website E-Report Management System memiliki fitur Mobile Responsive sehingga website ini dapat dijalakankan secara efektif diplatform mobile.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Task Remainder",
    description:
      "Task Remainder adalah sebuah fitur yang dapat memudahkan user untuk mengingatkan bahwa user memiliki task yang belum selesai ataupun adanya meeting online melalui email notification.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Homepage() {
  //User
  const { user } = useSelector((state) => state.auth);

  //Logout
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const mainRef = useRef(null); //represents main section
  const aboutRef = useRef(null); //represents about section

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const navigation = [
    { id: 1, name: "Home", ref: mainRef, to: "/home/#home", current: false },
    { id: 2, name: "About", ref: aboutRef, to: "/home/#about", current: false },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <div className=" w-screen min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <div data-aos="fade-down" data-aos-duration="750">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      aria-label={open ? "Close main menu" : "Open main menu"}>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
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
                          <Link
                            key={item.id}
                            to={item.to}
                            onClick={() => {
                              handleScroll(item.ref.current);
                            }}>
                            <a
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-bold"
                              )}
                              aria-current={item.current ? "page" : undefined}>
                              {item.name}
                            </a>
                          </Link>
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
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8">
                            <path
                              strokeLineCap="round"
                              strokeLineJoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {/* <div className="sm:block hidden text-sm font-bold text-gray-300"></div> */}
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
                                    to="/dashboard/profile"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}>
                                    <DropdownButton>Profile</DropdownButton>
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
                                    <DropdownButton onClick={logout}>
                                      Logout
                                    </DropdownButton>
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
      {/* End Of <Navbar /> */}

      {/* Main Content */}

      <div ref={mainRef} className="relative overflow-hidden bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className=" relative z-10 py-4 bg-gray-50 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-gray-50 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main
              data-aos="fade-left"
              data-aos-duration="1500"
              className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl xl:inline">
                    Welcome to
                  </span>{" "}
                  <span className="block text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-indigo-600 xl:inline">
                    Bank BTN e-Reports Management System
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Sistem Manajemen E-Report adalah aplikasi perangkat lunak yang
                  memungkinkan pengguna untuk membuat, membaca, memperbarui, dan
                  menghapus laporan, serta mengelola pengguna, rapat, tugas, dan
                  memiliki pemberitahuan berbasis e-mail.
                </p>

                <div className="sm:pb-0 pt-11 pb-1">
                  <>
                    <div className="py-10 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      {!user ? (
                        <>
                          <div my-3>
                            <a
                              href="/login"
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-base font-semibold text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                              Login
                            </a>
                          </div>
                          <div className="sm:mt-0 sm:ml-3">
                            <a
                              href="/register"
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-semibold text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">
                              Register
                            </a>
                          </div>
                        </>
                      ) : (
                        <div my-3>
                          <a
                            href="/dashboard"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-base font-semibold text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                            Dashboard
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://live.staticflickr.com/640/22428519218_702085787f_b.jpg"
            alt=""
          />
        </div>
      </div>

      <div ref={aboutRef} className=" bg-indigo-50 py-16">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg font-semibold text-indigo-600">About</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Bank BTN e-Report Management System
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto pb-11">
              Berikut ini adalah beberapa fitur yang terdapat di Website
              E-Report Management System
            </p>
          </div>

          <div className="py-0">
            <dl className="space-y-10 pb-10 bg-white p-5 rounded-3xl shadow-md md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-justify ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
