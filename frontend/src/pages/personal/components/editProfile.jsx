import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";

const divisionList = ["CMT", "DBA", "AS"];

export default function EditProfiles() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [division, setDivision] = useState(divisionList[0]);
  const [birth, setBirth] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useNavigate();
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/user", {
      name: name,
      username: username,
      email: email,
      phone: phone,
      division: division,
      birth: birth,
      password: password,
    });
    let path = "/dashboard/user";
    navigate(path);
    history.push("/user");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="flex sm:flex-row flex-col justify-center items-center sm:ml-72 sm:mr-3 sm:gap-5">
          <img
            src="https://source.unsplash.com/random"
            alt="user"
            className="h-32 w-32 object-cover rounded-full m-6"
          />
          <input className="text-sm py-3 mb-3" type="file" />
        </div>
        Administrator
      </div>

      <div className="divider sm:px-52 px-20 sm:py-3 py-1"></div>

      <div className="px-10">
        <form onSubmit={saveUser}>
          <div className="flex sm:flex-row flex-col sm:gap-20 gap-2 justify-center">
            <section className="w-80">
              {/* Name */}

              <div>
                <label className="label">Name</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}

              <div>
                <label className="label">Email</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Username */}

              <div>
                <label className="label">Username</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* Phone */}

              <div>
                <label className="label">Phone</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </section>

            <section className="sm:pt-3 pt-0 w-80">
              {/* Division */}

              <div className="sm:pb-0 pb-1">
                <Listbox
                  as="div"
                  className="space-y-1"
                  value={division}
                  onChange={setDivision}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block py-1">
                        Division
                      </Listbox.Label>
                      <div className="relative">
                        <span className="inline-block w-80 rounded-md shadow-sm">
                          <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            <span className="block truncate text-gray-900">
                              {division}
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
                          className="absolute mt-1 w-80 rounded-md bg-white shadow-lg">
                          <Listbox.Options
                            static
                            className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
                            {divisionList.map((divisionList) => (
                              <Listbox.Option
                                key={divisionList}
                                value={divisionList}>
                                {({ selected, active }) => (
                                  <div
                                    className={`${
                                      active
                                        ? "text-white bg-blue-600"
                                        : "text-gray-900"
                                    } cursor-default select-none relative py-2 pl-8 pr-4`}>
                                    <span
                                      className={`${
                                        selected
                                          ? "font-semibold"
                                          : "font-normal"
                                      } block truncate`}>
                                      {divisionList}
                                    </span>
                                    {selected && (
                                      <span
                                        className={`${
                                          active
                                            ? "text-white"
                                            : "text-blue-600"
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

              {/* Birth */}

              <div>
                <label className="label">Birth date</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="date"
                  placeholder="Birth"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </div>

              {/* Password*/}

              <div>
                <label className="label">Password</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Confirm Password*/}

              <div>
                <label className="label">Confirm Password</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="password"
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
              {/* Button */}

              <div className="flex sm:flex-row items-center justify-center pt-10 sm:gap-6 pb-5">
                <button className="w-52 bg-sky-500 hover:bg-sky-400 p-3 rounded-lg text-white">
                  Update Profile
                </button>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
}
