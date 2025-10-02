import { Button } from '@/components/ui/button';
import { cartData } from '@/lib/data';
import Product from '@/lib/type';
import Image from 'next/image';
import React from 'react'

export const Cart = () => {
  return (
     <div className="flex flex-col w-[533px] px-[16px] py-[25px] border border-black-50 rounded-md">
          <div className="flex items-center justify-between ">
            <p className="text-2xl font-medium text-black">In Your Cart</p>
            <Button className="w-[121px] px-4 py-[10px]  bg-gray-50">
              <div className="flex items-center gap-[10px]">
                <p className="text-sm font-normal text-white-900">Add Cart</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M8.82243 4.19742V13.5308M4.15576 8.86409H13.4891"
                    stroke="#6B6B6B"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
          <div className="grid mt-[26px] gap-[13.56px] ">
            {cartData &&
              cartData.map((item: Product) => {
                return (
                  <div key={item.id} className="flex items-center gap-[15px]">
                    <div className="w-[124px] h-[124px] p-[7px] bg-black-50 rounded-md">
                      <div className="h-[110px] w-[110px] relative">
                        <Image src={item.image} alt="product" fill />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-lg font-normal text-black">
                        {item.name}
                      </p>
                      <p className="text-base font-normal text-white-900">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold text-orange-500 ">
                           {item.newPrice}
                        </p>
                        <p className="text-xs font-semibold text-white-800 line-through">
                          {item.prevPrice}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[18px]">
                          <p className="text-base font-normal text-white-900">
                            QTY :
                          </p>
                          <div className="flex items-center justify-between w-[108px] p-1 bg-black-50 rounded-full">
                            <div className="w-[19px] h-[18px] flex items-center justify-center bg-black  rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="2"
                                viewBox="0 0 11 2"
                                fill="none"
                              >
                                <path
                                  d="M0.791748 0.864075H9.63104"
                                  stroke="white"
                                  strokeWidth="0.777778"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <p className="text-base font-normal text-gray-500">
                              {item.quantity}
                            </p>
                            <div className="w-[19px] h-[18px] flex items-center justify-center bg-black  rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="2"
                                viewBox="0 0 11 2"
                                fill="none"
                              >
                                <path
                                  d="M0.791748 0.864075H9.63104"
                                  stroke="white"
                                  strokeWidth="0.777778"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M3.82251 6.86407H5.82251M5.82251 6.86407H21.8225M5.82251 6.86407V20.8641C5.82251 21.3945 6.03322 21.9032 6.4083 22.2783C6.78337 22.6534 7.29208 22.8641 7.82251 22.8641H17.8225C18.3529 22.8641 18.8617 22.6534 19.2367 22.2783C19.6118 21.9032 19.8225 21.3945 19.8225 20.8641V6.86407H5.82251ZM8.82251 6.86407V4.86407C8.82251 4.33364 9.03322 3.82493 9.4083 3.44986C9.78337 3.07479 10.2921 2.86407 10.8225 2.86407H14.8225C15.3529 2.86407 15.8617 3.07479 16.2367 3.44986C16.6118 3.82493 16.8225 4.33364 16.8225 4.86407V6.86407M10.8225 11.8641V17.8641M14.8225 11.8641V17.8641"
                            stroke="#6B6B6B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
  )
}

