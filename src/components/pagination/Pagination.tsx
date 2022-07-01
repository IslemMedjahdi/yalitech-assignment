import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
type Props = {
  pages: number;
  selectedPage: number;
  setSelectedPage: (n: number) => void;
};

export default function Pagination({
  pages,
  selectedPage,
  setSelectedPage,
}: Props) {
  const [paginationBar, setPaginationBar] = useState<number[]>([]);
  useEffect(() => {
    const paginationBar = [];
    for (
      let i = selectedPage;
      i < selectedPage + (pages >= 4 ? 4 : pages);
      i++
    ) {
      if (i <= pages) {
        paginationBar.push(i);
      } else {
        paginationBar.unshift(selectedPage - (i - pages));
      }
    }
    setPaginationBar(paginationBar);
  }, [selectedPage, pages]);

  return (
    <div className="flex items-center space-x-2 justify-center py-10">
      <button
        onClick={() =>
          setSelectedPage(selectedPage > 1 ? selectedPage - 1 : selectedPage)
        }
        className="w-11 rounded-full bg-slate-100 h-11 flex items-center justify-center"
      >
        <FaChevronLeft />
      </button>
      {paginationBar.map((item) => (
        <Button
          number={item}
          selected={selectedPage === item}
          key={item}
          onClick={() => setSelectedPage(item)}
        />
      ))}
      <button
        onClick={() =>
          setSelectedPage(
            selectedPage < pages ? selectedPage + 1 : selectedPage
          )
        }
        className="w-11 rounded-full bg-slate-100 h-11 flex items-center justify-center"
      >
        <FaChevronRight />
      </button>
      <select
        value={selectedPage}
        onChange={(e) => {
          setSelectedPage(parseInt(e.target.value));
        }}
        className="outline-none bg-slate-100 h-11 w-11 rounded-full flex items-center justify-center cursor-pointer"
      >
        {Array.from(Array(pages).keys()).map((item) => (
          <option key={item} value={item + 1}>
            {item + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
