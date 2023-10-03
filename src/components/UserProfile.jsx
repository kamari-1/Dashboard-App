import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { userProfileData } from "../data/dummy";
import avatar from "../data/avatar.jpg";
import Button from "./Button";

const UserProfile = () => {
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
          <p className="font-semibold text-xl">User Profile</p>
        </div>

        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        ></Button>
      </div>

      <div className="flex gap-6 mt-6 items-center border-b-1 pb-6">
        <img src={avatar} alt="kamari" className="rounded-full h-24 w-24" />
        <div>
          <p className="text-xl font-semibold">Kamari</p>
          <p className="text-sm text-gray-400">Administrator</p>
          <p className="text-sm font-semibold text-gray-400">info@shoppy.com</p>
        </div>
      </div>

      {userProfileData.map((item, index) => (
        <div
          key={index}
          className="flex gap-5 p-4 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer border-b-1"
        >
          <button
            type="button"
            style={{
              color: item.iconColor,
              backgroundColor: item.iconBg,
            }}
            className="text-xl rounded-lg p-3"
          >
            {item.icon}
          </button>

          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="font-semibold text-gray-500 text-sm dark:text-gray-400">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        ></Button>
      </div>
    </div>
  );
};

export default UserProfile;
