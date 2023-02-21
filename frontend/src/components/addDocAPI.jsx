import { useState } from "react";
import axios from "axios";
import ImagePreview from "../image/doc_api_preview.png";
import {
  InformationCircleIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/20/solid";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useSelector } from "react-redux";

const AddDocAPI = () => {
  const [nama_project, setNamaProject] = useState("");
  const [sisi_project, setSisiProject] = useState("API");
  const [project_code, setProjectCode] = useState("");
  const [tanggal_promote, setTanggalPromote] = useState("");
  const [new_existing, setNewExisting] = useState("");
  const [changes, setChanges] = useState("");
  const [unit_pengguna, setUnitPengguna] = useState("");
  const [week_request, setWeekRequest] = useState("");
  const [week_eksekusi, setWeekEksekusi] = useState("");
  const [nama_api_1, setNamaAPI1] = useState("");
  const [nama_api_2, setNamaAPI2] = useState("");
  const [durasi_api_1, setDurasiAPI1] = useState("");
  const [durasi_api_2, setDurasiAPI2] = useState("");
  const [durasi_build_1, setDurasiBuild1] = useState("");
  const [durasi_build_2, setDurasiBuild2] = useState("");
  const [durasi_login, setDurasiLogin] = useState("");

  const { user } = useSelector((state) => state.auth);

  const generateDoc = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/doc/api", {
      nama_project: nama_project,
      sisi_project: sisi_project,
      project_code: project_code,
      tanggal_promote: formattedDate,
      new_existing: new_existing,
      changes: changes,
      unit_pengguna: unit_pengguna,
      week_request: week_request,
      week_eksekusi: week_eksekusi,
      nama_api_1: nama_api_1,
      nama_api_2: nama_api_2,
      durasi_login: durasi_login,
      durasi_api_1: durasi_api_1,
      durasi_api_2: durasi_api_2,
      durasi_build_1: durasi_build_1,
      durasi_build_2: durasi_build_2,
    });
    window.alert(
      `Document has been generated and sent to you email ${user.email}`
    );
  };

  const date = new Date(tanggal_promote);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "Asia/Bangkok",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <div className=" w-full px-10 pb-10">
      <div className="py-5">
        <span className="text-xl text-white font-bold">Generate Document</span>
      </div>
      <div className="w-full flex gap-2 flex-col items-center justify-center py-5"> 
        <Gallery>
          <Item
            original={ImagePreview}
            data-tip="Zoom in"
            className="tooltip tooltip-bottom"
            thumbnail={ImagePreview}
            width="902"
            height="691">
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
          </section>
          <section className="sm:w-full w-2/5">
            {/* Nama API 1 */}
            <div>
              <label className="  font-base text-white label">
                Nama API (1)
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="API"
                value={nama_api_1}
                onChange={(e) => setNamaAPI1(e.target.value)}
                required
              />
            </div>

            {/* Nama API 2 */}
            <div>
              <label className="  font-base text-white label">
                Nama API (2)
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="API"
                value={nama_api_2}
                onChange={(e) => setNamaAPI2(e.target.value)}
                required
              />
            </div>

            {/* Durasi API 1 */}
            <div>
              <label className="  font-base text-white label">
                Durasi API 1 (Menit/Detik)
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_api_1}
                onChange={(e) => setDurasiAPI1(e.target.value)}
                required
              />
            </div>

            {/* Durasi API 2 */}
            <div>
              <label className="  font-base text-white label">
                Durasi API 2 (Menit/Detik)
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_api_2}
                onChange={(e) => setDurasiAPI2(e.target.value)}
                required
              />
            </div>

            {/* Durasi Build 1 */}
            <div>
              <label className="  font-base text-white label">
                Durasi Build 1 (Menit/Detik)
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_build_1}
                onChange={(e) => setDurasiBuild1(e.target.value)}
                required
              />
            </div>

            {/* Durasi Build 2 */}
            <div>
              <label className="  font-base text-white label">
                Durasi Build 2 (Menit/Detik)
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_build_2}
                onChange={(e) => setDurasiBuild2(e.target.value)}
                required
              />
            </div>

            {/* Durasi Login */}
            <div>
              <label className="  font-base text-white label">
                Durasi Login (Menit/Detik)
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_login}
                onChange={(e) => setDurasiLogin(e.target.value)}
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

export default AddDocAPI;
