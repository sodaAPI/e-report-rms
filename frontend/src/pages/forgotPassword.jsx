import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const history = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const Forgot = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user/forgotpassword", {
        email: email,
      });
      let path = "/";
      navigate(path);
      window.alert("Please check your email to change your password.");
      history.push("/forgotpassword");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero bg-slate-100  min-h-screen">
      <div className="hero-body w-1/3 bg-white p-5 rounded-lg shadow-lg">
        <div className="flex items-center justify-center py-5">
          <Link to="/home">
            <a className="">
              <img
                data-aos="fade-down"
                data-aos-duration="750"
                className="w-60 py-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"></img>
            </a>
          </Link>
        </div>
        <div>
          <a className="flex justify-start text-sky-900 font-semibold text-xl pb-5">
            Forgot Password
          </a>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </div>
        {msg ? (
          <div className="flex flex-row items-center gap-2 bg-red-500 p-2 text-white rounded-lg">
            <ExclamationTriangleIcon className="w-5 h-5" /> {msg}
          </div>
        ) : (
          <div></div>
        )}

        <form onSubmit={Forgot}>
          {/* Email Address */}
          <div className="text-gray-900 pt-3">
            <label>Email</label>

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

          <div className="flex items-center justify-end py-5">
            <Link to="/login">
              <a className="underline text-sm text-gray-600 hover:text-gray-900">
                Remember your password?
              </a>
            </Link>
          </div>

          <div className="flex items-center justify-end">
            <button className="p-2 text-white font-bold rounded-lg w-full text-center gap-3 items-center justify-center text-lg mt-3 mb-3 hover:bg-sky-800 bg-sky-900">
              Send Reset Password Link
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
