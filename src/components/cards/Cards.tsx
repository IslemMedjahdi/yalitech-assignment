import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { TypeState } from "../../types/types";

type Props = {
  selectedStatus: string;
  setSelectedStatus: (s: string) => void;
};

const url = "https://call-center-yalitech.herokuapp.com/orders/stats";

export default React.memo(function Cards({
  selectedStatus,
  setSelectedStatus,
}: Props) {
  const [Status, setStatus] = useState<TypeState>({
    pending: 0,
    confirmed: 0,
    cancelled: 0,
  });
  const getStatus = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
      });
      setStatus(data[0]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getStatus();
  }, []);
  return (
    <div className="px-2 py-10 flex items-center space-x-2">
      {Object.entries(Status).map((state, index) => (
        <Card
          key={index}
          clickHandler={() => {
            setSelectedStatus(state[0]);
          }}
          title={state[0]}
          amount={state[1]}
          isSelected={selectedStatus === state[0]}
        />
      ))}
    </div>
  );
});
