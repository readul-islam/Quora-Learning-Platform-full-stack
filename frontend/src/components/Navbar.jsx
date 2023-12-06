import React from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';

import PrimaryBtn from './PrimaryBtn';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/authenticationSlice';

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authentication);

  const logOutHandler = () => {
    dispatch(logOut());
    navigate('/login');
  };
  const menus = (
    <>
      <li className="md:mx-1 text-base">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="md:mx-1 text-base">
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li className="md:mx-1 text-base">
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li className="md:mx-1 text-base">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="  bg-gradient-to-tr from-neutral to-accent ">
      <div className="navbar  max-w-7xl xl:max-w-full px-0 xl:px-10 mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>
          <Link
            to="/home"
            className=" normal-case text-xl md:text-3xl font-bold"
          >
            Qu<span className="text-primary">ora</span>.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menus}</ul>
        </div>
        <div className="navbar-end ">
          {!isLoggedIn ? (
            <Link to="/register">
              <PrimaryBtn style="text-white ">Sign UP</PrimaryBtn>{' '}
            </Link>
          ) : (
            <>
              <div className="flex items-center ">
                <div className="dropdown dropdown-end pr-2">
                  <label tabindex="0" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabindex="0"
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end z-10">
                  <label
                    tabindex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                  </label>
                  <ul
                    tabindex="0"
                    className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li onClick={logOutHandler}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
