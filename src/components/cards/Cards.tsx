import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { TypeState, TypeStatus } from "../../types/types";

type Props = {
  selectedStatus: TypeStatus;
  setSelectedStatus: (s: TypeStatus) => void;
  setSelectedPage: (n: number) => void;
};

const url = "https://call-center-yalitech.herokuapp.com/orders/stats";

export default React.memo(function Cards({
  selectedStatus,
  setSelectedStatus,
  setSelectedPage,
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
    <div className="flex items-center space-x-2 px-2 py-6">
      {Object.entries(Status).map((state, index) => (
        <Card
          key={index}
          clickHandler={() => {
            selectedStatus === state[0]
              ? setSelectedStatus("")
              : setSelectedStatus(state[0] as TypeStatus);
            setSelectedPage(1);
          }}
          title={state[0]}
          amount={state[1]}
          isSelected={selectedStatus === state[0]}
        />
      ))}
    </div>
  );
});
