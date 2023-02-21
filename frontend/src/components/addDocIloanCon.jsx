import { useState } from "react";
import axios from "axios";
import ImagePreview from "../image/doc_iloan_consumer_preview.png";
import {
  InformationCircleIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/20/solid";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useSelector } from "react-redux";

const AddDocIloanCon = () => {
  const [nama_project, setNamaProject] = useState("");
  const [sisi_project, setSisiProject] = useState("Iloan Consumer");
  const [project_code, setProjectCode] = useState("");
  const [tanggal_promote, setTanggalPromote] = useState("");
  const [new_existing, setNewExisting] = useState("");
  const [changes, setChanges] = useState("");
  const [unit_pengguna, setUnitPengguna] = useState("");
  const [week_request, setWeekRequest] = useState("");
  const [week_eksekusi, setWeekEksekusi] = useState("");
  const [path_server_backup, setPathServerBackup] = useState("");
  const [path_iloan_backup, setPathIloanBackup] = useState("");
  const [path_copy_promote, setPathCopyPromote] = useState("");
  const [path_server_promote, setPathServerPromote] = useState("");
  const [path_copy_tujuan, setPathCopyTujuan] = useState("");
  const [path_tujuan, setPathTujuan] = useState("");
  const [ip_db, setIPDB] = useState("");
  const [path_db_sql, setPathDBSQL] = useState("");
  const [durasi_akses_server, setDurasiAksesServer] = useState("");
  const [durasi_backup, setDurasiBackup] = useState("");
  const [durasi_copy_server_promote, setDurasiCopyServerPromote] = useState("");
  const [durasi_copy_tujuan, setDurasiCopyTujuan] = useState("");
  const [durasi_query, setDurasiQuery] = useState("");

  const { user } = useSelector((state) => state.auth);

  const generateDoc = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/doc/iloancon", {
      nama_project: nama_project,
      sisi_project: sisi_project,
      project_code: project_code,
      tanggal_promote: formattedDate,
      new_existing: new_existing,
      changes: changes,
      unit_pengguna: unit_pengguna,
      week_request: week_request,
      week_eksekusi: week_eksekusi,
      path_server_backup: path_server_backup,
      path_iloan_backup: path_iloan_backup,
      path_copy_promote: path_copy_promote,
      path_server_promote: path_server_promote,
      path_copy_tujuan: path_copy_tujuan,
      path_tujuan: path_tujuan,
      ip_db: ip_db,
      path_db_sql: path_db_sql,
      durasi_akses_server: durasi_akses_server,
      durasi_backup: durasi_backup,
      durasi_copy_server_promote: durasi_copy_server_promote,
      durasi_copy_tujuan: durasi_copy_tujuan,
      durasi_query: durasi_query,
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
            thumbnail={ImagePreview}
            width="725"
            height="772">
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

            {/* IP DB */}
            <div>
              <label className="  font-base text-white label">
                IP Database
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="IP"
                value={ip_db}
                onChange={(e) => setIPDB(e.target.value)}
                required
              />
            </div>

            {/* Path DB */}
            <div>
              <label className="  font-base text-white label">Path DB</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Path"
                value={path_db_sql}
                onChange={(e) => setPathDBSQL(e.target.value)}
                required
              />
            </div>
          </section>
          <section className="sm:w-full w-2/5">
            {/* Path Server Backup */}
            <div>
              <label className="  font-base text-white label">
                Path Server Backup
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Path"
                value={path_server_backup}
                onChange={(e) => setPathServerBackup(e.target.value)}
                required
              />
            </div>

            {/* Path Iloan Backup */}
            <div>
              <label className="  font-base text-white label">
                Path Iloan Backup
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Path"
                value={path_iloan_backup}
                onChange={(e) => setPathIloanBackup(e.target.value)}
                required
              />
            </div>

            {/* Path Copy Promote */}
            <div>
              <label className="  font-base text-white label">
                Path Copy Promote
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Path"
                value={path_copy_promote}
                onChange={(e) => setPathCopyPromote(e.target.value)}
                required
              />
            </div>

            {/* Path Server Promote */}
            <div>
              <label className="  font-base text-white label">
                Path Server Promote
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Path"
                value={path_server_promote}
                onChange={(e) => setPathServerPromote(e.target.value)}
                required
              />
            </div>

            {/* Path Copy Tujuan */}
            <div>
              <label className="  font-base text-white label">
                Path Copy Tujuan
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Path"
                value={path_copy_tujuan}
                onChange={(e) => setPathCopyTujuan(e.target.value)}
                required
              />
            </div>

            {/* Path Tujuan */}
            <div>
              <label className="  font-base text-white label">
                Path Tujuan
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Path"
                value={path_tujuan}
                onChange={(e) => setPathTujuan(e.target.value)}
                required
              />
            </div>

            {/* Durasi Akses Server */}
            <div>
              <label className="  font-base text-white label">
                Durasi Akses Server
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_akses_server}
                onChange={(e) => setDurasiAksesServer(e.target.value)}
                required
              />
            </div>

            {/* Durasi Backup */}
            <div>
              <label className="  font-base text-white label">
                Durasi Backup
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_backup}
                onChange={(e) => setDurasiBackup(e.target.value)}
                required
              />
            </div>

            {/* Durasi Copy Server Promote */}
            <div>
              <label className="  font-base text-white label">
                Durasi Copy Server Promote
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_copy_server_promote}
                onChange={(e) => setDurasiCopyServerPromote(e.target.value)}
                required
              />
            </div>

            {/* Durasi Copy Tujuan */}
            <div>
              <label className="  font-base text-white label">
                Durasi Copy Tujuan
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_copy_tujuan}
                onChange={(e) => setDurasiCopyTujuan(e.target.value)}
                required
              />
            </div>

            {/* Durasi Query */}
            <div>
              <label className="  font-base text-white label">
                Durasi Query
              </label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Durasi"
                value={durasi_query}
                onChange={(e) => setDurasiQuery(e.target.value)}
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

export default AddDocIloanCon;
