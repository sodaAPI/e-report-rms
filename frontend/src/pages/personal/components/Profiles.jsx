import React, { useState, useEffect } from "react";
import axios from "axios";
import { Listbox } from "@headlessui/react";
import { Link } from "react-router-dom";

// TODO: Add Authentication

export default function Profiles() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5000/user`);
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/user/${id}`);
    getUsers();
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://source.unsplash.com/random/300×300"
          className="h-32 w-32 object-cover rounded-full m-6"
        />
        Administrator{users.name}
      </div>

      <div className="divider sm:px-52 px-20 sm:py-3 py-1"></div>

      <div className="px-10">
        <form>
          <div className="flex sm:flex-row flex-col sm:gap-20 gap-2 justify-center">
            <section className="w-80">
              {/* Name */}

              <div>
                <label className="label">Name</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="name"
                  placeholder="Name"
                  value={users.name}
                  disabled
                />
              </div>

              {/* Email */}

              <div>
                <label className="label">Email</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="email"
                  placeholder="Email"
                  value={users.email}
                  disabled
                />
              </div>

              {/* Username */}

              <div>
                <label className="label">Username</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  placeholder="Username"
                  value={users.username}
                  disabled
                />
              </div>

              {/* Phone */}

              <div>
                <label className="label">Phone</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="tel"
                  placeholder="Phone"
                  value={users.phone}
                  disabled
                />
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
                              {users.division}CMT
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
                <label className="label">Birth date</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="date"
                  placeholder="Birth"
                  value={users.birth}
                  disabled
                />
              </div>
              {/* Created At*/}

              <div>
                <label className="label">Created At</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="date"
                  placeholder="Created At"
                  value={users.createdAt}
                  disabled
                />
              </div>

              {/* Password*/}

              <div>
                <label className="label">Password</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="password"
                  placeholder="Password"
                  value={users.password}
                  disabled
                />
              </div>

              {/* Button */}

              <div className="flex flex-row sm:items-center sm:justify-center pt-10 sm:gap-6 gap-7 pb-5">
                <>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        )
                      )
                        deleteUser(users.id);
                    }}
                    className=" w-36 bg-red-500 hover:bg-red-400 p-3 rounded-lg text-white">
                    Delete Profile
                  </button>
                </>
                <>
                  <Link to="/dashboard/profile/edit/:id">
                    <button className=" w-36 bg-sky-500 hover:bg-sky-400 p-3 rounded-lg text-white">
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
