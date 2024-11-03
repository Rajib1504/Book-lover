import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { getLocalStr } from "../../utility/addToDB";
import Content from "../Content/Content";
import ReadBook from "../ReadBook/ReadBook";
import WishList from "../WishList/WishList";

const ListedBooks = () => {
  const [readList, setreadList] = useState([]);
  // console.log(readList);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
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
  const handelShort = (selectShort) => {
    setSort(selectShort);
    if (selectShort === "Rating") {
      const shortReadList = [...readList].sort((a, b) => b.rating - a.rating);
      setreadList(shortReadList);
      return;
    } else {
      console.log([]);
    }
    if (selectShort === "Pages") {
      const sortPageList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setreadList(sortPageList);
    } else {
      console.log([]);
    }
  };
  return (
    <div className="text-center mb-20">
      <div>
        <h1 className="text-2xl font-bold text-center mb-20">
          {" "}
          Listed books are here{" "}
        </h1>
        <details className="dropdown">
          <summary className="btn m-1 bg-green-400 text-white">
            <div className="flex justify-between items-center">
              <span>{sort ? `Sort By : ${sort}` : "Sort By"} </span>
              <span>
                <RiArrowDropDownLine className="text-xl" />
              </span>
            </div>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handelShort("Rating")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handelShort("Pages")}>
              <a>Number of pages</a>
            </li>
          </ul>
        </details>
      </div>

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
            <ReadBook key={book.bookId} book={book}></ReadBook>
            // <Content key={book.bookId} book={book}></Content>
          ))}
        </div>
        {/* Wish list  */}
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
            <WishList key={book.bookId} book={book}></WishList>
            // <Content key={book.bookId} book={book}></Content>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
