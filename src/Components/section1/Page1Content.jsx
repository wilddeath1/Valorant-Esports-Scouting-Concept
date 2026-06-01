import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
const Page1Content = (props) => {
    
    return (
        <>
            <div className='h-[95vh] pb-16 pt-6 px-18 flex items-center gap-10 mt-17'>
                <LeftContent />
                <RightContent players={props.players} />
            </div>
        </>
    );
};

export default Page1Content;