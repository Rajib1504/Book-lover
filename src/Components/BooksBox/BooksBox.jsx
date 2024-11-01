import { useEffect, useState } from "react";
import Content from "../Content/Content";

const BooksBox = () => {
  const [books, setBooks] = useState([]);
  //   console.log(books);

  useEffect(() => {
    fetch("./book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center ">Books</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  w-full justify-center  gap-2">
        {books.map((book) => (
          <Content key={book.bookId} book={book}></Content>
        ))}
      </div>
    </div>
  );
};

export default BooksBox;
