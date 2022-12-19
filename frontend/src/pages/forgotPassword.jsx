import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

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

        <form>
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
            <button className="p-2 text-white font-bold rounded-lg w-full text-center gap-3 items-center justify-center text-lg mt-3 mb-3 bg-sky-900">
              Send Reset Password Link
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
