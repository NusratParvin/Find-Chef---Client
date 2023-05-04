import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className=' h-24'>
                <p class=" text-center uppercase py-5 font-sans  font-bold text-orange-900 md:text-3xl">Traditional and Modern Chinese Cooking at Home</p>

            </div>

            <div className="mx-auto w-10/12 ">
                <img className='mx-auto object-cover' src='https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/8.jpg?tr=w-3840,q-50' />
            </div>
        </div>
    );
};

export default Banner;