import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const divisionList = ["Guest","CMT", "DBA", "AS"];

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [division, setDivision] = useState(divisionList[0]);
  const [birth, setBirth] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [msg, setMsg] = useState("");
  const history = useNavigate();
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      if (password === passwordConfirmation) {
        await axios.post("http://localhost:5000/user", {
          name: name,
          username: username,
          email: email,
          phone: phone,
          division: division,
          birth: birth,
          password: password,
          confPassword: passwordConfirmation,
        });
        let path = "/";
        navigate(path);
        window.alert("Register Successfully")
        history.push("/login");
      } else {
        setMsg("Password do not match !");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="hero bg-slate-100  min-h-screen">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <form onSubmit={Register} className="box">
                <Link to="/home">
                  <a className="flex justify-center items-center">
                    <img
                      data-aos="fade-down"
                      data-aos-duration="750"
                      className="w-64 py-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"></img>
                  </a>
                </Link>

                <a className="flex justify-start text-sky-900 font-semibold text-2xl pb-1 pt-5">
                  Register
                </a>
                <a className="flex justify-start text-sky-900 pb-1 pt-1">
                  Please fill out the register form with your user active
                  directory.
                </a>

                {/* Name */}
                <div className="text-gray-900 pt-3">
                  <label htmlFor="name">Name</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                    onChange={(event) => setName(event.target.value)}
                    required
                    autoFocus
                  />
                </div>

                {/* Email Address */}
                <div className="text-gray-900 pt-3">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                {/* Username */}
                <div className="text-gray-900 pt-3">
                  <label htmlFor="username">Username</label>

                  <input
                    id="username"
                    type="username"
                    placeholder="Username"
                    value={username}
                    className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                    onChange={(event) => setUsername(event.target.value)}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="text-gray-900 pt-3">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    type="phone"
                    placeholder="Phone Number"
                    value={phone}
                    className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </div>

                {/* Division */}

                <div className="text-gray-900 pt-3">
                  <Listbox
                    as="div"
                    className="space-y-1"
                    value={division}
                    onChange={setDivision}>
                    {({ open }) => (
                      <>
                        <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
                          Division
                        </Listbox.Label>
                        <div className="relative">
                          <span className="inline-block w-32 rounded-md shadow-sm">
                            <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                              <span className="block truncate">{division}</span>
                              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg
                                  className="h-5 w-5 text-gray-400"
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
                            className="absolute mt-1 w-32 rounded-md bg-white shadow-lg">
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
                <div className="w-32 text-gray-900 pt-3">
                  <label htmlFor="birth">Birth Date</label>

                  <input
                    id="birth"
                    type="date"
                    placeholder="Birth"
                    value={birth}
                    className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                    onChange={(event) => setBirth(event.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="text-gray-900 pt-3">
                  <label htmlFor="password">Password</label>

                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                  />
                </div>

                {/* Confirm Password */}
                <div className="text-gray-900 pt-3">
                  <label htmlFor="passwordConfirmation">Confirm Password</label>

                  <input
                    id="passwordConfirmation"
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                    onChange={(event) =>
                      setPasswordConfirmation(event.target.value)
                    }
                    required
                  />
                </div>
                {msg ? (
                  <p className="flex flex-row gap-2 justify-center items-center text-white font-bold bg-red-600 p-2 mt-2 rounded-md">
                    <ExclamationTriangleIcon className="w-5 h-5" />
                    {msg}
                  </p>
                ) : (
                  <div> </div>
                )}

                <div className="flex items-center justify-end py-3 mt-4">
                  <Link to="/login">
                    <a className="underline text-sm text-gray-600 hover:text-gray-900">
                      Already registered?
                    </a>
                  </Link>
                </div>
                <button className="p-2 text-white font-bold rounded-lg w-full text-center gap-3 items-center justify-center text-lg mt-3 mb-3 hover:bg-sky-800 bg-sky-900">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
