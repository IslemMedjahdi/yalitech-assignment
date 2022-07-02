import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
type Props = {
  setSearchValue: (s: string) => void;
  searchValue: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Input({
  setSearchValue,
  searchValue,
  onSubmit,
}: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const deleteSearchValue = () => {
    setSearchValue("");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex grow items-center space-x-2 rounded-3xl bg-white py-2 px-4"
    >
      <input
        onChange={onChange}
        placeholder="Search"
        value={searchValue}
        className="grow bg-transparent text-gray-900 outline-none placeholder:text-slate-400"
      />
      {searchValue && (
        <IoCloseOutline
          onClick={deleteSearchValue}
          className="cursor-pointer text-2xl text-slate-400"
        />
      )}
      <button type="submit">
        <AiOutlineSearch className="text-2xl text-slate-400" />
      </button>
    </form>
  );
}
