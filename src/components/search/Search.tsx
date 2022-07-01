import React from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {
  setSearchValue: (s: string) => void;
  searchValue: string;
  searchBy: string;
  setSearchBy: (s: string) => void;
  total: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  clearHandler: () => void;
  pageSize: number;
  setPageSize: (n: number) => void;
  setSelectedPage: (n: number) => void;
};

const searchByTypes = [
  {
    title: "tracking_id",
    value: "tracking_id",
  },
  {
    title: "phone",
    value: "phone",
  },
  {
    title: "full_name",
    value: "full_name",
  },
];

export default function Search({
  setSearchValue,
  searchValue,
  searchBy,
  setSearchBy,
  total,
  onSubmit,
  clearHandler,
  pageSize,
  setPageSize,
  setSelectedPage,
}: Props) {
  return (
    <div className="bg-slate-100 py-2 px-4 flex items-center space-x-4 rounded-3xl">
      {searchByTypes.map((item, index) => (
        <Button
          isSelected={searchBy === item.value}
          key={index}
          onClick={() => setSearchBy(item.value)}
        >
          {item.title}
        </Button>
      ))}
      <Button onClick={clearHandler} extraStyle="bg-red-800 text-white">
        Clear
      </Button>
      <Input
        onSubmit={onSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div>
        {total > 0 && (
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(parseInt(e.target.value));
              setSelectedPage(1);
            }}
            className="outline-none bg-transparent cursor-pointer"
          >
            {Array.from(Array(total).keys()).map((item) => (
              <option key={item} value={item + 1}>
                {item + 1}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
