import React from 'react';

const SingleChef = ({chef}) => {
   
    const { id, chef_name, chef_img, experience, recipes, likes } = chef;
    
    return (
        <div>
            

            {chef_name}
        </div>
    );
};

export default SingleChef;