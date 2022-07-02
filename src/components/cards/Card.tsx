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
      } min-w-[15rem] cursor-pointer rounded-md p-3 shadow-md transition duration-300`}
    >
      <p className="px-2 text-sm font-semibold text-indigo-800">{title}</p>
      <p className="text-xl font-bold text-indigo-800">{amount}</p>
    </div>
  );
}
