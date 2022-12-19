/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";

const statusList = ["In Progress", "Complete", "N/A"];
const sidePromoteList = [
  "POK Promote",
  "Hasil Promote",
  "Checklist Promote",
  "Other",
];

const EditReport = () => {
  const [Id, setId] = useState("");
  const [uuid, setUUID] = useState("");
  const [project_code, setProjectCode] = useState("");
  const [promote_name, setPromoteName] = useState("");
  const [promote_status, setPromoteStatus] = useState(statusList[0]);
  const [promote_pic, setPromotePIC] = useState("");
  const [promote_desc, setPromoteDesc] = useState("");
  const [changes, setChanges] = useState("");
  const [promote_date, setPromoteDate] = useState("");
  const [execute_week, setExecuteWeek] = useState("");
  const [request_week, setRequestWeek] = useState("");
  const [src_file, setSrcFile] = useState("");
  const [side_promote, setSidePromote] = useState(sidePromoteList[0]);
  const [editedBy, setEditedBy] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const history = useNavigate();
  const { id } = useParams();
  const navigate = useNavigate();

  const updateReport = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/report/${id}`, {
      uuid: uuid,
      id: Id,
      project_code: project_code,
      promote_name: promote_name,
      promote_status: promote_status,
      promote_pic: promote_pic,
      promote_desc: promote_desc,
      changes: changes,
      promote_date: promote_date,
      execute_week: execute_week,
      request_week: request_week,
      src_file: src_file,
      side_promote: side_promote,
      editedBy: editedBy,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
    let path = "/dashboard/report";
    navigate(path);
    window.alert("Report Updated Successfully");
    history.push("/report");
  };

  useEffect(() => {
    getReportById();
  }, []);

  const getReportById = async () => {
    const response = await axios.get(`http://localhost:5000/report/${id}`);
    setId(response.data.id);
    setUUID(response.data.uuid);
    setProjectCode(response.data.project_code);
    setPromoteName(response.data.promote_name);
    setPromoteStatus(response.data.promote_status);
    setPromotePIC(response.data.promote_pic);
    setPromoteDesc(response.data.promote_desc);
    setChanges(response.data.changes);
    setPromoteDate(response.data.promote_date);
    setExecuteWeek(response.data.execute_week);
    setRequestWeek(response.data.request_week);
    setSrcFile(response.data.src_file);
    setSidePromote(response.data.side_promote);
    setEditedBy(response.data.editedBy);
    setCreatedAt(response.data.createdAt);
    setUpdatedAt(response.data.updatedAt);
  };

  let previousLength = 0;

  const handleInput = (event) => {
    const bullet = "\u2022";
    const newLength = event.target.value.length;
    const characterCode = event.target.value.substr(-1).charCodeAt(0);

    if (newLength > previousLength) {
      if (characterCode === 10) {
        event.target.value = `${event.target.value}${bullet} `;
      } else if (newLength === 1) {
        event.target.value = `${bullet} ${event.target.value}`;
      }
    }

    previousLength = newLength;
  };

  return (
    <div className="p-10">
      <div className="py-5">
        <span className="text-xl font-bold">Edit Report</span>
      </div>

      <form onSubmit={updateReport}>
        <div className="flex flex-row gap-20">
          <section className="sm:w-full w-2/5">
            {/* ID */}

            <div>
              <label className="label">Project ID</label>
              <input
                className="input input-bordered w-full "
                type="text"
                placeholder="Project ID"
                value={Id}
                onChange={(e) => setId(e.target.value)}
                disabled
              />
            </div>
            {/* Project UUID */}

            <div>
              <label className="label">Project UUID</label>
              <input
                className="input input-bordered w-full "
                type="text"
                placeholder="Project UUID"
                value={uuid}
                onChange={(e) => setUUID(e.target.value)}
                disabled
              />
            </div>
            {/* Project Code */}

            <div>
              <label className="label">Project Code</label>
              <input
                className="input input-bordered w-full "
                type="text"
                placeholder="Project Code"
                value={project_code}
                onChange={(e) => setProjectCode(e.target.value)}
              />
            </div>

            {/* Promote Name */}

            <div>
              <label className="label">Promote Name</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Promote Name"
                value={promote_name}
                onChange={(e) => setPromoteName(e.target.value)}
                required
              />
            </div>

            {/* Promote Status */}

            <div>
              <Listbox
                as="div"
                className="space-y-1"
                value={promote_status}
                onChange={setPromoteStatus}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block py-1">
                      Promote Status
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900">
                            {promote_status}
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

            {/* Promote PIC */}

            <div>
              <label className="label">Promote PIC</label>
              <input
                className="input input-bordered w-full"
                type="phone"
                placeholder="Promote PIC"
                value={promote_pic}
                onChange={(e) => setPromotePIC(e.target.value)}
                required
              />
            </div>

            {/* SRC File */}

            <div>
              <label className="label">Source File</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Source File"
                value={src_file}
                onChange={(e) => setSrcFile(e.target.value)}
                disabled
              />
            </div>
          </section>

          <section className="sm:w-full w-2/5">
            {/*Promote Date */}

            <div>
              <label className="label">Promote Date</label>
              <input
                className="input input-bordered w-full"
                type="date"
                placeholder="Promote Date"
                value={promote_date}
                onChange={(e) => setPromoteDate(e.target.value)}
              />
            </div>

            {/*Execute Week */}

            <div>
              <label className="label">Execute Week</label>
              <input
                className="input input-bordered w-full"
                type="week"
                placeholder="Execute Week"
                value={execute_week}
                onChange={(e) => setExecuteWeek(e.target.value)}
              />
            </div>

            {/*Request Week */}

            <div>
              <label className="label">Request Week</label>
              <input
                className="input input-bordered w-full"
                type="week"
                placeholder="Request Week"
                value={request_week}
                onChange={(e) => setRequestWeek(e.target.value)}
                required
              />
            </div>

            {/* Side Promote */}

            <div>
              <Listbox
                as="div"
                className="space-y-1"
                value={side_promote}
                onChange={setSidePromote}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block py-1">
                      Side Promote
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900">
                            {side_promote}
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
                          {sidePromoteList.map((sidePromoteList) => (
                            <Listbox.Option
                              key={sidePromoteList}
                              value={sidePromoteList}>
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
                                    {sidePromoteList}
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
            {/*Edited By */}

            <div>
              <label className="label">Edited By</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Edited By"
                value={editedBy}
                onChange={(e) => setEditedBy(e.target.value)}
                disabled
              />
            </div>
            {/*Created At */}

            <div>
              <label className="label">Created At</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Created At"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
                disabled
              />
            </div>
            {/*Updated At */}

            <div>
              <label className="label">Updated At</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Updated At"
                value={updatedAt}
                onChange={(e) => setUpdatedAt(e.target.value)}
                disabled
              />
            </div>
          </section>
        </div>
        {/* Changes*/}

        <div>
          <label className="label">Changes</label>
          <textarea
            className="input input-bordered w-full"
            type="text"
            placeholder="Changes"
            value={changes}
            onChange={(e) => setChanges(e.target.value)}
            onInput={handleInput}
          />
        </div>

        {/* Promote Desc */}

        <div>
          <label className="label">Promote Desc</label>
          <textarea
            className="input input-bordered h-40 w-full"
            type="text"
            placeholder="Promote Desc"
            value={promote_desc}
            onChange={(e) => setPromoteDesc(e.target.value)}
          />
        </div>
        <div className="pt-5">
          <button className="w-full bg-sky-500 p-3 rounded-lg text-white">
            Add Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReport;
