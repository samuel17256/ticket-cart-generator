import icon from "../assets/images/icon-upload.svg";
import { useNavigate } from "react-router-dom";

function Form({ data, setData, setShowTicket }) {
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const file = e.target.files ? e.target.files[0] : null;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
      image: file ? URL.createObjectURL(file) : prevData.image,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.name || !data.email || !data.username || !data.image || !data.reason) {
      alert("Please fill all fields and upload an image.");
    } else {
      alert("Form submitted successfully!");
      const newTicket = { ...data };
      setShowTicket((prevTickets) => [...prevTickets, newTicket]);
      setData({ name: "", email: "", username: "", image: null, reason: "" });
      navigate("/tickets");
    }
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/src/assets/images/background-desktop.png')",
      }}
    >
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage: "url('src/assets/images/pattern-lines.svg')",
        }}
      >
        <div className="max-w-md bg-transparent text-white text-center">
          <div className="flex flex-col items-center pt-5">
            <img
              src="src/assets/images/logo-full.svg"
              alt="logo"
              className="h-6"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-sans">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="text-gray-300 text-base">
              Secure your spot at next year's biggest coding conference.
            </p>
            <img
              src="src/assets/images/pattern-squiggly-line-top.svg"
              alt="line top"
              className="absolute ml-[183px] top-0 mt-6 z-0 pointer-events-none"
            />
          </div>

          <div className="border-dashed border-2 border-gray-500 rounded-lg py-2 cursor-pointer hover:border-white transition bg-[#1D1A39]">
            <div className="flex flex-col items-center justify-center mx-44 h-22 rounded-md text-center bg-[#231f47]">
              <img src={data.image ? data.image : icon} alt="icon image" />
            </div>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="pt-2"
            />
            <p className="text-sm pt-4">Drag and drop or click to upload</p>
          </div>
          <div className="text-xs text-gray-400 mr-40 top-0 relative">
            <img
              src="src/assets/images/icon-info.svg"
              alt="Info Icon"
              className="inline mr-1"
            />
            Upload your photo (JPG or PNG, max size: 5MB).
          </div>
          <img
            src="src/assets/images/pattern-circle.svg"
            alt=""
            className="absolute ml-[400px] z-0 pointer-events-none"
          />

          <form className="text-left">
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-[#1D1A39] border border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 text-white"
                placeholder="my name"
                name="name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 rounded-md bg-[#1D1A39] border border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 text-white"
                name="email"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="username">Github Username</label>
              <input
                type="text"
                placeholder="@yourusername"
                className="w-full px-4 py-2 rounded-md bg-[#1D1A39] border border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 text-white"
                name="username"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="reason">Why are you attending?</label>
              <textarea
                className="w-full px-4 py-1 rounded-md bg-[#1D1A39] border border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 text-white"
                placeholder="Share your reason for attending the event"
                name="reason"
                rows="3"
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#F25C54] hover:bg-[#e14b4a] transition-colors text-[#1D1A39] text-lg font-medium py-2 rounded-md mt-4"
            >
              Generate My Ticket
            </button>
          </form>
        </div>
        <img
          src="src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          alt=""
          className="absolute mt-[190px] mr-[530px] z-0 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default Form;