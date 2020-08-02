import React from 'react';

const Offer = () => {
    return (
        <div className="bg-white w-full">
            <div class="flex border-2 rounded-lg border-gray-200 p-8 sm:flex-row flex-col bg-white">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                </div>
                <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Your Travel Video</h2>
                    <p class="leading-relaxed text-base">We will capture all your precious moments.</p>
                </div>
            </div>
        </div>
    );
}

export default Offer;