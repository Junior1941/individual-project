import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function NavBar() {
  const { logout } = useAuth();

  function hdlLogout() {
    try {
      logout();
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <div className="navbar fixed top-0 w-full bg-white  pl-5 pr-8  ">
        <div className="flex items-start mt-4 navbar-start ">
          <img src="/Logo.png" alt="" className="w-40 h-36 " />
        </div>
        <div className=" navbar-end">
          <div className="flex-none ml-5 ">
            <button className="btn btn-ghost btn-circle ">
              <div className="indicator ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end ml-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <Link to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end ml-5 ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className=" z-[1] p-4 shadow menu menu-sm dropdown-content  rounded-box w-[100px]"
          ><Link to="/profile" className="ml-[11px]">
          Profile
        </Link>
            <li>
              <p onClick={hdlLogout}>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
