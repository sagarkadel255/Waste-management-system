import React, { useState, useEffect } from "react";
import axiosInstance from "./axios"; // Import the Axios instance
import "./event.css";

const EventList = () => {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);

  // Fetch events from the backend
  useEffect(() => {
    axiosInstance
      .get("/events") // Use the Axios instance
      .then((response) => setEvents(response.data))
      .catch((error) => console.error(error));
  }, []);

  const openJoinForm = (eventName, eventId) => {
    setEventName(eventName);
    setSelectedEventId(eventId);
    setShowJoinForm(true);
  };

  const closeJoinForm = () => {
    setShowJoinForm(false);
  };

  const handleJoinEvent = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const requestData = {
      event_id: selectedEventId,
      full_name: formData.get("full-name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await axiosInstance.post("/user-requests", requestData); // Use the Axios instance
      alert(response.data.message);
      closeJoinForm();
    } catch (error) {
      console.error(error);
      alert("Failed to submit request");
    }
  };

  return (
    <div className="event-page">
      {/* Map through the events and render them dynamically */}
      {events.map((event) => (
        <div className="event-details-container" key={event.id}>
          <div className="event-image">
            {/* Use static images based on event name */}
            <img
              src={
                process.env.PUBLIC_URL +
                `/images/${
                  event.name.toLowerCase().includes("road")
                    ? "road.jpg"
                    : event.name.toLowerCase().includes("river")
                    ? "riverclean.jpg"
                    : event.name.toLowerCase().includes("tree")
                    ? "planting.jpg"
                    : event.name.toLowerCase().includes("food")
                    ? "fooddrive.jpg"
                    : event.name.toLowerCase().includes("health")
                    ? "healthcam.jpg"

                    : "default.jpg"
                }`
              }
              alt={event.name}
            />
          </div>
          <div className="event-info">
            <h1>{event.name}</h1>
            <p className="event-description">{event.description}</p>
            <div className="event-details">
              <div className="detail-item">
                <span className="detail-label">📍 Location:</span>
                <span className="detail-value">{event.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📅 Start Date & Time:</span>
                <span className="detail-value">
                  {new Date(event.start_date).toLocaleString()}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📅 End Date & Time:</span>
                <span className="detail-value">
                  {new Date(event.end_date).toLocaleString()}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">👤 Organizer:</span>
                <span className="detail-value">{event.organizer}</span>
              </div>
            </div>
            <button
              className="join-button"
              onClick={() => openJoinForm(event.name, event.id)}
            >
              Join Event
            </button>
          </div>
        </div>
      ))}

      {/* Join Event Form Modal */}
      {showJoinForm && (
        <div className="join-form-container" id="join-form-container">
          <div className="join-form-content">
            <span className="close" onClick={closeJoinForm}>
              &times;
            </span>
            <h2 id="form-title">Join {eventName}</h2>
            <form id="join-event-form" onSubmit={handleJoinEvent}>
              <label htmlFor="full-name">Full Name:</label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Enter your full name"
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
              <label htmlFor="message">Message (Optional):</label>
              <textarea
                id="message"
                name="message"
                placeholder="Any additional information or questions"
              ></textarea>
              <button type="submit">Send Join Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventList;