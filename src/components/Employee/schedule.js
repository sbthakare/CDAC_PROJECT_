// src/components/Employee/EmployeeScheduler.js
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";

const schedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleDateClick = (info) => {
    const title = prompt("Enter Meeting Title");
    if (title) {
      const newEvent = {
        title: `Meeting: ${title}`,
        start: info.dateStr,
        allDay: true,
      };

      setEvents((prevEvents) => [...prevEvents, newEvent]);

      // Save the new event to localStorage for persistence
      const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
      existingEvents.push(newEvent);
      localStorage.setItem("events", JSON.stringify(existingEvents));

      alert("Meeting scheduled successfully!");
    }
  };

  return (
    <div className="container mt-5">
      <h4>Your Schedule</h4>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default schedule;
