
function Card({data}) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex justify-center px-4 font-mono"
      style={{
        backgroundImage: "url('/src/assets/images/background-desktop.png')",
      }}
    >
      <div>
        <div className="flex flex-col items-center pt-5">
          <img
            src="src/assets/images/logo-full.svg"
            alt="logo"
            className="h-6"
          />
        </div>
        <div className="text-center pt-12">
          <h1 className="text-4xl font-bold font-sans text-white">
            Congrats,
            <span className="text-red-300 to-red-300">{data.name}!</span>
            <br />
            Your ticket is ready.
          </h1>
          <p className="text-gray-300 text-base mt-4">
            We've emailed your ticket to <br />
            <span className="text-red-300">{data.email}</span> and will
            send updates in <br /> the run up to the event.
          </p>
          <img
            src="src/assets/images/pattern-squiggly-line-top.svg"
            alt="line top"
            className="absolute ml-[426px] top-0 mt-6 z-0 pointer-events-none"
          />
        </div>
        <div className="mt-16">
          <img
            src="src/assets/images/pattern-ticket.svg"
            alt=""
            className="z-0 absolute text-center 
          mr-36"
          />

          <div className=" p-6 text-white text-center relative z-10">
            <img src="src/assets/images/logo-full.svg" alt="" />
            <p>january 31,2025 / Austin, TX</p>
          </div>

          <div className="flex  items-center relative z-10 px-6 mt-24"> 
            <img src={data.image} alt="" className="h-14 rounded-lg" />
            <div className="flex items-center justify-center flex-col">
            <p className="text-gray-300 text-xl">{data.name}</p>
            <div className="flex items-center space-x-2">
            <img
                src="src/assets/images/icon-github.svg"
                alt="Info Icon"
                className="inline ml-2 h-4 w-4"
              />
                <p className="text-sm text-gray-300">@{data.username}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
