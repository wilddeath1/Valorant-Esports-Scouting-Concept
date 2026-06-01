import React from 'react';
import RightCardContent from './RightCardContent';
const RightCard = (props) => {
    return (
        <>
            <div className='h-full w-80 overflow-hidden relative rounded-4xl shrink-0'>
                <img className=' h-full w-full object-cover' src={props.img} alt="" />
                <RightCardContent name={props.name} intro={props.intro} tag={props.tag} color={props.color} id={props.id} profile={props.profile} />
            </div>
        </>
    );
};

export default RightCard;