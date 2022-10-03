import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const initData = {
  event_name: "",
  host_name: "",
  start_date: "",
  end_date: "",
  location: "",
};

function Create() {
  const [eventData, setEventData] = useState(initData);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <h2> Schedule an event </h2>

        <label>
          Event Name
          <input
            type="text"
            name="Event Name"
            value={eventData.event_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Host Name
          <input
            type="text"
            name="Host Name"
            value={eventData.host_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Start Date
          <input
            type="text"
            name="Start Date"
            value={eventData.start_date}
            onChange={handleChange}
          />
        </label>

        <label>
          End Date
          <input
            type="text"
            name="End Date"
            value={eventData.end_date}
            onChange={handleChange}
          />
        </label>

        <label>
          location
          <input
            type="text"
            name="Location"
            value={eventData.location}
            onChange={handleChange}
          />
        </label>

        <label>
          Image
          <input
            type="file"
            name="Image"
            value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
      </form>
      <nav>
        <Link to="/event"> Next </Link>
      </nav>
    </div>
  );
}

export default Create;
