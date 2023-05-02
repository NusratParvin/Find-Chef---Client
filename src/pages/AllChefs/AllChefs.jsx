import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from '../SingleChef/SingleChef';

const AllChefs = () => {
    const allChefs = useLoaderData()
    

    console.log(allChefs);
    return (
        <div>
            <h2 className=' text-3xl font-bold text-orange-900 text-center mt-12'>Meet Our Chefs</h2>
            {
                allChefs.map(chef=> <SingleChef key={chef.id} chef={chef}></SingleChef>)
            }
        </div>
    );
};

export default AllChefs;