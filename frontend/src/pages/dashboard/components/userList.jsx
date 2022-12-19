import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    getUsers();
  }, [page, keyword]);

  const getUsers = async () => {
    const response = await axios.get(
      `http://localhost:5000/user?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setUsers(response.data);
    setResult(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/user/${id}`);
    getUsers();
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      );
    } else {
      setMsg("");
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setMsg("");
    setKeyword(query);
  };

  return (
    <div className="py-8 w-fit min-h-screen">
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-3">
        <Link
          to="/dashboard/user/add"
          className="p-3 bg-sky-900 hover:bg-sky-800 rounded-xl text-white">
          Add New User
        </Link>
        <form onSubmit={searchData}>
          <div className="flex flex-row gap-0">
            <input
              className="input bg-white rounded-l-xl rounded-r-none p-3 text-gray-800"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Users . . ."
            />
            <button
              type="submit"
              className="p-3 bg-blue-500 rounded-r-xl text-white">
              Search
            </button>
          </div>
        </form>
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
            <th>Password</th>
            <th>Created At</th>
            <th>Update At</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.uuid}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.roles}</td>
              <td>{user.status}</td>
              <td>{user.division}</td>
              <td>{user.birth}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.password}</td>
              <td>{user.createdAt}</td>
              <td>{user.updatedAt}</td>
              <td>
                <Link
                  to={`/dashboard/user/edit/${user.id}`}
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
                      deleteUser(user.id);
                  }}
                  className="bg-red-700 p-2 rounded-lg text-white">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      //TODO: Pagination & Total Rows

      <p>
        Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
      </p>
      <p className="has-text-centered has-text-danger">{msg}</p>
      <nav
        className="pagination is-centered"
        key={rows}
        role="navigation"
        aria-label="pagination">
      </nav>
    </div>
  );
};

export default UserList;
