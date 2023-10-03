import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  size,
  text,
  borderRadius,
  width,
  bgHoverColor,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: bgColor, color, borderRadius }}
        className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} dark:hover:bg-gray-600`}
        onClick={() => setIsClicked(initialState)}
      >
        {icon} {text}
      </button>
    </div>
  );
};

export default Button;
