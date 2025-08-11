import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TicketCart({ showTicket }) {
  const navigate = useNavigate();

  const handleTicketClick = (ticket) => {
    navigate("/ticket-details", { state: ticket }); 
  };

  return (
    <div className="p-4 bg-[#1D1A39] min-h-screen">
      <Link to="/" className="text-gray-300">Go Back to Form</Link>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-300">Registered Tickets</h2>
      <div className="grid grid-cols-4 gap-4 justify-center cursor-pointer">
        {showTicket.map((ticket, index) => (
          <div
            key={index}
            className="relative bg-no-repeat bg-center bg-cover max-w-xs text-center"
            style={{
              backgroundImage: `url('src/assets/images/pattern-ticket.svg')`,
            }}
            onClick={() => handleTicketClick(ticket)}
          >
            <div className="relative z-10 flex flex-col items-center rounded-lg py-2">
              <img
                src={ticket.image}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
              />
                <p className="absolute right-0 top-16 rotate-90 text-gray-300">#110011</p>

              <div className=" text-gray-300 text-sm font-bold">
              <p>Name: {ticket.name}</p>
              <p>Email: {ticket.email}</p>
              <p>Username: {ticket.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketCart;