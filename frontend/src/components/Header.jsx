import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useProSidebar } from "react-pro-sidebar";
import {
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  UserIcon,
  DocumentCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { DropdownButton } from "./dropdownLink";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, LogOut, reset } from "../auth/authSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { collapseSidebar } = useProSidebar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { isError } = useSelector((state) => state.auth);
  const [notification, setNotification] = useState([]);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const getNotification = async () => {
    const response = await axios.get(
      `http://localhost:5000/notification/getuser`
    );
    setNotification(response.data);
  };

  useEffect(() => {
    getNotification();
  }, []);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const truncate = (input) =>
    input?.length > 25 ? `${input.substring(0, 25)} ...` : input;

  return (
    <section className="w-full">
      <div className="flex flex-row md:gap-40 gap-60 text-slate-300">
        {/* Menu */}
        <div className="md:w-1/2">
          <button
            onClick={() => collapseSidebar()}
            className="px-3 py-2 rounded-lg bg-sky-900 text-white">
            <div className="flex flex-row gap-2 hover:text-white">
              <Bars3Icon className="h-6 w-6 " />
              <p className="md:block hidden">Menu</p>
            </div>
          </button>
        </div>
        <div className="flex flex-row items-center md:gap-10 gap-3">
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
              <Menu.Items className="absolute flex flex-col -right-0 md:w-96 w-auto text-start items-start origin-top-right rounded-md bg-slate-50 py-2 gap-2 px-5">
                <>
                  {/* Notification */}
  {notification ? (       
    notification
      .sort((a, b) => {
        let dateA = a.task
          ? new Date(a.task.deadline)
          : new Date(a.meeting.meeting_date);
        let dateB = b.task
          ? new Date(b.task.deadline)
          : new Date(b.meeting.meeting_date);
        return dateA - dateB;
      })
      .reverse()
      .slice(0, 3)
      .map((val, index) => {
        let date;
        let options;
        if (val.taskId !== null) {
          date = new Date(val.task.deadline);
          options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            timeZone: "Asia/Bangkok",
          };
        } else {
          date = new Date(val.meeting.meeting_date);
          options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            timeZone: "Asia/Bangkok",
          };
        }
        const formattedDate = date.toLocaleString(
          "en-US",
          options
        );
        return (
         <Menu.Item
            data-tip={val.notifmsg}
            className="tooltip tooltip-right flex flex-row py-2 text-sm gap-2 text-gray-700">
            <DropdownButton className=" flex flex-row">
              <InformationCircleIcon className="flex flex-row w-5 h-5 text-red-900" />
              {truncate(val.notifmsg)}{" "}
              <p className="text-blue-800">{formattedDate}</p>
            </DropdownButton>
         </Menu.Item>
        );
      })
  ) : (
    <Menu.Item className="flex flex-row py-2 text-sm gap-2 text-gray-700">
      <DropdownButton className=" flex flex-row">
        There is no notification at the moment
      </DropdownButton>
    </Menu.Item>
  )}


                </>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Account */}
          <Menu as="div" className="relative pl-3">
            <div className="hover:text-white">
              <Menu.Button className=" p-1 items-center gap-2 flex rounded-2xl focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <UserCircleIcon className="w-6 h-6" />
                <div className="md:block hidden ">
                  {user && user.name} / {user && user.username}
                </div>
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
              <Menu.Items className="absolute flex flex-col text-start items-start origin-top-right rounded-md bg-slate-50 py-2 gap-4 px-7">
                <>
                  {/* Profile */}

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/dashboard/profile"
                        className={classNames(
                          active ? "" : "",
                          "block py-2 text-sm text-gray-700"
                        )}>
                        <DropdownButton className="flex flex-row gap-2">
                          <UserIcon className="w-5 h-5" />
                          Profile
                        </DropdownButton>
                      </Link>
                    )}
                  </Menu.Item>

                  {/* Preferences */}

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/dashboard/task"
                        className={classNames(
                          active ? "" : "",
                          "block py-2 text-sm text-gray-700"
                        )}>
                        <DropdownButton className="flex flex-row gap-2">
                          <DocumentCheckIcon className="w-5 h-5" />
                          My Task
                        </DropdownButton>
                      </Link>
                    )}
                  </Menu.Item>

                  {/* Admin - Users */}

                  {user && user.roles === "admin" && (
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/dashboard/user"
                          className={classNames(
                            active ? "" : "",
                            "block py-2 text-sm text-gray-700"
                          )}>
                          <DropdownButton className="flex flex-row gap-2">
                            <UsersIcon className="w-5 h-5" />
                            Users
                          </DropdownButton>
                        </Link>
                      )}
                    </Menu.Item>
                  )}
                </>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Logout */}

          <button onClick={logout} className="md:px-7 px-4">
            <div className="flex flex-row gap-1 items-center hover:text-white">
              <ArrowLeftOnRectangleIcon className="h-6 w-6" /> Logout
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
