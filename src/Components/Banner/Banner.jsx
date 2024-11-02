import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner img.png";
const Banner = () => {
  return (
    <div className="hero  rounded-2xl bg-base-200 mb-5">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img className="w-[20%]" src={bannerImg} />
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
