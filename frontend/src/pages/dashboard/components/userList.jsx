import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Pagination from "../../../components/Pagination";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const skip = (currentPage - 1) * itemsPerPage;
    const limit = itemsPerPage;
    const response = await axios.get(
      `http://localhost:5000/user?skip=${skip}&limit=${limit}`
    );
    setUsers(response.data);
  };

  const deleteUser = async (uuid) => {
    await axios.delete(`http://localhost:5000/user/${uuid}`);
    getUsers();
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-fit min-h-screen py-8">
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-3">
        <Link
          to="/dashboard/user/add"
          className="flex flex-row p-3 items-center gap-2 bg-sky-900 hover:bg-sky-800 rounded-xl text-white">
          <PlusCircleIcon className="w-5 h-5" />
          Add New User
        </Link>
        <div className="flex flex-row items-center">
          <div className="bg-slate-700 p-3 rounded-l-xl">
            <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          </div>
          <input
            className="input bg-white rounded-r-xl rounded-l-none e p-3 text-gray-800"
            type="text"
            placeholder="Search Users..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
      <table className="table-compact table-zebra bg-slate-800 rounded-2xl text-white mt-7">
        <thead>
          <tr>
            <th>ID</th>
            <th>UUID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Status</th>
            <th>Division</th>
            <th>Birth</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Created At</th>
            <th>Update At</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .filter(
              (user) =>
                new RegExp(searchTerm, "i").test(user.id) ||
                new RegExp(searchTerm, "i").test(user.uuid) ||
                new RegExp(searchTerm, "i").test(user.name) ||
                new RegExp(searchTerm, "i").test(user.username) ||
                new RegExp(searchTerm, "i").test(user.roles) ||
                new RegExp(searchTerm, "i").test(user.roles) ||
                new RegExp(searchTerm, "i").test(user.division) ||
                new RegExp(searchTerm, "i").test(user.birth) ||
                new RegExp(searchTerm, "i").test(user.email) ||
                new RegExp(searchTerm, "i").test(user.phone) ||
                new RegExp(searchTerm, "i").test(user.createdAt) ||
                new RegExp(searchTerm, "i").test(user.updatedAt)
            )
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.uuid}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.roles}</td>
                <td>{user.roles}</td>
                <td>{user.division}</td>
                <td>{user.birth}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td>
                  <Link
                    to={`/dashboard/user/edit/${user.uuid}`}
                    className="bg-green-500 p-2 rounded-lg text-white">
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        )
                      )
                        deleteUser(user.uuid);
                    }}
                    className="bg-red-700 p-2 rounded-lg text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default UserList;
