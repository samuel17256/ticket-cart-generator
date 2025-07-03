import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import TicketCart from './components/TicketCart';
import TicketDetails from "./components/TicketDetails";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    image: null,
  });
  const [showTicket, setShowTicket] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Form
              data={data}
              setData={setData}
              setShowTicket={setShowTicket}
            />
          }
        />

        <Route
          path="/tickets"
          element={
            <TicketCart
            data={data}
            setData={setData}
              showTicket={showTicket}
              setShowTicket={setShowTicket}
            />
          }
        />
         <Route path="/ticket-details" element={<TicketDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;