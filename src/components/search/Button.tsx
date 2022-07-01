import React from "react";
import { BsCheckLg } from "react-icons/bs";
type Props = {
  children: React.ReactNode;
  extraStyle?: string;
  onClick: () => void;
  isSelected?: boolean;
};

export default function Button({
  children,
  extraStyle = "",
  onClick,
  isSelected = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${extraStyle} ${
        isSelected ? "bg-red-700 bg-opacity-80 text-white" : ""
      } py-2 flex items-center space-x-1 px-2 hover:bg-opacity-80 transition shadow-md bg-white rounded-md font-medium text-sm font-main`}
    >
      <span>{children}</span>
      {isSelected && <BsCheckLg />}
    </button>
  );
}
