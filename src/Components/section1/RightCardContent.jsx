import React from 'react';
import { ArrowRight } from 'lucide-react';
const RightCardContent = (props) => {
    return (
        <>
            <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between '>
                <h2 className='bg-white h-8 w-8 rounded-full flex items-center justify-center text-lg font-semibold'>{props.id + 1}</h2>
                <div>
                    <div className="w-full flex items-end justify-center mb-2">
                        <h1 className=" machine-font text-white text-center w-full leading-[0.9] whitespace-nowrap overflow-hidden  text-[clamp(3rem,6vw,4rem)]">
                            {props.name}
                        </h1>
                    </div>

                    <p className='text-lg font-normal text-white mb-5 font-inter '>{props.intro}</p>


                    <div className='flex justify-between'>
                        <button style={{ backgroundColor: props.color }} className=' text-white font-medium rounded-full px-6 py-2'>{props.tag}</button>
                        <a
                            href={props.profile}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ backgroundColor: props.color }}
                            className="flex items-center justify-center text-white font-medium rounded-full h-9 w-9"
                        >
                            <ArrowRight size={20} className="block" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightCardContent;