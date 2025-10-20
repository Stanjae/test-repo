import MoonImage from "../assets/moon.png";

const Buildings = () => {
  return (
    <div className=" bg-gray-800 h-screen relative">
      {/* moon */}
      <div className="absolute left-0 w-40 h-40 sky flex items-center justify-center rounded-full">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <img src={MoonImage} alt="moon" className="w-20 h-20" />
      </div>

      {/* buildings */}
      <section className=" absolute left-1/2 -translate-x-1/2 bottom-40  flex max-w-3xl w-full items-end h-96">
        {/* building 1 */}
        <div className=" w-20  flex flex-col items-center z-50">
          <div className=" w-7 h-7 translate-y-4   rotate-[45deg] bg-black" />
          <div className=" w-12 h-6  bg-black"></div>
          <div className=" w-full bg-black h-full py-8">
            <section className=" flex gap-0.5 w-3/5  mx-auto justify-between">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className=" w-[2px] h-44 bg-cyan-200 rounded-t-4xl rounded-b-4xl"
                  />
                ))}
            </section>
          </div>
        </div>

        {/* second building */}
        <div className=" flex flex-col w-20 items-center h-full -ml-4 ">
          <div className=" h-12 w-10 trapezium bg-gradient-to-b from-gray-950 to-violet-500"></div>
          <div className=" h-12 w-11 trapezium bg-gradient-to-b from-gray-950 to-violet-500"></div>
          <div className=" h-12 w-12 trapezium bg-gradient-to-b from-gray-950 to-violet-500"></div>
          <div className=" w-full bg-black bg-radial-[at_50%_75%] from-violet-500 via-black to-gray-950 to-90% h-full"></div>
        </div>

        {/* third building */}
        <div className=" w-20  flex flex-col items-center h-3/6">
          <div className=" w-full bg-black h-full py-5">
            <section className=" flex gap-0.5 w-3/5  mx-auto">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className=" flex-1 h-36 bg-pink-300 " />
                ))}
            </section>
          </div>
        </div>

        {/* fourth building */}
        <div className=" w-20  flex flex-col items-center h-4/6">
          <div className=" triangle w-full h-10 bg-black" />
          <div className=" w-full bg-black h-full py-5">
            <section className=" flex gap-3 flex-col">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 bg-emerald-300 w-full ${
                      index == 5 ? "z-50" : ""
                    }`}
                  />
                ))}
            </section>
          </div>
        </div>

        {/* fifth building */}
        <div className=" w-20  flex flex-col items-center h-5/12 -ml-5 custom-shape">
          <div className=" w-4/6  bg-black flex gap-1 p-0.5">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="  h-3 bg-fuchsia-500 flex-1" />
              ))}
          </div>
          <div className=" w-full bg-black h-full py-5">
            <section className=" flex gap-3 flex-col"></section>
          </div>
        </div>

        {/* sixth building */}
        <div className=" w-20  flex flex-col items-center h-10/12 -ml-8">
          <div className="  bg-black flex gap-1 px-2 h-full w-full justify-between">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="  h-full bg-pink-300 w-0.5" />
              ))}
          </div>
        </div>

        {/*  seventh building */}
        <div className=" w-20  flex flex-col items-center h-6/12 -ml-8 z-10">
          <div className="  bg-black flex gap-1.5 p-1.5 h-full w-full flex-wrap justify-center">
            {Array(20)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="h-2 bg-emerald-300 w-[45%]" />
              ))}
          </div>
        </div>

        {/* eighth building */}
        <div className=" w-20  flex flex-col items-center h-7/12 -ml-5 right-angle-triangle-top ">
          <div className="  bg-black flex gap-1.5 p-1.5 h-full w-full flex-wrap justify-between pt-14">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="size-6 rounded-full bg-violet-500"
                />
              ))}
          </div>
        </div>

        {/* ninth building */}

        <div className=" w-20  flex flex-col items-center h-9/12 -ml-4 ">
          <div className=" h-7 bg-black w-0.5" />
          <div className=" h-4 bg-black w-5/6" />
          <div className="  bg-black flex gap-1.5 p-1.5 h-full w-full  py-3">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="h-full flex-1 bg-cyan-300" />
              ))}
          </div>
        </div>

        {/* tenth building */}
        <div className=" w-20  flex flex-col items-center h-6/12 -ml-8 z-10">
          <div className="  bg-black flex gap-1.5 p-1.5 h-full w-full flex-wrap  items-center justify-center">
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="h-7 bg-fuchsia-300 w-[27%]" />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buildings;
