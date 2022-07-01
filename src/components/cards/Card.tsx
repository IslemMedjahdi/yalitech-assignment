import React from "react";

type Props = {
  title: string;
  amount: number;
  clickHandler: () => void;
  isSelected: boolean;
};

export default function Card({
  title,
  amount,
  clickHandler,
  isSelected,
}: Props) {
  return (
    <div
      onClick={clickHandler}
      className={`${
        isSelected ? "bg-slate-300" : "bg-slate-100 hover:bg-slate-200"
      } cursor-pointer shadow-md transition duration-300 rounded-md p-3 min-w-[15rem]`}
    >
      <p className="px-2 text-indigo-800 font-semibold text-sm">{title}</p>
      <p className="font-bold text-xl text-indigo-800">{amount}</p>
    </div>
  );
}
