import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Pagination from "../components/pagination/Pagination";
import Search from "../components/search/Search";
import {
  TypeOrder,
  TypePagination,
  TypeSearch,
  TypeStatus,
} from "../types/types";

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<TypeStatus>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBy, setSearchBy] = useState<TypeSearch>("full_name");
  const [pageSize, setPageSize] = useState<number>(3);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [orders, setOrders] = useState<TypeOrder[]>([]);
  const [pagination, setPagination] = useState<TypePagination>({
    pages: 0,
    total: 0,
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getOrders(pageSize, selectedPage, selectedStatus, searchBy, searchValue);
  };
  const clearHandler = () => {
    setSearchValue("");
    setSearchBy("full_name");
    setSelectedStatus("");
    setSelectedPage(1);
    getOrders(pageSize, 1, "", "full_name", "");
  };
  const getOrders = async (
    pageSize: number,
    selectedPage: number,
    selectedStatus: TypeStatus,
    searchBy: TypeSearch,
    searchValue: string
  ) => {
    setLoading(true);
    const url = `https://call-center-yalitech.herokuapp.com/orders?count=${pageSize}&page=${selectedPage}${
      selectedStatus ? "&" + "last_status=" + selectedStatus : ""
    }${searchValue ? "&" + searchBy + "=" + searchValue.trim() : ""}`;
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
      });
      setPagination(data.pagination);
      setOrders(data.items);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getOrders(pageSize, selectedPage, selectedStatus, searchBy, searchValue);
  }, [pageSize, selectedStatus, selectedPage]);
  return (
    <div className="h-screen px-4 py-10 font-main">
      <Head>
        <title>Call center</title>
      </Head>
      <Header />
      <Cards
        setSelectedPage={setSelectedPage}
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
      <Main orders={orders} loading={loading} />
      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        pages={pagination.pages}
      />
    </div>
  );
};

export default Home;
