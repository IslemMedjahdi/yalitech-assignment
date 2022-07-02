import React from "react";
import { TypeOrder } from "../../types/types";
import OrderRow from "./OrderRow";

type Props = {
  orders: TypeOrder[];
  loading: boolean;
};

export default function TableBody({ orders, loading }: Props) {
  return (
    <tbody>
      {loading
        ? [1, 2, 3, 4].map((item) => (
            <tr key={item} className="animate-pulse bg-slate-100">
              <td className="py-6" colSpan={8}></td>
            </tr>
          ))
        : orders.map((item) => <OrderRow key={item._id} {...item} />)}
    </tbody>
  );
}
