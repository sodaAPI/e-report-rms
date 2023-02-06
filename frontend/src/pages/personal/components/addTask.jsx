/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

const statusList = ["Uncompleted", "Completed"];

const AddTask = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statusList[0]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [by_user, setByUser] = useState("");
  const history = useNavigate();
  const navigate = useNavigate();
  //User
  const { user } = useSelector((state) => state.auth);

  const saveTask = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/task`, {
      name: name,
      status: status,
      description: description,
      deadline: deadline,
      by_user: by_user,
    });
    let path = "/dashboard/task";
    navigate(path);
    window.alert("Task Added Successfully");
    history.push("/task");
  };

  return (
    <div className=" w-full p-10">
      <div className="py-5">
        <span className="text-xl font-bold text-white">Add new Task</span>
      </div>

      <form onSubmit={saveTask}>
        <div className="flex flex-row gap-20">
          <section className="sm:w-full w-2/5">
            {/* Name */}

            <div>
              <label className="label text-white">Task Name</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Status */}

            <div>
              <Listbox
                as="div"
                className="space-y-1"
                value={status}
                onChange={setStatus}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block  text-white py-1">
                      Status
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900 py-1">
                            {status}
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
                          {statusList.map((statusList) => (
                            <Listbox.Option key={statusList} value={statusList}>
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
                                    {statusList}
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

          {/* Deadline */}

          <section className="sm:w-full w-2/5">
            <div>
              <label className="label  text-white">Deadline</label>
              <input
                className="input input-bordered w-full"
                type="date"
                placeholder="Deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
              />
            </div>

            {/* By User */}

            <div>
              <label className="label  text-white">By User</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="By User"
                value={user?.name}
                onChange={(e) => setByUser(e.target.value)}
                disabled
              />
            </div>
          </section>
        </div>

        <div className="w-full">
          {/* Description */}

          <div>
            <label className="label text-white">Description</label>
            <textarea
              className="input input-bordered h-40 w-full"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Button */}

          <div className="pt-10">
            <button className="w-full bg-sky-500 p-3 rounded-lg text-white">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
