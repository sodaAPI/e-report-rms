import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [msg, setMsg] = useState("");
  const history = useNavigate();
  const navigate = useNavigate();
  const { token } = useParams();

  const ResetPass = async (e) => {
    e.preventDefault();
    try {
      if (password === passwordConfirmation) {
        await axios.patch(`http://localhost:5000/user/resetpassword/${token}`, {
            password: password,
            confPassword: passwordConfirmation,
          });
        let path = "/";
        navigate(path);
        window.alert("Password Changed Successfully");
        history.push("/resetpassword");
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
            {msg ? (
              <p className="flex flex-row gap-2 mb-5 justify-center items-center text-white font-bold bg-red-600 p-2 mt-2 rounded-md">
                <ExclamationTriangleIcon className="w-5 h-5" />
                {msg}
              </p>
            ) : (
              <div> </div>
            )}
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <form onSubmit={ResetPass} className="box">
                <a className="flex justify-center items-center">
                  <img
                    data-aos="fade-down"
                    data-aos-duration="750"
                    className="w-64 py-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"></img>
                </a>

                <a className="flex justify-start text-sky-900 font-semibold text-2xl pb-1 pt-5">
                  Reset Password
                </a>
                <a className="flex justify-start text-sky-900 pb-1 pt-1">
                  Please fill out the new password form for your user active
                  directory.
                </a>

                {/* Password */}
                <div className="text-gray-900 pt-3">
                  <label htmlFor="password">New Password</label>

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
                  <label htmlFor="passwordConfirmation">
                    Confirm New Password
                  </label>

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

                <button className="p-2 mt-7 text-white font-bold rounded-lg w-full text-center gap-3 items-center justify-center text-lg mb-3 hover:bg-sky-800 bg-sky-900">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
