import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddMeeting = () => {
  const [meeting_name, setMeetingName] = useState("");
  const [meeting_desc, setMeetingDesc] = useState("");
  const [online_meeting_link, setOnlineMeetingLink] = useState("");
  const [meeting_date, setMeetingDate] = useState("");
  const history = useNavigate();
  const navigate = useNavigate();

  const saveMeeting = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/meeting", {
      meeting_name: meeting_name,
      meeting_desc: meeting_desc,
      online_meeting_link: online_meeting_link,
      meeting_date: meeting_date, 
    });
    let path = "/dashboard/meeting";
    navigate(path);
    window.alert("Meeting Added Successfully");
    history.push("/meeting");
  };

    //User
    const { user } = useSelector((state) => state.auth);

  return (
    <div className=" w-full p-10">
      <div className="py-5">
        <span className="text-xl font-bold">Add new Meeting</span>
      </div>
      <form onSubmit={saveMeeting}>
        <div className="flex flex-row gap-20">
          <section className="sm:w-full w-2/5">
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
              <label className="label text-white">Online Meeting Link (Https)</label>
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
                value={user.name}
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
              Add Meeting
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMeeting;
