import { useLoaderData, useParams } from "react-router-dom";
import { setData } from "../../utility/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  //   console.log(typeof id);
  const data = useLoaderData();
  //   console.log(data);
  const book = data.find((book) => book.bookId === id);
  console.log(book);
  const {
    image,
    author,
    bookName,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    tags,
    review,
  } = book;

  // const handelMarkAsRead = () => {
  //   /**
  //    * 1.understand what to store: book id
  //    * 2. where to store:database
  //    * 3.array,list,collection,
  //    * 4.check if the book is already there if yes then return dont save if no then add there.
  //    */
  // };
  return (
    <div className="">
      <div className="hero rounded-2xl mb-5">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center sm:text-left w-full md:w-[50%] ">
            <h1 className="text-5xl font-bold mb-2">{bookName}</h1>
            <h5 className="flex text-stone-500 font-semibold gap-2 text-xl ">
              <span>By : </span> <span>{author}</span>
            </h5>
            <p className="my-3 p-2 border-y-2 border-dashed font-semibold">
              {category}
            </p>
            <div className="mb-4">
              <span className="font-semibold text-black">Review :</span>
              <span className="text-gray-500">{review}</span>
            </div>
            <div className="flex items-center gap-4 border-b-2 border-dashed pb-4 mb-4">
              <span className="font-bold">Tag</span>
              <div className="flex items-center gap-6">
                <div className="badge badge-outline bg-base-100 text-green-600">
                  {tags[0]}
                </div>
                <div className="badge badge-outline bg-base-100 text-green-600">
                  {tags[1]}
                </div>
              </div>
            </div>
            <div className="flex gap-4 mb-3">
              <div className=" ">
                <div className="my-2 font-semibold ">
                  <h6 className="text-gray-500">Number of pages :</h6>
                </div>
                <div className="my-2 font-semibold ">
                  <h6 className="text-gray-500">Publisher :</h6>
                </div>
                <div className="my-2 font-semibold ">
                  <h6 className="text-gray-500">Year of Publishing :</h6>
                </div>
                <div className="my-2 font-semibold ">
                  <h6 className="text-gray-500">Rating :</h6>
                </div>
              </div>
              <div className="">
                <h3 className="font-bold my-2">{totalPages}</h3>
                <h3 className="font-bold my-2">{publisher}</h3>
                <h3 className="font-bold my-2">{yearOfPublishing}</h3>
                <h3 className="font-bold my-2">{rating}</h3>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => {
                  setData("Read", bookId);
                }}
                className="btn btn-outline btn-primary font-bold"
              >
                Read
              </button>
              <button
                onClick={() => {
                  setData("wishList", bookId);
                }}
                className="btn btn-outline btn-primary font-bold  "
              >
                Wishlist
              </button>
            </div>
          </div>
          <div className="bg-base-200  rounded-xl w-full md:w-[50%] p-12">
            <img className="w-[80%] rounded-xl mx-auto" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
