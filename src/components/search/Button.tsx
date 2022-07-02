import React from "react";
import { BsCheckLg } from "react-icons/bs";
type Props = {
  children: React.ReactNode;
  onClick: () => void;
  isSelected?: boolean;
};

export default function Button({
  children,
  onClick,
  isSelected = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={` ${
        isSelected ? "bg-red-500 bg-opacity-80 text-white" : "bg-white"
      }  flex items-center space-x-1 rounded-md py-2 px-2 font-main text-sm font-medium shadow-md transition hover:bg-opacity-80`}
    >
      <span>{children}</span>
      {isSelected && <BsCheckLg />}
    </button>
  );
}
