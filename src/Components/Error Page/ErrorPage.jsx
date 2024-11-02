import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Page is not found</h1>
      <p className="tect-xl text-center">status: 404 </p>
      <button className="bg-green-500 rounded-xl btn flex justify-center mx-auto ">
        <Link to={"/"}>Go back</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
