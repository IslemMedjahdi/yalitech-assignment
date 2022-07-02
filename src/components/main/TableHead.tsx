import React from "react";

export default function TableHead() {
  return (
    <thead className="sticky top-0">
      <tr className=" text-slate-800">
        <th
          colSpan={2}
          className="rounded-l-lg bg-slate-100 px-6 py-2 text-center font-medium "
        >
          Tracking
        </th>
        <th className=" bg-slate-100 px-6  py-2 text-center font-medium">
          Status
        </th>
        <th
          colSpan={2}
          className="bg-slate-100 px-6  py-2 text-center  font-medium"
        >
          Customer
        </th>
        <th className=" bg-slate-100 px-6 py-2  text-center font-medium">
          Products
        </th>
        <th className=" bg-slate-100 px-6 py-2  text-center font-medium">
          Adress
        </th>
        <th className=" rounded-r-lg bg-slate-100 px-6 py-2  text-center font-medium">
          Actions
        </th>
      </tr>
    </thead>
  );
}
