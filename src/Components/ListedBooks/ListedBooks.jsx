import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStr } from "../../utility/addToDB";
import Content from "../Content/Content";

const ListedBooks = () => {
  const [readList, setreadList] = useState([]);
  const [wishList, setWishList] = useState([]);
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
  useEffect(() => {
    const localWishList = getLocalStr("wishList");
    const singlewish = localWishList.map((single) => JSON.parse(single));
    // console.log(localWishList, singlewish, allBooks);

    const wishList = allBooks.filter((book) =>
      singlewish.includes(book.bookId)
    );
    setWishList(wishList);
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-20">
        {" "}
        Listed books are here{" "}
      </h1>

      <div
        role="tablist"
        className="tabs border-none tabs-lifted font-bold text-xl"
      >
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label=" Read"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-l-0 rounded-box p-6 "
        >
          {readList.map((book) => (
            <Content key={book.bookId} book={book}></Content>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wish list"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-l-0 rounded-box p-6"
        >
          {wishList.map((book) => (
            <Content key={book.bookId} book={book}></Content>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
