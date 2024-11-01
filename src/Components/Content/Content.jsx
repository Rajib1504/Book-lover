import { CiStar } from "react-icons/ci";
const Content = () => {
  return (
    <div>
      {/* <h1 className="text-2xl font-bold text-center">I'm the content page</h1> */}
      <div className="card bg-base-100 max-w-96 p-4 shadow-xl">
        <div className=" rounded-2xl  border-2 border-red-400 gap-2">
          <figure className="border-2 border-red-400 p-8 bg-base-200">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body border-2 border-red-400 ">
            <div className="card-actions justify-start mb-1">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <h2 className="card-title font-bold">
              Shoes!
              <div className="badge badge-secondary bg-transparent text-black font-semibold">
                NEW
              </div>
            </h2>
            <div className="flex items-center gap-2">
              <h5 className="text-sm font-semibold text-gray-400">By :</h5>
              <h5 className="text-sm font-semibold text-gray-400">
                Rabindranath
              </h5>
            </div>
            <hr className="border-dashed bg-gray-400" />
            <div className="flex justify-between items-center">
              <h5 className="text-sm font-semibold text-gray-400">Fiction :</h5>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-400">5.00</span>
                <h5 className="text-sm font-semibold text-gray-400">
                  <CiStar />{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
