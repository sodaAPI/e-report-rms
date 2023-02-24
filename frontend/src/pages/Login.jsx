import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ExclamationTriangleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";
import { LoginUser, reset, getMe } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProgressBar } from "react-loader-spinner";
import Logo from "../image/logobtn.png";

const Login = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = async (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
  };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const gotoHome = async () => {
    let path = "/home";
    navigate(path);
  };

  return (
    <>
      {isLoaded ? (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <img src={Logo} className="w-52" />
          <ProgressBar
            height="70"
            width="200"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#A78661"
            barColor="#0069AC"
          />
        </div>
      ) : (
        <section className="hero bg-slate-100  min-h-screen">
          <div className="hero-body">
            <div className="container">
              {isError ? (
                <div className="flex flex-row items-center justify-center gap-2 py-2 text-center text-white bg-red-500 rounded-xl mb-5">
                  <ExclamationTriangleIcon className="w-5 h-5" />
                  <a>{message}</a>
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
                        <input
                          id="password"
                          type={passwordVisible ? "text" : "password"}
                          placeholder={
                            passwordVisible ? "Password" : "********"
                          }
                          value={password}
                          className="bg-white border border-1 block mt-1 w-full outline-none rounded-md p-1"
                          onChange={(event) => setPassword(event.target.value)}
                          required
                          autoComplete="current-password"
                        />

                        <label
                          htmlFor="toggle-password-visibility"
                          className="cursor-pointer select-none text-gray-700">
                          <input
                            type="checkbox"
                            id="toggle-password-visibility"
                            onChange={() =>
                              setPasswordVisible(!passwordVisible)
                            }
                            className="bg-white mr-2 mt-5"
                          />
                          <span className="pt-0.5">Show password</span>
                        </label>
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
                      <button className=" p-2 text-white font-bold rounded-lg w-full text-center gap-3 items-center justify-center text-lg mt-3 mb-3 hover:bg-sky-800 bg-sky-900">
                        {isLoading ? "Loading..." : "Login"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={gotoHome}
                className="flex flex-row items-center px-3 py-2 gap-2 bg-sky-600 hover:bg-sky-500 text-white mt-5 rounded-lg">
                <ArrowLeftCircleIcon className="w-5 h-5" />
                Home
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
