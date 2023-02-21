import { useState } from "react";
import axios from "axios";
import ImagePreview from "../image/doc_api_service_preview.png";

import {
  InformationCircleIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/20/solid";
import "photoswipe/dist/photoswipe.css";
import { useSelector } from "react-redux";
import { Gallery, Item } from "react-photoswipe-gallery";

const AddDocAPIService = () => {
  const [nama_project, setNamaProject] = useState("");
  const [sisi_project, setSisiProject] = useState("API Service");
  const [project_code, setProjectCode] = useState("");
  const [tanggal_promote, setTanggalPromote] = useState("");
  const [new_existing, setNewExisting] = useState("");
  const [changes, setChanges] = useState("");
  const [unit_pengguna, setUnitPengguna] = useState("");
  const [week_request, setWeekRequest] = useState("");
  const [week_eksekusi, setWeekEksekusi] = useState("");
  const [isian_credential, setIsianCredential] = useState("");
  const [durasi_isi_credential, setDurasiIsiCredential] = useState("");
  const [durasi_restart_gate, setDurasiRestartGate] = useState("");

  const { user } = useSelector((state) => state.auth);

  const generateDoc = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/doc/apiservice", {
      nama_project: nama_project,
      sisi_project: sisi_project,
      project_code: project_code,
      tanggal_promote: tanggal_promote,
      new_existing: new_existing,
      changes: changes,
      unit_pengguna: unit_pengguna,
      week_request: week_request,
      week_eksekusi: week_eksekusi,
      isian_credential: isian_credential,
      durasi_isi_credential: durasi_isi_credential,
      durasi_restart_gate: durasi_restart_gate,
    });
    window.alert(
      `Document has been generated and sent to you email ${user.email}`
    );
  };

  return (
    <div className=" w-full px-10 pb-10">
      <div className="py-5">
        <span className="text-xl text-white font-bold">Generate Document</span>
      </div>
      <div className="w-full flex gap-2 flex-col items-center justify-center py-5">
        <Gallery>
          <Item
            original={ImagePreview}
            thumbnail={ImagePreview}
            width="668"
            height="796">
            {({ ref, open }) => (
              <img
                className=" w-2/5 rounded-lg"
                ref={ref}
                onClick={open}
                src={ImagePreview}
              />
            )}
          </Item>
        </Gallery>
        <p>Template Preview</p>
      </div>
      <form onSubmit={generateDoc}>
        <div className="flex flex-row gap-20">
          <section className="sm:w-full w-2/5">
            {/* Nama Project */}
            <div>
              <label className=" font-base text-white label">
                Nama Project
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Nama Project"
                value={nama_project}
                onChange={(e) => setNamaProject(e.target.value)}
                required
              />
            </div>

            {/* Sisi */}
            <div>
              <label className="  font-base text-white label">
                Sisi Project
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Sisi"
                value={sisi_project}
                onChange={(e) => setSisiProject(e.target.value)}
                disabled
              />
            </div>

            {/* Code */}
            <div>
              <label className="  font-base text-white label">
                Project Code
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Code"
                value={project_code}
                onChange={(e) => setProjectCode(e.target.value)}
                required
              />
            </div>

            {/* Tanggal */}
            <div>
              <label className="  font-base text-white label">
                Tanggal Promote
              </label>
              <input
                className="input input-bordered w-full"
                type="date"
                placeholder="Tanggal"
                value={tanggal_promote}
                onChange={(e) => setTanggalPromote(e.target.value)}
                required
              />
            </div>

            {/* New Existing */}
            <div>
              <label className="  font-base text-white label">
                New / Existing
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="New / Existing"
                value={new_existing}
                onChange={(e) => setNewExisting(e.target.value)}
                required
              />
            </div>

            {/* Changes */}
            <div>
              <label className="  font-base text-white label">Changes</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Changes"
                value={changes}
                onChange={(e) => setChanges(e.target.value)}
                required
              />
            </div>
          </section>
          <section className="sm:w-full w-2/5">
            {/* Unit Pengguna */}
            <div>
              <label className="  font-base text-white label">
                Unit Pengguna
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Unit Pengguna"
                value={unit_pengguna}
                onChange={(e) => setUnitPengguna(e.target.value)}
                required
              />
            </div>

            {/* Week Req */}
            <div>
              <label className="  font-base text-white label">
                Week Request
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Week Request"
                value={week_request}
                onChange={(e) => setWeekRequest(e.target.value)}
                required
              />
            </div>

            {/* Week Eks */}
            <div>
              <label className="  font-base text-white label">
                Week Eksekusi
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Week Eksekusi"
                value={week_eksekusi}
                onChange={(e) => setWeekEksekusi(e.target.value)}
                required
              />
            </div>

            {/* Isian Credential */}
            <div>
              <label className="  font-base text-white label">
                Isian Credential
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Isian Credential"
                value={isian_credential}
                onChange={(e) => setIsianCredential(e.target.value)}
                required
              />
            </div>

            {/* Durasi Isian Credential */}
            <div>
              <label className="  font-base text-white label">
                Durasi Isian Credential
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi Isian Credential"
                value={durasi_isi_credential}
                onChange={(e) => setDurasiIsiCredential(e.target.value)}
                required
              />
            </div>

            {/* Durasi Reset Gate */}
            <div>
              <label className="  font-base text-white label">
                Durasi Restart Gate VA & CB
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi Restart Gate VA & CB"
                value={durasi_restart_gate}
                onChange={(e) => setDurasiRestartGate(e.target.value)}
                required
              />
            </div>
          </section>
        </div>
        {/* Button */}
        <div className="pt-10">
          <button className="flex flex-row items-center gap-2 justify-center w-full hover:bg-sky-600 bg-sky-500 py-5 rounded-lg text-white">
            <ArrowUpTrayIcon className="w-5 h-5" />
            Generate Document
          </button>
          <p className="flex flex-row items-center gap-2 pt-5 text-slate-50">
            <InformationCircleIcon className="w-5 h-5 text-blue-500" />
            Document file will be sent to your email
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddDocAPIService;
