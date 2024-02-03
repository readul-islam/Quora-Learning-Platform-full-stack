import { isEmpty } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
const Cart = () => {
  const { cartItems, cartTotalAmount, cartTotalQuantity, error } = useSelector(
    (state) => state.cart,
  );

  console.log(cartItems);

  return (
    <>
      <div className="z-50  pr-4">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <label
          htmlFor="my-drawer-4"
          tabIndex="0"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator z-[-10]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
            <span className="badge badge-sm text-black  indicator-item">
              {cartTotalQuantity}
            </span>
          </div>
        </label>

        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu pt-3 space-y-2  max-w-2xl   min-h-full bg-base-200 text-base-content ">
            {/* Sidebar content here */}
            {isEmpty(cartItems) ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="md:h-[78vh] overflow-scroll space-y-2 pl-4">
                {cartItems.map((item, index) => (
                  <>
                    <CartItem key={index} item={item} />
                  </>
                ))}
              </div>
            )}

            <div class="  border-t border-b mx-4">
              <div class="flex items-center justify-between">
                <p class="text-sm text-gray-400">Subtotal</p>
                <p class="text-lg font-semibold text-gray-900">$399.00</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm text-gray-400">Shipping</p>
                <p class="text-lg font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between  mx-4">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p class="text-2xl font-semibold text-gray-900">
                <span class="text-xs font-normal text-gray-400">USD</span>{' '}
                408.00
              </p>
            </div>

            <div class="mt-4 text-center mx-4">
              <button
                type="button"
                class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-1 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
