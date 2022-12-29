import React from "react";
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  CheckIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import { Listbox, Transition } from "@headlessui/react";
import {
  UserCircleIcon,
  BuildingOffice2Icon,
  UsersIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//TODO: Chat Group/Forum API
const filterSearch = ["Latest", "Oldest"];

export default function Discussions() {
  const [filtersSearch, setFiltersSearch] = useState([filterSearch[0]]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const gotoProfile = async () => {
    let path = "/dashboard/profile";
    navigate(path);
  };

  //User
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="py-5">
      <span className="flex flex-row items-center gap-2 px-5 text-2xl text-white">
        <ChatBubbleLeftRightIcon className="w-7 h-7" />
        Chat Dicussion
      </span>
      <section className="flex flex-row gap-5 justify-center py-5 w-full">
        {/* Layout 1 */}
        <div className="flex flex-col bg-sky-800 bg-opacity-20 w-1/3 p-5 rounded-lg">
          {/* Profile */}
          <div className="flex flex-row xl:gap-44 md:gap-5 gap-0 items-center text-white">
            <section className="flex flex-row gap-2 items-center text-white">
              <UserCircleIcon className="lg:w-20 lg:h-20 w-10 h-10" />
              <span className="flex flex-col w-full lg:text-lg text-sm">
                {user?.name} / {user?.username}
                <span className="text-slate-300 lg:text-sm text-xs">
                  {user?.division} - {user?.roles}
                </span>
              </span>
            </section>
            <button
              onClick={gotoProfile}
              data-tip="User Profile"
              className=" tooltip font-bold hover:bg-slate-700 hover:rounded-md">
              <EllipsisVerticalIcon className="w-5 h-5 text-slate-300" />
            </button>
          </div>
          <div className="divider px-20" />
          {/* Header  */}
          <div className="flex flex-row gap-5 items-center self-center">
            {/* Search */}
            <div className="flex flex-row items-center self-center">
              <div className="lg:block hidden bg-sky-900 lg:p-3 p-0 rounded-l-xl">
                <MagnifyingGlassIcon className="w-6 h-6 text-white" />
              </div>
              <input
                className="input text-slate-900 bg-slate-100 lg:p-3 lg:text-base text-xs p-0 rounded-md lg:rounded-r-xl lg:rounded-l-none"
                type="text"
                placeholder=" Search ..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            {/* Filter */}
            <div className="xl:flex flex-row hidden items-center gap-2">
              <FunnelIcon className="text-white w-6 h-6" />
              <Listbox
                as="div"
                className="space-y-1"
                value={filtersSearch}
                onChange={setFiltersSearch}>
                {({ open }) => (
                  <>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-3 text-left  transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900">
                            {filtersSearch}
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                              className="h-5 w-5 text-gray-700"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor">
                              <path
                                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Listbox.Button>
                      </span>

                      <Transition
                        show={open}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                        <Listbox.Options
                          static
                          className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
                          {filterSearch.map((statusList) => (
                            <Listbox.Option key={statusList} value={statusList}>
                              {({ selected, active }) => (
                                <div
                                  className={`${
                                    active
                                      ? "text-white bg-blue-600"
                                      : "text-gray-900"
                                  } cursor-default select-none relative py-2 pl-8 pr-4`}>
                                  <span
                                    className={`${
                                      selected ? "font-semibold" : "font-normal"
                                    } block truncate`}>
                                    {statusList}
                                  </span>
                                  {selected && (
                                    <span
                                      className={`${
                                        active ? "text-white" : "text-blue-600"
                                      } absolute inset-y-0 left-0 flex items-center pl-1.5`}>
                                      <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </div>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
          </div>
          <div className="divider px-20" />
          {/* Channels */}
          <div className="">
            <span className="flex flex-row gap-2 items-center text-white text-xl font-bold">
              <BuildingOffice2Icon className="w-5 h-5" />
              Channels
            </span>
            {/* <button
              data-tip="Sent"
              className="tooltip tooltip-right flex flex-row w-full hover:bg-opacity-40 hover:focus:ring my-5 items-center bg-slate-800 bg-opacity-70 rounded-lg">
              <img
                src="https://source.unsplash.com/random/300x300"
                alt="user"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 sm:w-5 sm:h-5 lg:block hidden object-cover rounded-full m-6"></img>
              <div className="flex flex-col gap-3 text-start">
                <span className="flex md:flex-row flex-col md:gap-0 items-center xl:gap-7 gap-0">
                  <p className="text-slate-100 text-md font-bold">
                    Testing Name Channel
                  </p>
                  <p className="text-sm text-slate-400">12:59 AM</p>
                </span>
                <span className="flex flex-col lg:flex-row gap-2 text-slate-300 font-base lg:text-sm text-xs">
                  Admin : New Latest Message Channel ...
                  <CheckIcon className=" text-sky-400 w-5 h-5" />
                </span>
              </div>
            </button> */}
            <button
              data-tip="Sent"
              className="tooltip tooltip-right flex flex-row w-full hover:bg-opacity-40 hover:focus:ring my-5 items-center bg-slate-800 bg-opacity-70 rounded-lg">
              <img
                src="https://source.unsplash.com/random/300x300"
                alt="user"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 sm:w-5 sm:h-5 lg:block hidden object-cover rounded-full m-6"></img>
              <div className="flex flex-col gap-3 w-full text-start lg:pl-0 pl-2">
                <span className="text-slate-100 text-md font-bold">Testing Name Channel</span>
                <span className="text-slate-300 font-base lg:text-sm text-xs">Admin : New Latest Message Channel</span>
              </div>
              <div className="flex flex-col gap-3 w-full items-end pr-5 text-end">
                <span className="text-sm text-slate-400">12:00 AM</span>
                <CheckIcon className=" text-sky-400 w-5 h-5" />
              </div>
            </button>
          </div>
          <div className="divider px-20" />
          {/* Personal Chat */}
          <div className="">
            <span className="flex flex-row gap-2 items-center text-white text-xl font-bold">
              <UsersIcon className="w-5 h-5" />
              Personal Chat
            </span>
            <button
              data-tip="Seen"
              className="tooltip tooltip-right flex flex-row w-full hover:bg-opacity-40 hover:focus:ring my-5 items-center bg-slate-800 bg-opacity-70 rounded-lg">
              <img
                src="https://source.unsplash.com/random/300x300"
                alt="user"
                className="lg:h-16 lg:w-16 md:h-10 md:w-10 sm:w-5 sm:h-5 lg:block hidden object-cover rounded-full m-6"></img>
              <div className="flex flex-col gap-3 text-start">
                <span className="flex md:flex-row flex-col md:gap-0 items-center xl:gap-7 gap-0">
                  <p className="text-slate-100 text-md font-bold">
                    Person Name
                  </p>
                  <p className="text-sm text-slate-400">01:00 AM</p>
                </span>
                <span className="flex flex-col lg:flex-row gap-2 text-slate-300 font-base lg:text-sm text-xs">
                  Person Name : New Latest Message ...
                  <EyeIcon className=" text-sky-400 w-5 h-5" />
                </span>
              </div>
            </button>
          </div>
        </div>
        {/* Chat Layout 2 */}
        <div className="flex flex-col w-4/5">
          <div className="bg-sky-800 bg-opacity-10 p-5 rounded-t-lg">
            <span className="text-lg font-bold">Chat Header Name</span>
          </div>
          <div className="bg-sky-900 bg-opacity-30 p-5 rounded-b-lg min-h-screen">
            Chat Body
          </div>
        </div>
      </section>
    </div>
  );
}
