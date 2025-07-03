import React from "react";
import { useLocation, Link } from "react-router-dom";

function TicketDetails() {
  const location = useLocation();
  const ticket = location.state; 

  return (
    <div className="min-h-screen w-full bg-[#1D1A39] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#0e0b2e] rounded-lg p-6 text-center text-gray-300">
        <h2 className="text-2xl font-bold mb-4">Ticket Details</h2>
        <img
          src={ticket.image}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-lg font-semibold">Name: {ticket.name}</p>
        <p className="text-gray-600">Email: {ticket.email}</p>
        <p className="text-gray-600">Username: {ticket.username}</p>
        <p className="text-gray-600 mt-4">
          <strong>Reason for Attending:</strong> {ticket.reason}
        </p>
        <Link
          to="/tickets"
          className="mt-6 inline-block bg-[#F25C54] text-white py-2 px-4 rounded-md hover:bg-[#e14b4a] transition"
        >
          Back to Tickets
        </Link>
      </div>
    </div>
  );
}

export default TicketDetails;