import React from 'react';

const FlipCard = ({ image, name, designation, state, review }) => {
  return (
    <div className="w-full h-80 sm:h-96 perspective">
      <div className="relative w-full h-full transition-transform duration-500 preserve-3d group hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-between p-4 bg-primary text-white rounded-lg shadow-lg">
          {/* Top Row: Image, Name, Designation */}
          <div className="flex flex-col items-center w-full">
            <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover border-4 border-white mb-2" />
            <div className="font-bold text-lg md:text-2xl">{name}</div>
            <div className="text-sm md:text-lg opacity-80">{designation}</div>
          </div>
          {/* State */}
          <div className="w-full text-center text-base md:text-lg font-semibold my-2">{state}</div>
          {/* Review */}
          <div className="w-full text-center text-sm md:text-base italic opacity-90">{review}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;