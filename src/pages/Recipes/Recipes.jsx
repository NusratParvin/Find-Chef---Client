import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const allChefs = useLoaderData()
    const { id, chef_name, chef_img, experience, recipes, likes } = allChefs;

    console.log(allChefs[0].chef_name);
    return (
        <div>
            
            


        </div>
    );
};

export default Recipes;