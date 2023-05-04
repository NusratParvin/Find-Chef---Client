import React from 'react';

const Services = () => {
    return (
        <div className='w-screen md:w-10/12 mx-auto mb-24'>
            <h3 className='text-center text-4xl font-bold text-orange-950 pt-24 mb-6 uppercase'>Explore Our Services</h3>
            <p className='text-center text-xl font-medium text-orange-950 mb-10'>There's something for everyone!</p>

            <div className='flex flex-col md:flex-row gap-6 '>
                <div className='md:w-1/4 w-screen border bg-lime-200 hover:bg-lime-300'>
                    <img width={200} height={100} className=' mx-auto' src="https://heychef.ae/wp-content/uploads/2020/05/one-time-off-service.png" alt="" />
                    <h3 className='text-2xl font-bold text-orange-950 pt-2 text-center mb-6 uppercase'>One Time Service</h3>
                    <p className='px-6 text-left text-xl font-base text-orange-950 mb-8'>Hire a personal chef to whip up your favorite dishes.</p>
                    <p className='text-center text-base font-medium text-orange-950 mb-10'>
                        <strong className='text-lime-700 text-xl'>Starting from $50/hr.</strong> <br />
                        Minimum booking time: 2 hours.
                    </p>
                </div>

                <div className='md:w-1/4 w-screen border bg-lime-200 hover:bg-lime-300'>
                    <img width={200} height={100} className=' mx-auto' src="https://heychef.ae/wp-content/uploads/2020/05/weekly-plan.png" alt="" />
                    <h3 className='text-2xl font-bold text-orange-950 pt-2 text-center mb-6 uppercase'>Weekly Service</h3>
                    <p className='px-6 text-left text-xl font-lg text-orange-950 mb-8'>Freshly cooked meals for everyday or any day of the week..</p>
                    <p className='text-center text-base font-medium text-orange-950 mb-10'>
                        <strong className='text-lime-700 text-xl'>Starting from $65/hr.</strong> <br />
                        Minimum booking time: 2 hours.
                    </p>
                </div>

                <div className='md:w-1/4 w-screen border bg-lime-200 hover:bg-lime-300'>
                    <img width={200} height={100} className=' mx-auto' src="https://heychef.ae/wp-content/uploads/2020/05/meal-plan.png" alt="" />
                    <h3 className='text-2xl font-bold text-orange-950 pt-2 text-center mb-6 uppercase'>Meal-Prep Service</h3>
                    <p className='px-6 text-left text-xl font-lg text-orange-950 mb-8'>Busy week ahead? Book a personal chef and plan your meals for the week.</p>
                    <p className='text-center text-base font-medium text-orange-950 mb-10'>
                        <strong className='text-lime-700 text-xl'>Starting from $50/hr.</strong> <br />
                        Minimum booking time: 2 hours.
                    </p>
                </div>

                <div className='md:w-1/4 w-screen border bg-lime-200 hover:bg-lime-300'>
                    <img width={200} height={100} className=' mx-auto' src="https://heychef.ae/wp-content/uploads/2020/05/party-service.png" alt="" />
                    <h3 className='text-2xl font-bold text-orange-950 pt-2 text-center mb-6 uppercase'>Party Service</h3>
                    <p className='px-6 text-left text-xl font-lg text-orange-950 mb-8'>Love hosting family and friends? Book a personal chef for a party at home!</p>
                    <p className='text-center text-base font-medium text-orange-950 mb-10'>
                        <strong className='text-lime-700 text-xl'>Starting from $75/hr.</strong> <br />
                        Minimum booking time: 4 hours.                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;