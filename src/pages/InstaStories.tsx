/* eslint-disable react-hooks/exhaustive-deps */
import { PlusCircle, XCircleIcon } from "lucide-react";
import useHandleInstaStories from "../hooks/useHandleInstaStories";
import { useEffect, useState } from "react";
import ProgressBar from "@/components/atoms/progress/ProgressBar";

const InstaStories = () => {
  const { handleUpload, data, setData, deleteImage } = useHandleInstaStories();

  const [activeIndex, setActiveIndex] = useState<number>();

  const [progress, setProgress] = useState(0);

  const handleViewImage = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    if (activeIndex !== undefined) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (activeIndex == data.length - 1) {
              setActiveIndex(undefined);
            } else {
              setActiveIndex(activeIndex + 1);
              }
              const fixatedData = data.map((item, index) => {
                if (index == activeIndex) {
                  return { ...item, isViewed: true };
                }
                return item;
              })
              setData(fixatedData);
              localStorage.setItem("insta-stories", JSON.stringify(fixatedData));
            return 0;
          } else {
            return prev + 25;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [activeIndex, setData]);

  return (
    <main className=" h-screen flex items-center justify-center flex-col gap-5">
      <div className=" max-w-3xl border-2 p-2 w-full rounded-2xl flex items-center gap-x-2">
        <button className=" relative rounded-full">
          <input
            onChange={async (e) => await handleUpload(e.target.files![0])}
            className=" opacity-0 absolute top-0 left-0 w-full h-full"
            type="file"
          />
          <PlusCircle />
        </button>
        <div className=" h-10 w-1 bg-slate-600" />
        {data.map((item, index) => (
          <div key={index} className=" relative">
            <img
              className={` w-10 rounded-full h-10 border-4 ${
                !item.isViewed ? " border-blue-600" : "border-gray-400"
              }`}
              onClick={() => handleViewImage(index)}
              src={item.image}
              alt={item.name}
                />
                <button onClick={() => deleteImage(item.id)}  className="absolute -top-1 -right-1"><XCircleIcon fill="red" size={18} /></button>
          </div>
        ))}
      </div>

      <section className=" w-full bg-white">
        {typeof activeIndex === "number" && activeIndex !== undefined && (
          <div className="max-w-[1080px] w-full">
            <ProgressBar value={progress} max={100} />
            <img
              src={(data[activeIndex as number].image as string) ?? ""}
              alt=""
              className=" max-h-[360px] w-full"
            />
          </div>
        )}
          </section>
          
          <div>
              <p>Testing Undo Changes</p>
          </div>
    </main>
  );
};

export default InstaStories;
