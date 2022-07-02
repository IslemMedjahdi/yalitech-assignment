import React from "react";
import { TypeOrder } from "../../types/types";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

type Props = {
  orders: TypeOrder[];
  loading: boolean;
};

export default function Main({ orders, loading }: Props) {
  return (
    <div className="mt-10 flex-1 overflow-auto scrollbar-hide">
      {/*  */}
      <table className="table w-full table-fixed border-separate border-spacing-y-2">
        <TableHead />
        <TableBody orders={orders} loading={loading} />
      </table>
    </div>
  );
}
