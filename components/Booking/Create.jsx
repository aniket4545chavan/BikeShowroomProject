import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Create = () => {
  const { id: ourVehicleId } = useParams();
  const navigate = useNavigate();

  console.log(ourVehicleId)
  const [name, setName] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    // Fetch the details of the selected vehicle from the backend API
    axios
      .get(`http://localhost:8800/api/hotels/${ourVehicleId}`)
      .then((response) => {
        const vehicle = response.data.vehicle;
        // Set the form fields with the vehicle details
        setName(vehicle.name);
        // set other field values using the vehicle object
      })
      .catch((error) => {
        console.log("Failed to fetch vehicle details:", error);
      });
  }, [ourVehicleId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the booking object with form field values
    const booking = {
      name,
      numberOfDays,
      startTime,
      endTime,
      vehicle: ourVehicleId,
    };

    console.log(ourVehicleId)

    // Send the booking data to the backend API to create a new booking
    axios
      .post("http://localhost:8800/api/bookings", booking)
      .then((response) => {
        console.log("Booking created successfully:", response.data);
        // Reset the form fields
        setName("");
        setNumberOfDays(1);
        setStartTime("");
        setEndTime("");
      })
      navigate('/')
      .catch((error) => {
        console.log("Failed to create booking:", error);
      });
  };

  return (
    <div className="hotelAdding" >
      <h1>Booking Form</h1>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="numberOfDays">Number of Days:</label>
        <input
          type="number"
          id="numberOfDays"
          name="numberOfDays"
          value={numberOfDays}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value >= 1) {
              setNumberOfDays(value);
            }
          }}
          required
        />
        <br />
        <br />

        <label htmlFor="startTime">Start Time:</label>
        <input
          type="datetime-local"
          id="startTime"
          name="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="endTime">End Time:</label>
        <input
          type="datetime-local"
          id="endTime"
          name="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
