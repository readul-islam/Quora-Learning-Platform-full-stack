import React from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/authenticationSlice';
import PrimaryBtn from './PrimaryBtn';
import Cart from './Cart';

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    authentication: { isLoggedIn },
    cart: { cartItems, cartTotalAmount, cartTotalQuantity },
  } = useSelector((state) => state);

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
    <div className=" sticky top-0 z-10  w-full  bg-gradient-to-tr from-neutral to-accent ">
      <div className="navbar max-w-7xl  mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
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
          {!isLoggedIn &&<Cart />}
          {!isLoggedIn ? (
            <Link to="/register">
              <PrimaryBtn style="text-white ">Sign UP</PrimaryBtn>{' '}
            </Link>
          ) : (
            <>
              <div className="flex items-center ">
                <Cart />
                <div className="dropdown dropdown-end z-10">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <Link to="/profile">
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    
                    </Link>
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
