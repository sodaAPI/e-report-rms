import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import {
  UserCircleIcon,
  ArrowLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const divisionList = ["Guest", "CMT", "DBA", "AS"];
const rolesList = ["user", "admin"];

export default function EditProfiles() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [division, setDivision] = useState(divisionList[0]);
  const [birth, setBirth] = useState("");
  const [roles, setRoles] = useState(rolesList[0]);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const history = useNavigate();
  const { uuid } = useParams();
  const navigate = useNavigate();

  const goBack = async () => {
    let path = "/dashboard/profile";
    navigate(path);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/user/${uuid}`, {
      name: name,
      username: username,
      email: email,
      phone: phone,
      division: division,
      birth: birth,
      roles: roles,
      password: password,
      confPassword: confPassword,
    });
    let path = "/dashboard/profile";
    navigate(path);
    window.alert("User Updated Successfully");
    history.push("/user");
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/me`);
    setName(response.data.name);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setDivision(response.data.division);
    setBirth(response.data.birth);
    setRoles(response.data.roles);
    setPassword(response.data.password);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  //User
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center">
          <UserCircleIcon className="text-slate-300 w-36 h-36 mt-5" />
        </div>
        {user?.name}
      </div>

      <div className="divider sm:px-52 px-20 sm:py-3 py-1"></div>

      <div className="px-10">
        <form>
          <div className="flex sm:flex-row flex-col sm:gap-20 gap-2 justify-center">
            <section className="w-80">
              {/* Name */}

              <div>
                <label className="label text-white">Name</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="name"
                  placeholder={user?.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}

              <div>
                <label className="label text-white">Email</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="email"
                  placeholder={user?.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Username */}

              <div>
                <label className="label text-white">Username</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  placeholder={user?.username}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Phone */}

              <div>
                <label className="label text-white">Phone</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="tel"
                  placeholder={user?.phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
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
                      <Listbox.Label className="block py-1 text-white">
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
                <label className="label text-white">Birth date</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="date"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                  required
                />
              </div>

              {/* Password*/}

              <div>
                <label className="label text-white">Password</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type={passwordVisible ? "text" : "password"}
                  placeholder={passwordVisible ? "Password" : "********"}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password*/}

              <div>
                <label className="label text-white">Confirm Password</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type={passwordVisible ? "text" : "password"}
                  placeholder={passwordVisible ? "Password" : "********"}
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  required
                />
              </div>

              {/* Show Password */}

              <label
                htmlFor="toggle-password-visibility"
                className="cursor-pointer select-none text-gray-700">
                <input
                  type="checkbox"
                  id="toggle-password-visibility"
                  onChange={() => setPasswordVisible(!passwordVisible)}
                  className="bg-white mr-2 mt-5"
                />
                <span className="pt-0.5 text-slate-400">Show password</span>
              </label>
              {/* Button */}

              <div className="flex sm:flex-row items-center justify-center pt-10 pb-16 sm:gap-6">
                <button
                  onClick={goBack}
                  className="flex flex-row justify-center items-center gap-2 w-full bg-sky-500 hover:bg-sky-400 p-3 rounded-lg text-white">
                  <ArrowLeftIcon className="w-5 h-5" />
                  Go Back
                </button>
                <button
                  onClick={saveUser}
                  className="flex flex-row justify-center items-center gap-0.5 w-full bg-green-500 hover:bg-green-400 p-3 rounded-lg text-white">
                  <PencilSquareIcon className="w-5 h-5" />
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
