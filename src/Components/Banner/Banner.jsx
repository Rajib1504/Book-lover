import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner img.png";
const Banner = () => {
  return (
    <div className="hero  rounded-2xl bg-base-200 mb-5">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img className="w-[20%]" src={bannerImg} />
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-6">
            Discover a curated collection of books that will revitalize your
            bookshelf with fresh insights and compelling narratives. From
            timeless classics to modern must-reads, these titles offer stories
            that captivate and inspire. Whether you're in search of adventure,
            wisdom, or relaxation, these books are sure to elevate your reading
            experience.
          </p>
          <button className="btn btn-outline btn-success">
            <Link to={"/list"}>Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
