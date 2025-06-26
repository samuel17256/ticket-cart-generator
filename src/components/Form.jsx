import { useState } from "react";
import React from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail]=useState("");
  const [username, setUserName]=useState("")
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
        <div className="max-w-md w-full bg-transparent text-white text-center space-y-6 my-8">
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
          <img src="src/assets/images/pattern-squiggly-line-top.svg" alt="line top"  className="absolute ml-[423px] top-0 mt-6 z-0 pointer-events-none"/>
          </div>
        

          <div className="border-dashed border-2 border-gray-500 rounded-lg p-6 cursor-pointer hover:border-white transition bg-[#1D1A39]">
            <div className="flex flex-col items-center justify-center mx-40 py-2 rounded-md text-center bg-[#231f47]">
              <img src="src/assets/images/icon-upload.svg" alt="icon image" />
            </div>
            <input type="file" />
            <p className="text-sm pt-4">Drag and drop or click to upload</p>
          </div>
          <div className="text-xs text-gray-400 mr-40 mb-10">
            <img
              src="src/assets/images/icon-info.svg"
              alt="Info Icon"
              className="inline mr-1"
            />
            Upload your photo (JPG or PNG, max size: 5MB).
          </div>
          <img src="src/assets/images/pattern-circle.svg" alt="" className="absolute ml-[400px] z-0 pointer-events-none"/>
 
          <form className="space-y-4 text-left">
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-[#1D1A39] border border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 text-white"
                placeholder="my name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 rounded-md bg-[#1D1A39] border border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 text-white"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="username">Github Username</label>
              <input
                type="text"
                placeholder="@yourusername"
                className="w-full px-4 py-2 rounded-md bg-[#1D1A39] border border-gray-600 focus:outline-none focus:border-white placeholder-gray-400 text-white"
                value={username}
                onChange={(e)=>setUserName(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F25C54] hover:bg-[#e14b4a] transition-colors text-[#1D1A39] text-lg font-medium py-2 rounded-md mt-4"
            >
              Generate My Ticket
            </button>
          </form>
          {/* <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Github User Name: {username}</p>
          </div> */}
        </div>
        <img src="src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg" alt="" className="absolute mt-[240px] mr-[530px] z-0 pointer-events-none"/>

      </div>
    </div>
  );
}

export default Form;
