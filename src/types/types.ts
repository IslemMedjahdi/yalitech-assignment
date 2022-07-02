export type TypeState = {
  confirmed: number;
  pending: number;
  cancelled: number;
};

export type TypeSearch = "full_name" | "phone" | "tracking_id";
export type TypeStatus = "pending" | "confirmed" | "cancelled" | "";
export type TypePagination = {
  total: number;
  pages: number;
};

export type TypeOrder = {
  _id: string;
  tracking_id: string;
  last_status: TypeStatus;
  products: { name: string }[];
  client: { full_name: string; phones: string[] };
  destination: {
    city_name: string;
    state_name: string;
  };
};
