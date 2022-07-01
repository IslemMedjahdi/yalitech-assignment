import React from "react";

type Props = {
  number: number;
  selected: boolean;
  onClick: () => void;
};

export default function Button({ number, selected, onClick }: Props) {
  return (
    <div
      className={`${
        selected ? "bg-red-100" : "bg-slate-100"
      }  rounded-full w-11 cursor-pointer`}
      onClick={onClick}
    >
      <p
        className={`${
          selected ? "text-red-600" : "text-slate-700"
        } p-2 relative text-center text-lg`}
      >
        {number}
      </p>
    </div>
  );
}
