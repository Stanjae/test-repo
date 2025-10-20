const Home = () => {
  return (
    <div className=" flex justify-center items-center h-dvh bg-green-300 ">
      <section className="relative">
        {/* left ear */}
        <div
          className=" h-48 w-15 absolute -rotate-45 left-0 bottom-16 bg-gray-700 z-0 border-l-[35px] border-r-[35px] border-b-[70px]
         border-b-gray-800 border-l-transparent border-r-transparent rounded-tl-[90px] rounded-tr-xl"
        >
          <div
            className=" h-5 w-5 absolute  -rotate-[45%] -left-7 bottom-10 bg-gray-800 z-0 border-l-[25px] border-r-[25px] border-b-[56px]
         border-b-gray-800 border-l-transparent border-r-transparent rounded-tl-[90px] rounded-tr-xl"
          ></div>
        </div>
        {/* right ear */}
        <div
          className=" h-48 w-15 rotate-45 absolute right-0 bottom-16 bg-gray-700 z-0 border-l-[35px] border-r-[35px] border-b-[70px]
         border-b-gray-800 border-l-transparent border-r-transparent rounded-tl-xl rounded-tr-[90px]"
        >
          <div
            className=" h-5 w-5 absolute  rotate-[45%] -right-7 bottom-10 bg-gray-800 z-0 border-l-[25px] border-r-[25px] border-b-[56px]
         border-b-gray-800 border-l-transparent border-r-transparent rounded-tr-[90px] rounded-tl-xl"
          ></div>
        </div>
        {/* head */}
        <div className=" w-72 h-56 rounded-[78%] bg-gray-700 relative">
          {/* eyes */}
          <section className="absolute w-3/5 top-20 left-1/2 -translate-x-1/2 flex justify-between">
            <div className=" h-14 w-9 bg-black rounded-[80%] rotate-[30deg]">
              <span className=" h-3/6 bg-white w-4 absolute top-[10px] left-0.5 rounded-[50%]"></span>
            </div>
            <div className=" h-14 w-9 bg-black rounded-[80%] -rotate-[30deg]">
              <span className=" h-3/6 bg-white w-4 absolute top-[10px] right-0.5 rounded-[50%]"></span>
            </div>
          </section>
          {/* nose */}
          <div
            className=" absolute border-r-[15px] border-l-[10px] bg-amber-950 border-b-[25px] top-36 left-1/2 -translate-x-1/2
           border-b-amber-950 rounded-tl-[90%] rounded-br-[20%] rounded-bl-[20%] border-r-transparent border-l-transparent rotate-[45deg]"
          ></div>
          {/* whiskers-left */}
          <section className=" top-20 absolute -left-2 ">
            <svg>
              <line
                x1="0"
                y1="50"
                x2="150"
                y2="100"
                style={{ stroke: "#000", strokeWidth: 1 }}
              />
            </svg>
            <svg className=" absolute top-2">
              <line
                x1="0"
                y1="70"
                x2="150"
                y2="100"
                style={{ stroke: "#000", strokeWidth: 1 }}
              />
            </svg>
            <svg className=" absolute top-4">
              <line
                x1="0"
                y1="90"
                x2="150"
                y2="100"
                style={{ stroke: "#000", strokeWidth: 1 }}
              />
            </svg>
          </section>
          {/* whiskers -right */}
          <section className=" top-20 absolute -right-2 rotate-y-180 ">
            <svg>
              <line
                x1="0"
                y1="50"
                x2="150"
                y2="100"
                style={{ stroke: "#000", strokeWidth: 1 }}
              />
            </svg>
            <svg className=" absolute top-2">
              <line
                x1="0"
                y1="70"
                x2="150"
                y2="100"
                style={{ stroke: "#000", strokeWidth: 1 }}
              />
            </svg>
            <svg className=" absolute top-4">
              <line
                x1="0"
                y1="90"
                x2="150"
                y2="100"
                style={{ stroke: "#000", strokeWidth: 1 }}
              />
            </svg>
          </section>
          {/* mouth */}
          <section className=" absolute left-1/2 -translate-x-1/2   border-b-2-black border-black flex justify-center items-center top-48">
            <svg width="30">
              <path
                d="M 0 0 q 15 30 30 0"
                stroke="black"
                stroke-width="2"
                fill="none"
              />
            </svg>
            <svg width="30">
              <path
                d="M 0 0 q 15 30 30 0"
                stroke="black"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
