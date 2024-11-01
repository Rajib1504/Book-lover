import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Content = ({ book }) => {
  //   console.log(book);
  const { bookId, image, author, bookName, rating, category, tags } = book;
  return (
    <Link to={`book/${bookId}`}>
      <div>
        <div className="card bg-base-100 max-w-96 p-4 shadow-xl ">
          <div className=" rounded-2xl  gap-2">
            <figure className="border-2 rounded-2xl p-8 bg-base-200">
              <img className="rounded-xl h-80" src={image} alt="Shoes" />
            </figure>
            <div className="card-body  box-border pb-1 rounded-2xl ">
              <div className="card-actions justify-start mb-1">
                <div className="badge badge-outline bg-base-100 text-green-600">
                  {tags[0]}
                </div>
                <div className="badge badge-outline bg-base-100 text-green-600">
                  {tags[1]}
                </div>
              </div>
              <h2 className="card-title font-bold mb-0">
                {bookName}
                <div className="badge badge-secondary bg-transparent text-black font-semibold">
                  NEW
                </div>
              </h2>
              <div className="flex items-center flex-grow gap-2">
                <h5 className="text-sm font-semibold text-gray-400">By :</h5>
                <h5 className="text-sm font-semibold text-gray-400">
                  {author}
                </h5>
              </div>
              <hr className="border-dashed bg-gray-400 mb-2" />
              <div className="flex justify-between items-center">
                <h5 className="text-sm font-semibold text-gray-400">
                  {category}:
                </h5>
                <div className="flex items-center gap-1 justify-between mt-2">
                  <span className="font-semibold text-gray-400">{rating}</span>
                  <h5 className="text-sm font-semibold text-gray-400">
                    <CiStar />{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Content;
