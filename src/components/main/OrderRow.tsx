import React from "react";
import { TypeStatus } from "../../types/types";
import { IoCopy } from "react-icons/io5";
import { ImEyePlus } from "react-icons/im";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
type Props = {
  tracking_id: string;
  last_status: TypeStatus;
  products: { name: string }[];
  client: { full_name: string; phones: string[] };
  destination: {
    city_name: string;
    state_name: string;
  };
};

export default function OrderRow({
  tracking_id,
  last_status,
  products,
  client,
  destination,
}: Props) {
  const copyHandler = () => {
    navigator.clipboard.writeText(tracking_id);
  };

  return (
    <tr className="cursor-pointer transition hover:bg-slate-50">
      <td colSpan={2} className="px-6 py-2">
        <p className="flex items-center justify-center space-x-2 rounded-full bg-slate-100 px-2 py-1 text-center">
          <span className="text-slate-600">{tracking_id}</span>
          <span onClick={copyHandler}>
            <IoCopy className="text-slate-400 transition duration-200 hover:text-slate-300" />
          </span>
        </p>
      </td>
      <td className="px-6 py-2 text-center ">
        <p
          className={`rounded-full ${
            last_status === "pending"
              ? "bg-yellow-100"
              : last_status === "confirmed"
              ? "bg-green-100"
              : "bg-red-100"
          } font-semibold  ${
            last_status === "pending"
              ? "text-yellow-900"
              : last_status === "confirmed"
              ? "text-green-900"
              : "text-red-900"
          }`}
        >
          {last_status.toUpperCase()}
        </p>
      </td>
      <td
        colSpan={2}
        className="px-6 py-2 text-center font-semibold text-slate-900"
      >
        {client.full_name}
      </td>
      <td className="px-6 py-2 text-center">
        <p className="flex items-center justify-between">
          <span className="text-slate-500 ">{products[0].name}</span>
          {products.length > 1 && (
            <span className="w-6 rounded-full bg-slate-100 ">
              +{products.length - 1}
            </span>
          )}
        </p>
      </td>
      <td className="px-6 py-2 text-center text-slate-800   ">
        <p>{destination.city_name}</p>
        <p>{destination.state_name}</p>
      </td>
      <td className="px-6 py-2 text-center">
        <span className="flex items-center justify-center space-x-2">
          <ImEyePlus className="text-xl text-slate-400 transition duration-200 hover:text-slate-300" />
          <MdModeEditOutline className="text-xl text-slate-400 transition duration-200 hover:text-slate-300" />
          <AiFillDelete className="text-xl text-red-500 transition duration-200 hover:text-red-400" />
        </span>
      </td>
    </tr>
  );
}
