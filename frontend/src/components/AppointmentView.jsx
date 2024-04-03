import React from "react";
//import "./components/AppointmentView.css";
import Navbar from "./LoginNavbar";
import Footer from "./Footer";

const AppointmentView = ({ appointments, handleCancelBooking }) => {
  return (
    <div>
      <Navbar />
      <table className="ViewAppointment">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Cancel Booking</th>
            <th>Log Out</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <button onClick={() => handleCancelBooking(appointment.id)}>
                  Cancel
                </button>
              </td>
              <td>
                {/*  */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default AppointmentView;
