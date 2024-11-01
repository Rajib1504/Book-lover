import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  //   console.log(typeof id);
  const data = useLoaderData();
  //   console.log(data);
  const book = data.find((book) => book.bookId === id);
  console.log(book);
  const { image, author, bookName, rating, category, tags, review } = book;
  return (
    <div>
      {/* <h1 className="text-2xl font-bold">show the book details here</h1> */}
      <div className="hero  rounded-2xl border-2 border-blue-400  mb-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center sm:text-left">
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

            <button className="btn btn-outline btn-success">Get Started</button>
          </div>
          <div className="bg-base-200  rounded-xl  p-12">
            <img className="w-[80%] rounded-xl mx-auto" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
