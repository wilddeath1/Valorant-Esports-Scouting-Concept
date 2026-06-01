import React from 'react';
import RightCard from './RightCard';
const RightContent = (props) => {
  return (
    <>
      <div id='rightCards' className='h-full w-2/3 p-4 flex flex-nowrap gap-10 overflow-x-auto scrollbar-hide '>
        {props.players.map(function (elem,idx ) {
          return <RightCard key={idx} name={elem.name} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color} id={idx} profile={elem.profile} />
        })}
      </div>
    </>
  );
};

export default RightContent;