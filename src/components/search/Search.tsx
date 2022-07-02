import React from "react";
import { TypeSearch } from "../../types/types";
import Button from "./Button";
import Input from "./Input";

type Props = {
  setSearchValue: (s: string) => void;
  searchValue: string;
  searchBy: TypeSearch;
  setSearchBy: (s: TypeSearch) => void;
  total: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  clearHandler: () => void;
  pageSize: number;
  setPageSize: (n: number) => void;
  setSelectedPage: (n: number) => void;
};

const searchByTypes: { title: string; value: TypeSearch }[] = [
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
  total,
  pageSize,
  setSearchBy,
  onSubmit,
  clearHandler,
  setPageSize,
  setSelectedPage,
}: Props) {
  return (
    <div className="flex items-center space-x-4 rounded-3xl bg-slate-100 py-2 px-4">
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
            value={pageSize > total ? total : pageSize}
            onChange={(e) => {
              setPageSize(parseInt(e.target.value));
              setSelectedPage(1);
            }}
            className="cursor-pointer bg-transparent outline-none"
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
