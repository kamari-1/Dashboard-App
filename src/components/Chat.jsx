import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import Button from "./Button";

const Chat = () => {
  const { currentColor, iconRef, handleOutsideClick } = useStateContext();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <div
      ref={iconRef}
      className="absolute right-5 top-16 z-50 rounded-lg overflow-auto max-h-[600px] dark:text-gray-200 bg-white shadow-xl	 dark:bg-[#484B52] w-96 ease-in-out duration-1000 transition-all p-8"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="font-semibold text-xl">Messages</p>
          <p className="text-sm ml-3 font-bold text-red-500 bg-gray-200 p-1.5 rounded-lg">
            {chatData.length} new
          </p>
        </div>

        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        ></Button>
      </div>

      {chatData.map((item, index) => (
        <div key={index}>
          <div className="hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer">
            <div className="flex items-center gap-5 border-b-1 border-color dark:border-gray-400 p-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full h-12 w-12"
              />
              <div>
                <p className="font-semibold">{item.message}</p>
                <p className="font-semibold text-gray-600 text-sm dark:text-gray-400">
                  {item.desc}
                </p>
                <p className="font-semibold text-gray-600 text-sm dark:text-gray-400 ">
                  {item.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Mark all read"
          borderRadius="10px"
          width="full"
        ></Button>
      </div>
    </div>
  );
};

export default Chat;
