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
      }  w-11 cursor-pointer rounded-full`}
      onClick={onClick}
    >
      <p
        className={`${
          selected ? "text-red-600" : "text-slate-700"
        } relative p-2 text-center text-lg`}
      >
        {number}
      </p>
    </div>
  );
}
