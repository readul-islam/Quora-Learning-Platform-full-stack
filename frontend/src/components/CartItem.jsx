import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeToCart } from '../store/cartSlice';
const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const itemRemoveHandler = (item)=>{
        dispatch(removeToCart(item))
    }
  return (
    <>
    
    <div className="flex flex-col space-y-3 p-3 rounded bg-white text-left sm:flex-row sm:space-x-5 sm:space-y-0 border">
              <div className="shrink-0">
                <img
                src={item.thumbnail}
                  className="h-24 w-24 max-w-full rounded-lg object-cover"
                  alt=""
                />
              </div>

              <div
                className="relative flex flex-1 
           flex-col justify-between"
              >
                <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                  <div className="pr-8 sm:pr-5">
                    <p className="text-base font-semibold text-gray-900">
                     {item.name}
                    </p>
                    <p className="mx-0 mt-1 mb-0 text-sm text-gray-600">
                    Author: {item.instructor}
                    </p>
                    <p className="mx-0 mt-1 mb-0 text-sm text-gray-600">
                    Enrollment: {item.enrollmentStatus}
                    </p>
                  </div>

                  <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                    <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                      ${item.price}
                    </p>

                    <div className="sm:order-1">
                      <div className="mx-auto flex h-8 items-stretch text-gray-600">
                        <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                          -
                        </button>
                        <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                          1
                        </div>
                        <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">

                    <MdDelete onClick={()=>itemRemoveHandler(item)} size={24} className='cursor-pointer text-gray-600'/>
                </div>
              </div>
            </div>
    
    </>
  )
}

export default CartItem