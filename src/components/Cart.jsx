import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import Button from "./Button";

const Cart = () => {
  const { currentColor, iconRef, handleOutsideClick } = useStateContext();
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div
        ref={iconRef}
        className="float-right h-screen dark:bg-secondary-dark-bg dark:text-gray-200 bg-white dark:[#484B52] w-400 ease-in-out duration-1000 transition-all p-8"
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl">Shopping Cart</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          ></Button>
        </div>

        {cartData.map((item, index) => (
          <div key={index}>
            <div className="">
              <div className="flex items-center gap-5 border-b-1 border-color dark:border-gray-400 p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg h-80 w-24"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="font-semibold text-gray-600 text-sm dark:text-gray-400">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-2 border-color rounded">
                      <button className="p-2 text-red-600 dark:border-gray-600 border-color border-r-2">
                        {/* hover:text-red-700 hover:font-bold */}
                        <AiOutlineMinus />
                      </button>
                      <p className="p-2 ">0</p>
                      <button className="p-2 text-green-600 dark:border-gray-600 border-color border-l-2">
                        {/* hover:text-green-600 hover:font-bold */}
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p>$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p>$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
