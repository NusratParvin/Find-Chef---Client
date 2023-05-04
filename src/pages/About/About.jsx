import React from 'react';

const About = () => {
    return (
        <div>
            <div className=' h-40 bg-lime-100'>
                <h2 className='font-bold text-5xl text-center pt-12 uppercase text-orange-950'>About Us</h2>
            </div>
            <div className='md:w-9/12 w-screen mx-auto flex justify-between md:flex-row flex-col-reverse pt-12'>

                <div className='md:w-1/2 w-screen px-3 text-center'>
                    <p className='text-orange-900 font-medium text-xl pt-24'>
                        It started as a casual dinner table conversation between my wife and me. After a particularly long Tuesday at work, we came home to a pot of biryani — our favorite meal — welcoming us. Prepared earlier in the day by our weekly personal chef, the biryani’s fragrant aroma was an instant pick-me-up. As we sat down and relished our meal, we talked about how great it was that we both could walk in late from work and not have to worry about dinner. We had a freshly-prepared meal waiting for us — not a basic meal plan option or last minute unhealthy takeout. We realized what a true blessing having a personal chef was! <br /> <br /> <br />

                        That’s when we thought, “wouldn’t it be incredible if more people could enjoy this service?” A personal chef who comes home to cook your favorite meal — without breaking the bank.
                    </p>
                </div>

                <div className='md:w-1/2 w-screen'>
                    <img src="https://heychef.ae/wp-content/uploads/2020/05/pranav-arora-1295x1536.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;