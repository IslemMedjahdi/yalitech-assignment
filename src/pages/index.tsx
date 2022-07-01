import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Pagination from "../components/pagination/Pagination";
import Search from "../components/search/Search";
import { TypeOrder, TypePagination } from "../types/types";

const Home: NextPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("pending");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBy, setSearchBy] = useState<string>("full_name");
  const [pageSize, setPageSize] = useState<number>(3);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [orders, setOrders] = useState<TypeOrder[]>([]);
  const [pagination, setPagination] = useState<TypePagination>({
    pages: 0,
    total: 0,
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getOrders();
  };
  const clearHandler = () => {
    setSearchValue("");
    setSearchBy("full_name");
    setSelectedPage(1);
    getOrders();
  };
  const getOrders = async () => {
    const url = `https://call-center-yalitech.herokuapp.com/orders?count=${pageSize}&page=${selectedPage}&status=${selectedStatus}${
      searchValue ? "&" + searchBy + "=" + searchValue : ""
    }`;
    console.log(url);
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
    });
    setPagination(data.pagination);
    setOrders(data.items);
  };
  useEffect(() => {
    getOrders();
  }, [pageSize, selectedStatus, selectedPage]);
  return (
    <div className="h-screen px-4 py-10 font-main">
      <Header />
      <Cards
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <Search
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        total={pagination.total}
        pageSize={pageSize}
        onSubmit={onSubmit}
        clearHandler={clearHandler}
        setPageSize={setPageSize}
        setSelectedPage={setSelectedPage}
      />
      <Main orders={orders} />
      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        pages={pagination.pages}
      />
    </div>
  );
};

export default Home;
