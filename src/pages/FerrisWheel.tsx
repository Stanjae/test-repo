

const FerrisWheel = () => {
  return (
    <section className=" h-screen bg-sky-400 w-full flex items-center justify-center">
      <div className=" w-[400px] h-[400px] border-2 border-slate-950 rounded-full  relative  animate-slow">
        <div className=" w-full h-0.5 bg-slate-950 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className=" w-full h-0.5 bg-slate-950 rotate-[120deg] top-1/2 absolute left-1/2 -translate-x-1/2" />
        <div className=" w-full h-0.5 bg-slate-950 rotate-[240deg] top-1/2 absolute left-1/2 -translate-x-1/2" />
        {/* boxes */}
        <div className="toogle-color size-16 bg-red-300 animate-slow -top-10 absolute left-[17%]" />
        <div className="toogle-color size-16 bg-red-300 animate-slow -top-10 absolute left-[68%]" />
        <div className="toogle-color size-16 bg-red-300 animate-slow bottom-0 absolute right-[68%]" />
        <div className="toogle-color size-16 bg-red-300 animate-slow -bottom-0 absolute right-[17%]" />
        <div className="toogle-color size-16 bg-red-300 animate-slow top-1/2 absolute right-[100%]" />
        <div className="toogle-color size-16 bg-red-300 animate-slow top-1/2 absolute left-[100%]" />
      </div>
    </section>
  );
}

export default FerrisWheel