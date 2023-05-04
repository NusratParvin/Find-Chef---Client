import React from 'react';

const BookingProcess = () => {
    return (
        <div className='w-screen md:w-9/12 mx-auto mb-24 pt-16  flex'>
            <div className='w-screen md:w-1/3 '>
                <h2 className='text-3xl text-orange-950 font-bold uppercase mb-12'>How we work</h2>
                <ol class="relative ms-8 text-gray-500 border-l border-s-2 border-lime-400">
                    <li class="mb-10 ml-6  text-orange-950 ">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-lime-300 rounded-full -left-4 ">
                            <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </span>
                        <img height={100} width={100} src="https://heychef.ae/wp-content/uploads/2020/05/select-the-chef.png" alt="" />
                        <h3 class="font-medium leading-tight text-orange-950 md:text-2xl uppercase">Select a chef</h3>
                        {/* <p class="text-sm md:text-lg">Step details here</p> */}
                    </li>
                    <li class="mb-10 ml-6  text-orange-950 ">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-lime-300 rounded-full -left-4 ">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                        </span>
                        <img height={100} width={100} src="https://heychef.ae/wp-content/uploads/2020/05/schedule-the-time.png" alt="" />
                        <h3 class="font-medium leading-tight  md:text-2xl uppercase">Schedule Your Time</h3>
                        {/* <p class="text-sm">Step details here</p> */}
                    </li>

                    <li class="ml-6  text-orange-950 ">
                        <span class="absolute flex items-center justify-center w-8 h-8 bg-lime-300 rounded-full -left-4 ">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        </span>
                        <img height={100} width={100} src="https://heychef.ae/wp-content/uploads/2020/05/sit-back-and-relax.png" alt="" />
                        <h3 class="font-medium leading-tight  md:text-2xl uppercase">Sit Back And Relax</h3>
                        {/* <p class="text-sm">Step details here</p> */}
                    </li>
                </ol>

            </div>
            <div className='w-screen md:w-2/3 '>
            <h2 className='text-3xl ps-16 text-orange-950 font-bold uppercase mb-12'>Why you'll love us</h2>
            <div className='flex md:flex-row flex-col ms-8 justify-evenly mb-6'>
                <div className='md:w-2/3  text-orange-950 '>
                    <h3 className='text-xl font-bold uppercase'>CLEAN EATING
                    </h3>
                    <p className='text-xl py-3 font-normal'>Enjoy home cooked meals tailored to your taste and diet profile.

                    </p>
                </div>
                <img width={100} className='bg-lime-200 p-4' src="https://heychef.ae/wp-content/uploads/2020/05/healthy-home-food.png" alt="" />
            </div>

            <div className='flex md:flex-row flex-col ms-8 justify-evenly mb-6'>
                <div className='md:w-2/3  text-orange-950 '>
                    <h3 className='text-xl font-bold uppercase'>VARIETY AND AUTHENTIC TASTE
</h3>
                    <p className='text-xl py-3 font-normal'>Our chefs are skilled at a variety of cuisines that promise authentic flavors.</p>
                </div>
                <img width={100} className='bg-lime-200 p-4' src="https://heychef.ae/wp-content/uploads/2020/05/any-cusine-any-taste.png" alt="" />
            </div>

            <div className='flex md:flex-row flex-col ms-8 justify-evenly mb-6'>
                <div className='md:w-2/3  text-orange-950 '>
                    <h3 className='text-xl font-bold uppercase'>ALL INCLUSIVE, NO HIDDEN COSTS  </h3>
                    <p className='text-xl py-3 font-normal'>Our services have no additional or hidden charges. You simply pay by the hour.</p>
                </div>
                <img width={100} className='bg-lime-200 p-4' src="https://heychef.ae/wp-content/uploads/2020/05/no-hidden-costs.png" alt="" />
            </div>

            <div className='flex md:flex-row flex-col ms-8 justify-evenly mb-6'>
                <div className='md:w-2/3  text-orange-950 '>
                    <h3 className='text-xl font-bold uppercase'>LIFE MADE EASY
</h3>
                    <p className='text-xl py-3 font-normal'>Book a chef at your convenience, any time anywhere, with just a click of a button!</p>
                </div>
                <img width={100} className='bg-lime-200 p-4' src="https://heychef.ae/wp-content/uploads/2020/05/life-made-easy.png" alt="" />
            </div>
                
            </div>
        </div>
    );
};

export default BookingProcess;