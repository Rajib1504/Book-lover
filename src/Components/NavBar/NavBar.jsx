import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li className="mx-1">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="mx-1">
        <NavLink to={"/list"}>Listed Books</NavLink>
      </li>
      <li className="mx-1">
        <NavLink to={"/read"}>Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content hover:bg-transparent hover:border-2 hover:border-green-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" font-bold text-2xl">Book Lover</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-2">
        <ul className="menu menu-horizontal px-2 ">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
