/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";

const statusList = [
  "Sedang UAT",
  "Sedang SIT",
  "Dokumen Sedang Dilengkapi",
  "Akan SIT dan UAT",
  "Complete",
];
const promoteType = [
  "POK Promote",
  "Hasil Promote",
  "Checklist Promote",
  "Other",
];
const newOrExisting = ["New", "Existing"];
const coreOrNonCore = ["Core", "Non Core"];
const riskSummaryList = ["Low", "Medium", "High"];

const EditReport = () => {
  const [setReport] = useState([]);
  const [Id, setId] = useState("");
  const [UUID, setUUID] = useState("");
  const [project_code, setProjectCode] = useState("");
  const [new_existing, setNewExisting] = useState(newOrExisting[0]);
  const [ip, setIp] = useState("");
  const [nopcr_ir, setNoPCRIR] = useState("");
  const [nama, setNama] = useState("");
  const [user_division, setUserDivision] = useState("");
  const [core_noncore, setCoreNonCore] = useState(coreOrNonCore[0]);
  const [detail_deploy, setDetailDeploy] = useState("");
  const [changes, setChanges] = useState("");
  const [programmer, setProgrammer] = useState("");
  const [bp, setBP] = useState("");
  const [pm, setPM] = useState("");
  const [qa, setQA] = useState("");
  const [sa, setSA] = useState("");
  const [cmt, setCMT] = useState("");
  const [dependensi, setDependensi] = useState("");
  const [status, setStatus] = useState(statusList[0]);
  const [nolap_promote, setNoLapPromote] = useState("");
  const [tanggal_promote, setTanggalPromote] = useState("");
  const [week_eksekusi, setWeekEksekusi] = useState("");
  const [week_request, setWeekRequest] = useState("");
  const [risk_summary, setRiskSummary] = useState(riskSummaryList[0]);
  const [source_file, setSourceFile] = useState("");
  const [report_type, setReportType] = useState(promoteType[0]);
  const [userId, setUserId] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const history = useNavigate();
  const { uuid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    const response = await axios.get(`http://localhost:5000/report`);
    setReport(response.data);
  };

  const updateReport = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/report/${uuid}`, {
      id: Id,
      uuid: UUID,
      project_code: project_code,
      new_existing: new_existing,
      ip: ip,
      nopcr_ir: nopcr_ir,
      nama: nama,
      user_division: user_division,
      core_noncore: core_noncore,
      detail_deploy: detail_deploy,
      changes: changes,
      programmer: programmer,
      bp: bp,
      pm: pm,
      qa: qa,
      sa: sa,
      cmt: cmt,
      dependensi: dependensi,
      status: status,
      nolap_promote: nolap_promote,
      tanggal_promote: tanggal_promote,
      week_eksekusi: week_eksekusi,
      week_request: week_request,
      risk_summary: risk_summary,
      source_file: source_file,
      report_type: report_type,
      userId: userId,
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
    getReports();
  }, []);

  const getReportById = async () => {
    const response = await axios.get(`http://localhost:5000/report/${uuid}`);
    setId(response.data.id);
    setUUID(response.data.uuid);
    setProjectCode(response.data.project_code);
    setNewExisting(response.data.new_existing);
    setIp(response.data.ip);
    setNoPCRIR(response.data.nopcr_ir);
    setNama(response.data.nama);
    setUserDivision(response.data.user_division);
    setCoreNonCore(response.data.core_noncore);
    setDetailDeploy(response.data.detail_deploy);
    setChanges(response.data.changes);
    setProgrammer(response.data.programmer);
    setBP(response.data.bp);
    setPM(response.data.pm);
    setQA(response.data.qa);
    setSA(response.data.sa);
    setCMT(response.data.cmt);
    setDependensi(response.data.dependensi);
    setStatus(response.data.status);
    setNoLapPromote(response.data.nolap_promote);
    setTanggalPromote(response.data.tanggal_promote);
    setWeekEksekusi(response.data.week_eksekusi);
    setWeekRequest(response.data.week_request);
    setRiskSummary(response.data.risk_summary);
    setSourceFile(response.data.source_file);
    setUserId(response.data.user.name);
    setReportType(response.data.report_type);
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

  const [toggle, setToggle] = useState(false);
  const ToggleReschedule = () => {
    if (toggle === true) {
      setToggle(false);
      return true;
    } else {
      setToggle(true);
      return false;
    }
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
              <label className="label text-white">Project ID</label>
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
              <label className="label text-white">Project UUID</label>
              <input
                className="input input-bordered w-full "
                type="text"
                placeholder="Project UUID"
                value={UUID}
                onChange={(e) => setUUID(e.target.value)}
                disabled
              />
            </div>
            {/* Project Code */}

            <div>
              <label className="label text-white">Project Code</label>
              <input
                className="input input-bordered w-full "
                type="text"
                placeholder="Project Code"
                value={project_code}
                onChange={(e) => setProjectCode(e.target.value)}
              />
            </div>

            {/* New / Existing */}

            <div>
              <Listbox
                as="div"
                className="space-y-1"
                value={new_existing}
                onChange={setNewExisting}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block py-1 text-white">
                      New / Existing
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-3 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900">
                            {new_existing}
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
                          {newOrExisting.map((newOrExisting) => (
                            <Listbox.Option
                              key={newOrExisting}
                              value={newOrExisting}>
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
                                    {newOrExisting}
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

            {/* IP */}

            <div>
              <label className="label text-white">IP</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="IP Address"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
              />
            </div>

            {/* No PCR/IR */}

            <div>
              <label className="label text-white">No PCR/IR</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="No PCR/IR"
                value={nopcr_ir}
                onChange={(e) => setNoPCRIR(e.target.value)}
              />
            </div>

            {/* Nama */}

            <div>
              <label className="label text-white">Nama PCR/Project</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Nama PCR/Project"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            {/* User Division */}

            <div>
              <label className="label text-white">User Division</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="User Division"
                value={user_division}
                onChange={(e) => setUserDivision(e.target.value)}
              />
            </div>

            {/* Core/Non Core */}

            <div>
              <Listbox
                as="div"
                className="space-y-1"
                value={core_noncore}
                onChange={setCoreNonCore}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block py-1 text-white">
                      Core / Non Core
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-3 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900">
                            {core_noncore}
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
                          {coreOrNonCore.map((coreOrNonCore) => (
                            <Listbox.Option
                              key={coreOrNonCore}
                              value={coreOrNonCore}>
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
                                    {coreOrNonCore}
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

            {/* Detail Deploy */}

            <div>
              <label className="label text-white">Detail Deploy</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Detail Deploy"
                value={detail_deploy}
                onChange={(e) => setDetailDeploy(e.target.value)}
              />
            </div>

            {/* Risk Summary */}

            <div>
              <Listbox
                as="div"
                className="space-y-1"
                value={risk_summary}
                onChange={setRiskSummary}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block py-1 text-white">
                      Risk Summary
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-3 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900">
                            {risk_summary}
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
                          {riskSummaryList.map((riskSummaryList) => (
                            <Listbox.Option
                              key={riskSummaryList}
                              value={riskSummaryList}>
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
                                    {riskSummaryList}
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

            {/* Dependensi */}

            <div>
              <label className="label text-white">Dependensi</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Dependensi"
                value={dependensi}
                onChange={(e) => setDependensi(e.target.value)}
              />
            </div>

            {/*Created At */}

            <div>
              <label className="label text-white">Created At</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Created At"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
                disabled
              />
            </div>
          </section>

          <section className="sm:w-full w-2/5">
            {/* No Lap Promote */}

            <div>
              <label className="label text-white">No Lap Promote</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="No Lap Promote "
                value={nolap_promote}
                onChange={(e) => setNoLapPromote(e.target.value)}
              />
            </div>

            {/* Programmer */}

            <div>
              <label className="label text-white">Programmer</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="PIC Programmer"
                value={programmer}
                onChange={(e) => setProgrammer(e.target.value)}
              />
            </div>

            {/* BP */}

            <div>
              <label className="label text-white">BP</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="PIC BP"
                value={bp}
                onChange={(e) => setBP(e.target.value)}
              />
            </div>

            {/* PM */}

            <div>
              <label className="label text-white">PM</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="PIC PM"
                value={pm}
                onChange={(e) => setPM(e.target.value)}
              />
            </div>

            {/* QA */}

            <div>
              <label className="label text-white">QA</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="PIC QA"
                value={qa}
                onChange={(e) => setQA(e.target.value)}
              />
            </div>

            {/* SA */}

            <div>
              <label className="label text-white">SA</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="PIC SA"
                value={sa}
                onChange={(e) => setSA(e.target.value)}
              />
            </div>

            {/* CMT */}

            <div>
              <label className="label text-white">CMT</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="PIC CMT"
                value={cmt}
                onChange={(e) => setCMT(e.target.value)}
              />
            </div>

            {/* Tanggal Promote */}

            <div>
              <label className="label text-white">Tanggal Promote</label>

              <div className="flex flex-row items-center gap-10">
                <input
                  className="input input-bordered w-full"
                  type="date"
                  placeholder="Tanggal Promote"
                  value={tanggal_promote}
                  onChange={(e) => setTanggalPromote(e.target.value)}
                  hidden={toggle}
                />
                <input
                  className="input input-bordered w-full"
                  type="text"
                  placeholder="Week Reschedule"
                  value={tanggal_promote}
                  onChange={(e) => setTanggalPromote(e.target.value)}
                  hidden={!toggle}
                />

                <div className="flex flex-row items-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={ToggleReschedule}
                    value={""}
                  />
                  <label className="text-white">Reschedule</label>
                </div>
              </div>
            </div>

            {/*Week Eksekusi */}

            <div>
              <label className="label text-white">Week Eksekusi</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Week Eksekusi"
                value={week_eksekusi}
                onChange={(e) => setWeekEksekusi(e.target.value)}
              />
            </div>

            {/*Week Request */}

            <div>
              <label className="label text-white">Week Request</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Week Request"
                value={week_request}
                onChange={(e) => setWeekRequest(e.target.value)}
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
                    <Listbox.Label className="block py-1 text-white">
                      Status
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-3 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          <span className="block truncate text-gray-900">
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

            {/* By */}

            <div>
              <label className="label text-white">Edited By</label>
              <input
                className="input input-bordered w-full"
                type="text"
                value={userId}
                disabled
              />
            </div>

            {/*Updated At */}

            <div>
              <label className="label text-white">Updated At</label>
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
          <label className="label text-ju text-white">Changes</label>
          <textarea
            className="input input-bordered h-32 w-full py-2 px-4"
            type="text"
            placeholder="Changes"
            value={changes}
            onChange={(e) => setChanges(e.target.value)}
            onInput={handleInput}
          />
        </div>

        <div className="pt-5">
          <button className="w-full bg-sky-500 p-3 rounded-lg text-white">
            Update Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReport;
