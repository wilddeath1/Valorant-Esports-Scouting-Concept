import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between py-4 px-10 backdrop-blur-xs fixed top-0 left-0 w-full z-50'>
                <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full tracking-wider text-sm'>Talent Scouting</h4>
                <a href='https://valorantesports.com/' target="_blank" rel="noopener noreferrer" className='bg-gray-300 text-black px-6 py-2 uppercase rounded-full tracking-wider text-sm'>Valorant Esports</a>
            </div>
        </>
    );
};

export default Navbar; 