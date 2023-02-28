import React, { useState, useEffect } from "react";
import axios from "axios";
import { Listbox } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  UserCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function Profiles() {
  const [users, setUsers] = useState([]);
  const [setNotification] = useState([]);
  const navigate = useNavigate("");

  //User
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getUsers();
    getNotification();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5000/user`);
    setUsers(response.data);
  };

  const getNotification = async () => {
    const response = await axios.get(`http://localhost:5000/notification/get`);
    setNotification(response.data);
  };

  const deleteNotification = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/notification/delete`
      );
      if (res.status === 200) {
        let path = "/dashboard";
        setTimeout(() => {
          navigate(path);
          window.alert("Notification Deleted Successfully");
        }, 2000);
        getNotification();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const clearFiles = async () => {
    try {
      await axios.delete(`http://localhost:5000/doc/clear`);
      let path = "/dashboard";
      navigate(path);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        {!user?.picture ? (
          <UserCircleIcon className="text-slate-300 w-36 h-36 mt-5" />
        ) : (
          <img
            src={user?.picture}
            className="h-32 w-32 object-cover rounded-full m-6"
          />
        )}
        {user?.name}
      </div>

      <div className="divider sm:px-52 px-20 sm:py-3 py-1"></div>

      <div className="px-10">
        <form>
          <div className="flex font sm:flex-row flex-col sm:gap-20 gap-2 justify-center">
            <section className="w-80">
              {/* Name */}

              <div>
                <label className="label text-white">Name</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="name"
                  placeholder={user?.name}
                  value={users.name}
                  disabled
                />
              </div>

              {/* Email */}

              <div>
                <label className="label text-white">Email</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="email"
                  placeholder={user?.email}
                  value={users.email}
                  disabled
                />
              </div>

              {/* Username */}

              <div>
                <label className="label text-white">Username</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  placeholder={user?.username}
                  value={users.username}
                  disabled
                />
              </div>

              {/* Phone */}

              <div>
                <label className="label text-white">Phone</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="tel"
                  placeholder={user?.phone}
                  value={users.phone}
                  disabled
                />
              </div>

              <div className="flex flex-col sm:items-center sm:justify-center pb-20">
                <>
                  {/* Clear Document File */}
                  {user.roles === "admin" && (
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to clear document file from this local storage?"
                          )
                        )
                          clearFiles();
                      }}
                      className="flex flex-row text-sm gap-2 w-full text-center justify-center items-center bg-red-500 hover:bg-red-400 p-3 rounded-lg text-white mt-9">
                      Clear Document File
                    </button>
                  )}

                  {/* Delete Notification */}

                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to clear all notification from your account?"
                        )
                      )
                        deleteNotification();
                    }}
                    className="flex flex-row text-sm gap-2 w-full text-center justify-center items-center bg-red-700 hover:bg-red-600 p-3 rounded-lg text-white mt-9">
                    <TrashIcon className="w-5 h-5" /> Clear Notification
                  </button>
                </>
              </div>
            </section>

            <section className="sm:pt-3 pt-0">
              {/* Division */}

              <div className="sm:pb-0 pb-1">
                <Listbox disabled as="div" className="space-y-1" value="CMT">
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block py-1">
                        Division
                      </Listbox.Label>
                      <div className="relative">
                        <span className="inline-block w-80 rounded-md shadow-sm">
                          <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            <span className="block truncate text-gray-900">
                              {user?.division}
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
                      </div>
                    </>
                  )}
                </Listbox>
              </div>

              {/* Birth */}

              <div>
                <label className="label text-white">Birth date</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="date"
                  placeholder={user?.birth}
                  value={user?.birth}
                  disabled
                />
              </div>
              {/* Created At*/}

              <div>
                <label className="label text-white">Created At</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="date"
                  placeholder={user?.createdAt}
                  value={user?.createdAt}
                  disabled
                />
              </div>

              {/* Password*/}

              <div>
                <label className="label text-white">Password</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="password"
                  placeholder="Password"
                  value={user?.password}
                  disabled
                />
              </div>

              {/* Button */}

              <div className="sm:items-center sm:justify-center pt-10 pb-20 sm:gap-6 gap-7">
                <>
                  <Link to={`/dashboard/profile/edit/${user.uuid}`}>
                    <button className="flex flex-row items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 p-3 rounded-lg text-white">
                      <PencilSquareIcon className="w-5 h-5" />
                      Edit Profile
                    </button>
                  </Link>
                </>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
}
