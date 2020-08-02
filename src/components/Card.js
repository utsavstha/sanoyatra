import React from 'react';
import mustang from '../assets/mustang.jpg'
const Card = ({ destination }) => {
    return (
        <div class="container max-w-sm mx-auto transition duration-100 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
            <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={mustang} alt="blog"></img>
                <div class="p-6">
                    <div className="flex justify-between">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">TREKKING</h2>
                        <h2 class="self-end tracking-widest text-xs title-font font-medium text-gray-500 mb-1">3 days</h2>
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Mustang</h1>
                    <div class="flex items-center flex-wrap ">
                        <button class="text-red-600 inline-flex items-center md:mb-2 lg:mb-0 cursor-default hover:text-red-500">BOOK NOW
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <span class="text-gray-600 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
              </span>
                        <span class="text-gray-600 inline-flex items-center leading-none text-sm pl-3">
                            <i class="fa fa-star mr-1 text-orange-400" aria-hidden="true"></i>5
                        </span>

                    </div>
                </div>
            </div>

        </div>

    );



}

export default Card;