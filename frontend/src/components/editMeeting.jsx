/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMeeting = () => {
  const [Id, setId] = useState("");
  const [UUID, setUUID] = useState("");
  const [meeting_name, setMeetingName] = useState("");
  const [meeting_desc, setMeetingDesc] = useState("");
  const [online_meeting_link, setOnlineMeetingLink] = useState("");
  const [meeting_date, setMeetingDate] = useState("");
  const [editedBy, setEditedBy] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [user, setUser] = useState([]);
  const history = useNavigate();
  const { uuid } = useParams();
  const navigate = useNavigate();

  const updateMeeting = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/meeting/${uuid}`, {
      uuid: UUID,
      id: Id,
      meeting_name: meeting_name,
      meeting_desc: meeting_desc,
      online_meeting_link: online_meeting_link,
      meeting_date: meeting_date,
      editedBy: editedBy,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
    let path = "/dashboard/meeting";
    navigate(path);
    window.alert("Meeting Updated Successfully");
    history.push("/meeting");
  };

  useEffect(() => {
    getMeetingById();
  }, []);

  const getMeetingById = async () => {
    const response = await axios.get(`http://localhost:5000/meeting/${uuid}`);
    setId(response.data.id);
    setUUID(response.data.uuid);
    setMeetingName(response.data.meeting_name);
    setMeetingDesc(response.data.meeting_desc);
    setOnlineMeetingLink(response.data.online_meeting_link);
    setMeetingDate(response.data.meeting_date);
    setEditedBy(response.data.editedBy);
    setCreatedAt(response.data.createdAt);
    setUpdatedAt(response.data.updatedAt);
    setUser(response.data.user.name);
  };

  return (
    <div className="p-10">
      <div className="py-5">
        <span className="text-xl font-bold">Edit Meeting</span>
      </div>

      <form onSubmit={updateMeeting}>
        <div className="flex flex-row gap-20">
          <section className="sm:w-full w-2/5">
            {/* ID */}

            <div>
              <label className="label text-white">Meeting ID</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Task ID"
                value={Id}
                onChange={(e) => setId(e.target.value)}
                disabled
              />
            </div>
            {/* UUID */}

            <div>
              <label className="label text-white">Meeting UUID</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Task UUID"
                value={UUID}
                onChange={(e) => setUUID(e.target.value)}
                disabled
              />
            </div>
            {/* Meeting Name */}

            <div>
              <label className="label text-white">Meeting Name</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Meeting Name"
                value={meeting_name}
                onChange={(e) => setMeetingName(e.target.value)}
                required
              />
            </div>

            {/* Online Meeting Link */}

            <div>
              <a
                onClick={() => {
                  navigator.clipboard.writeText(online_meeting_link);
                  window.alert("Link Copied");
                }}>
                <label className="label text-white">
                  Online Meeting Link (Https://) - Click to copy
                </label>
              </a>
              <input
                className="input input-bordered w-full"
                type="url"
                placeholder="Online Meeting Link"
                value={online_meeting_link}
                onChange={(e) => setOnlineMeetingLink(e.target.value)}
              />
            </div>
          </section>

          <section className="sm:w-full w-2/5">
            {/*Meeting Date */}

            <div>
              <label className="label text-white">Meeting Date</label>
              <input
                className="input input-bordered w-full"
                type="date"
                placeholder="Meeting Date"
                value={meeting_date}
                onChange={(e) => setMeetingDate(e.target.value)}
                required
              />
            </div>
            {/*Edited By*/}

            <div>
              <label className="label text-white">Edited By</label>
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Edited By"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                disabled
              />
            </div>
            {/* Created At */}

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

            {/* Updated At */}

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
        <div className="w-full">
          {/* Meeting Desc */}

          <div>
            <label className="label text-white">Meeting Desc</label>
            <textarea
              className="input input-bordered h-40 w-full"
              type="text"
              placeholder="Meeting Desc"
              value={meeting_desc}
              onChange={(e) => setMeetingDesc(e.target.value)}
              required
            />
          </div>
          {/* Button */}

          <div className="pt-5">
            <button className="w-full bg-sky-500 p-3 rounded-lg text-white">
              Update Meeting
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditMeeting;
