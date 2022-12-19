import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// TODO: Add Authentication & Error Message Func

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useNavigate();
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/signin", {
        username: username,
        password: password,
      });
      let path = "/dashboard";
      navigate(path);
      history.push("/login");
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
          {msg ? (
            <div className="py-2 text-center text-white bg-red-500 rounded-xl mb-5">
              <a>{msg}</a>
            </div>
          ) : (
            <div></div>
          )}
          <div className="columns is-centered">
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <div className="flex">
                <Link to="/home">
                  <img
                    className="w-40 h-20 py-5"
                    alt="btn"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"></img>
                </Link>
              </div>

              <div className="flex md:flex-row justify-center items-center sm:gap-10">
                <div>
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="w-96 h-72 hidden sm:block"
                    alt="login"
                    src="https://arize.com/wp-content/uploads/2021/06/ML-Infrastructure-1.png"
                  />
                </div>
                <form onSubmit={Auth}>
                  <div>
                    <a className="flex justify-start text-sky-900 font-bold text-3xl pt-5">
                      Welcome Back!
                    </a>
                    <a className="flex justify-start text-sky-900 font-semibold text-xl pb-5">
                      e-Report Management System
                    </a>
                    <a className="flex justify-start text-sky-900 pb-3">
                      Please login with your user active directory.
                    </a>
                  </div>

                  {/* Username */}

                  <div className="text-gray-900 pt-3">
                    <label>Username</label>

                    <input
                      id="username"
                      type="username"
                      placeholder="Username"
                      value={username}
                      className=" bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                      onChange={(event) => setUsername(event.target.value)}
                      required
                      autoFocus
                    />
                  </div>

                  {/* Password */}
                    
                  <div className="mt-4 text-gray-900">
                    <label>Password</label>

                    {/* //TODO: Password Visibility Toggle */}

                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      autoComplete="current-password"
                    />
                  </div>

                  <div className="flex items-center gap-20 text-center justify-center py-3 mt-4">
                    <Link to="/register">
                      <a className="underline text-sm text-gray-600 hover:text-gray-900">
                        Don't have an account?
                      </a>
                    </Link>
                    <Link to="/forgotpassword">
                      <a className="underline text-sm text-gray-600 hover:text-gray-900">
                        Forgot your password?
                      </a>
                    </Link>
                  </div>
                  <button className=" p-2 text-white font-bold rounded-lg w-full text-center gap-3 items-center justify-center text-lg mt-3 mb-3 bg-sky-900">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
