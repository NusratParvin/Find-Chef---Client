import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from '../SingleChef/SingleChef';

const AllChefs = () => {
    const allChefs = useLoaderData()
    const slicedChefs = allChefs.slice(0,8)

    console.log(allChefs);
    return (
        <div className=' w-10/12 mx-auto mb-24'>

            <h2 className=' text-4xl uppercase font-bold text-orange-900 text-center my-12 mt-32'>Meet Our Chefs</h2>
            <div className='grid grid-cols-1 grid-col md:grid-cols-4 md:grid-row gap-6'>
                {                    
                    slicedChefs.map(chef =><SingleChef key={chef.id} chef={chef}></SingleChef>)
                }
            </div>

            {/* <div className='mt-10 text-center'>
                <button className=' text-orange-900 bg-lime-500 hover:bg-lime-600  font-bold text-sm md:text-lg px-20 py-2.5 mr-2 mb-16'>Find More Chefs</button>
            </div> */}
        </div>
    );
};

export default AllChefs;