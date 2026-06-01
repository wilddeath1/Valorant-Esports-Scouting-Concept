import React from 'react';
import { ArrowUpRight } from "lucide-react";

const Arrow = () => {
    return (
        <>
            <a href='https://www.vlr.gg/stats' target="_blank" rel="noopener noreferrer" className=' inline-block group '>
                <ArrowUpRight size={96} className="block -mb-4 -ml-5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 " />
                <h1 className='text-xs  uppercase  tracking-[0.18em]  font-medium  text-gray-600 transition-colors duration-300 group-hover:text-black'>Explore Players</h1>
            </a>
        </>
    );
};

export default Arrow;