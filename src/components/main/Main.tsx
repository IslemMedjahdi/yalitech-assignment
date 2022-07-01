import React from "react";
import { TypeOrder } from "../../types/types";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

type Props = {
  orders: TypeOrder[];
};

export default function Main({ orders }: Props) {
  console.log(orders);
  return (
    <div className="py-4 h-[60vh]">
      {/*  */}
      {/* <table>
        <TableHead />
        <TableBody />
      </table> */}
    </div>
  );
}
