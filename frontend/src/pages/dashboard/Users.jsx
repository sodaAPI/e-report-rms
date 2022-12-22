import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import UserList from "./components/userList";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../auth/authSlice";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.roles != "admin") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="w-full p-4">
        <Header />
        {/* Page Header */}
        <div className="flex mt-5 w-full bg-slate-800 p-5 rounded-xl text-slate-200">
          <p className="flex">
            <Link to="/dashboard" className="hover:text-white">
              <span className="mx-1"> Dashboard </span>
            </Link>
            /
            <Link to="/dashboard/user" className="hover:text-white ">
              <span className="flex flex-row mx-1 gap-1 items-center font-bold">
                <UserIcon className="w-5 h-5" /> Users
              </span>
            </Link>
          </p>
        </div>
        <UserList />
      </div>
    </div>
  );
}
