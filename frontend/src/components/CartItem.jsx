import React from 'react'
import { MdDelete } from "react-icons/md";
const CartItem = ({item}) => {
    console.log(item)
  return (
    <>
    
    <div class="flex flex-col space-y-3 p-3 rounded bg-white text-left sm:flex-row sm:space-x-5 sm:space-y-0 border">
              <div class="shrink-0">
                <img
                src={item.thumbnail}
                  class="h-24 w-24 max-w-full rounded-lg object-cover"
                  alt=""
                />
              </div>

              <div
                class="relative flex flex-1 
           flex-col justify-between"
              >
                <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                  <div class="pr-8 sm:pr-5">
                    <p class="text-base font-semibold text-gray-900">
                     {item.name}
                    </p>
                    <p class="mx-0 mt-1 mb-0 text-sm text-gray-600">
                    Author: {item.instructor}
                    </p>
                    <p class="mx-0 mt-1 mb-0 text-sm text-gray-600">
                    Enrollment: {item.enrollmentStatus}
                    </p>
                  </div>

                  <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                    <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                      $259.00
                    </p>

                    <div class="sm:order-1">
                      <div class="mx-auto flex h-8 items-stretch text-gray-600">
                        <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                          -
                        </button>
                        <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                          1
                        </div>
                        <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">

                    <MdDelete size={24} className='cursor-pointer text-gray-600'/>
                </div>
              </div>
            </div>
    
    </>
  )
}

export default CartItem