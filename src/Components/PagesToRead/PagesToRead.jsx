import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { getLocalStr } from "../../utility/addToDB";
import { useLoaderData } from "react-router-dom";
const PagesToRead = () => {
  const [readList, setreadList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const localData = getLocalStr("Read");

    const singleLocalData = localData.map((book) => JSON.parse(book));
    // console.log(localData, singleLocalData, allBooks);

    const readBookList = allBooks.filter((book) =>
      singleLocalData.includes(book.bookId)
    );
    setreadList(readBookList);
    console.log(readList);
  }, []);
  console.log(readList);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-8">Pages to Read</h1>
      <BarChart width={730} height={250} data={""}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="bookName" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default PagesToRead;
