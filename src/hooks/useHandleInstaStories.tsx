import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { storiesType } from "../types/stories.types";

const useHandleInstaStories = () => {
  const [data, setData] = useState<storiesType[]>([]);

  useEffect(() => {
    if (data.length == 0) {
      const duration = 10 * 60 * 1000;
      const localData = localStorage.getItem("insta-stories");
      if (localData) {
        const newData =
          Array.isArray(JSON.parse(localData)) &&
          JSON.parse(localData).filter((item: storiesType) => {
            return (
              new Date().getTime() - new Date(item.createdAt).getTime() <
              duration
            );
          });
        setData(newData);
      }
    }
  }, [setData]);

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleUpload = async (file: File) => {
    try {
      const base64 = await fileToBase64(file);
      const payload = {
        id: uuidv4(),
        name: file.name,
        image: base64,
        createdAt: new Date().toISOString(),
        isViewed: false,
      };
      const totalData = [...data, payload];
      setData(totalData);
      localStorage.setItem("insta-stories", JSON.stringify(totalData));
    } catch (e) {
      console.log(e);
    }
  };

    const deleteImage = (id: string) => {
      const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
        localStorage.setItem("insta-stories", JSON.stringify(filteredData));
  };
  return {
    handleUpload,
    data,
    setData,
    deleteImage,
  };
};

export default useHandleInstaStories;
