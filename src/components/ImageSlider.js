import React from 'react';
import mainImage from '../assets/image-main.jpg'
import Selector from './Selector';
const ImageSlider = () => {
    return (

        <div className="md:flex bg-center" style={{ backgroundImage: `url(${mainImage})`, backgroundRepeat: "no-repeat", height: "30rem" }}>
            {/* <p className="font-serif text-white text-2xl object-center">Dare to live the life<br></br>You've always wanted.</p> */}
            <div className="self-center flex md:visible invisible bg-white shadow-xl mx-auto rounded-lg h-24 md:w-88">
                <Selector title="TRIP TYPE" options={["HIKING", "TREKKING"]} />
                <Selector title="LOCATION" options={["KATHMANDU", "LANGTANG"]} />
                <Selector title="NUMBER OF PEOPLE" options={["1", "2", "3"]} />
                <Selector title="DATE" options={["2020/10/20", "2", "3"]} />

                <div className="flex bg-red-600 text-white rounded-r-md hover:bg-red-500">
                    <p className="self-center pl-6">Book<br></br> Now</p>
                    <svg class="self-center w-6 h-6 ml-2 mr-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </div>
            </div>

            <div className="self-center md:hidden visible justify-center flex-col sm:mx-auto bg-white shadow-xl rounded-lg mx-auto w-1/2">
                <Selector title="TRIP TYPE" options={["HIKING", "TREKKING"]} />
                <Selector title="LOCATION" options={["KATHMANDU", "LANGTANG"]} />
                <Selector title="NUMBER OF PEOPLE" options={["1", "2", "3"]} />
                <Selector title="DATE" options={["2020/10/20", "2", "3"]} />

                <div className="bg-red-600 text-white rounded-bl-md rounded-br-md mt-4 hover:bg-red-500">
                    <p className="self-center py-4 text-center">Book Now</p>

                </div>
            </div>

        </div>

    );
}

export default ImageSlider;