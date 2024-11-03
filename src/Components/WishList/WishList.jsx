import { GrLocation } from "react-icons/gr";
import { LuUsers2 } from "react-icons/lu";
import { IoBookSharp } from "react-icons/io5";
const WishList = ({ book }) => {
  const {
    yearOfPublishing,
    publisher,
    tags,
    category,
    rating,
    totalPages,
    image,
    bookName,
    author,
  } = book;
  return (
    <div>
      <div className="hero w-full">
        <div className="hero-content max-w-full w-full flex-col gap-3 lg:flex-row  justify-start">
          <figure className=" bg-base-200 p-6 rounded-lg">
            <img src={image} className="w-28 rounded-lg shadow-2xl" />
          </figure>
          <div className=" flex-col flex gap-2">
            <h1 className="text-2xl font-bold">{bookName}</h1>
            <h5 className="font-medium text-black text-sm flex gap-2">
              <span>By :</span>
              <span>{author}</span>
            </h5>
            <h5 className="font-thin flex items-center gap-2">
              <span className="text-black text-sm font-semibold">Tag:</span>
              <div className="flex gap-2">
                <button className="btn bg-base-200 text-green-400 min-h-8 h-8 rounded-2xl">
                  #{tags[0]}
                </button>
                <button className="btn min-h-8 text-green-400 bg-base-200 h-8 rounded-2xl">
                  #{tags[1]}
                </button>
              </div>

              <span className="flex items-center ">
                <GrLocation className="mr-2 " />
                <p className="text-sm font-medium"> Year of Publishing :</p>
              </span>
              <span className="text-sm ">{yearOfPublishing}</span>
            </h5>
            <div className="flex items-center gap-2">
              <span>
                <LuUsers2 />
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <p className="text-sm font-semibold">Publisher :</p>
                  <p className=" text-sm font-semibold">{publisher}</p>
                </div>

                <span className="flex gap-1 items-center">
                  <IoBookSharp className="text-sm" />
                  <p className="text-sm font-semibold">pages </p>
                  <p className="text-sm font-semibold">{totalPages}</p>
                </span>
              </div>
            </div>
            <div className="border-t-2 p-4 mt-2 flex gap-8">
              <button className="btn min-h-9 h-9 rounded-2xl flex gap-1 text-[#277feb] bg-[#328effc1]">
                <span>Category:</span>
                <span>{category}</span>
              </button>
              <button className="btn min-h-9 h-9 rounded-2xl flex gap-1 text-[#e69823] bg-[#ffad33da]">
                <span>Rating:</span>
                <span>{rating}</span>
              </button>
              <button className="btn min-h-9 h-9 bg-[#23BE0A] text-white rounded-2xl">
                <span>View Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
