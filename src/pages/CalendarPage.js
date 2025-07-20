import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarPage.css"; // Ensure custom styles are loaded

const CalendarComponent = ({ events = [], setEvents }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const existingEvent = events.find(
      (event) => event.date.toDateString() === date.toDateString()
    );
    if (existingEvent) {
      setEventName(existingEvent.title);
      setEventTime(existingEvent.time);
    } else {
      setEventName("");
      setEventTime("");
    }
  };

  const addEvent = () => {
    if (selectedDate && eventName && eventTime) {
      const newEvent = {
        date: new Date(selectedDate),
        time: eventTime,
        title: eventName,
      };

      const updatedEvents = [...events, newEvent].sort((a, b) => a.date - b.date);
      setEvents(updatedEvents);

      setEventName("");
      setEventTime("");
    } else {
      alert("Please make sure to select a date and enter the event name and time!");
    }
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Calendar</h2>
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        locale="en-US"
        tileClassName={({ date }) =>
          date.toDateString() === selectedDate?.toDateString()
            ? "selected-date"
            : null
        }
      />

      {selectedDate && (
        <div className="selected-date-section">
          <h3 className="selected-date-display">
            Selected Date: {selectedDate.toDateString()}
          </h3>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event title"
          />
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
          <button onClick={addEvent}>Add Event</button>
        </div>
      )}

      <div className="event-list-section">
        <h3 className="event-list-title">Event List</h3>
        {events.length > 0 ? (
          <ul className="event-list">
            {events.map((event, index) => (
              <li key={index} className="event-item">
                {event.date.toDateString()} {event.time} - {event.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-events">No events at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
