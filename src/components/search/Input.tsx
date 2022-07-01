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
      className="grow flex bg-white py-2 px-4 rounded-3xl items-center space-x-2"
    >
      <input
        onChange={onChange}
        placeholder="Search"
        value={searchValue}
        className="grow outline-none bg-transparent placeholder:text-slate-400 text-gray-900"
      />
      {searchValue && (
        <IoCloseOutline
          onClick={deleteSearchValue}
          className="text-slate-400 text-2xl cursor-pointer"
        />
      )}
      <button type="submit">
        <AiOutlineSearch className="text-slate-400 text-2xl" />
      </button>
    </form>
  );
}
