import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";

const divisionList = ["Guest","CMT", "DBA", "AS"];
const rolesList = ["user", "admin"];

const AddUser = () => {
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
      roles: roles,
      password: password,
      confPassword: confPassword,
    });
    let path = "/dashboard/user";
    navigate(path);
    window.alert("User Added Successfully");
    history.push("/user");
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-full p-10">
      <div className="py-5">
        <span className="text-xl font-bold">Add new User</span>
      </div>
      <form onSubmit={saveUser}>
        <div className="flex flex-row gap-20">
          <section className="sm:w-full w-2/5">
            {/* Name */}

            <div>
              <label className="label text-white">Name</label>
              <input
                className="input input-bordered w-full"
                type="name"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}

            <div>
              <label className="label text-white">Email</label>
              <input
                className="input input-bordered w-full"
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Username */}

            <div>
              <label className="label text-white">Username</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Phone */}

            <div>
              <label className="label text-white">Phone</label>
              <input
                className="input input-bordered w-full"
                type="tel"
                placeholder="Phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Roles */}

            <div className="mb-1">
              <Listbox
                as="div"
                className="space-y-1"
                value={roles}
                onChange={setRoles}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block my-2 pl-1 text-white">
                      Roles
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default h-11 relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900">
                            {roles}
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
                          {rolesList.map((rolesList) => (
                            <Listbox.Option
                              key={rolesList}
                              value={rolesList}>
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
                                    {rolesList}
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
          </section>

          <section className="sm:w-full w-2/5">
            {/* Division */}

            <div className="mb-1">
              <Listbox
                as="div"
                className="space-y-1"
                value={division}
                onChange={setDivision}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block my-2 pl-1 text-white">
                      Division
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default h-11 relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
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
                        className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
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
                                      selected ? "font-semibold" : "font-normal"
                                    } block truncate`}>
                                    {divisionList}
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

            {/* Birth */}

            <div>
              <label className="label text-white">Birth date</label>
              <input
                className="input input-bordered w-full"
                type="date"
                placeholder="Birth"
                value={birth}
                required
                onChange={(e) => setBirth(e.target.value)}
              />
            </div>

            {/* Password*/}

            <div>
              <label className="label text-white">Password</label>
              <input
                className="input input-bordered w-full"
                type={passwordVisible ? "text" : "password"}
                placeholder={passwordVisible ? "Password" : "********"}
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password*/}

            <div>
              <label className="label text-white">Confirm Password</label>
              <input
                className="input input-bordered w-full"
                type={passwordVisible ? "text" : "password"}
                placeholder={passwordVisible ? "Confirm Password" : "********"}
                value={confPassword}
                required
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>

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

            <div className="pt-5">
              <button className="w-full bg-sky-500 p-2 rounded-lg text-white">
                Add user
              </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
