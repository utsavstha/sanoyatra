import React from 'react';

const Selector = ({ title, options }) => {
    return (
        <div className="self-center px-4 py-2">
            <p className="text-sm text-gray-800 text-leading">{title}</p>
            <div class="relative">
                <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-1 px-1 pr-8 mt-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm" id="grid-state">
                    {options.map((item) => <option className="text-s bg-red-300">{item}</option>)}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>
    );
}

export default Selector;