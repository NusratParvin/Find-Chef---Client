import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { ImArrowRight2 } from 'react-icons/im'
import { Link } from 'react-router-dom';

const SingleChef = ({ chef }) => {

    const { id, chef_name, chef_img, experience, recipes, likes } = chef;

    return (
        <div>
            <div class="  h-100 bg-white shadow-xl ">

                <img class="w-full h-72 object-cover object-top" src={chef_img} alt="" />
                <div class="p-5">
                    <Link to={`/${id}`}>
                        <h5 class="mb-2 text-2xl font-bold tracking-normal text-orange-900">{chef_name}</h5>
                    </Link>

                    <p class="mb-3 text-lg text-orange-950"><span className='font-semibold'>Years of Experience:</span>  {experience}</p>

                    <p class="mb-10 text-lg text-orange-950"><span className='font-semibold'>Recipes developed:</span> {recipes}</p>

                    <div className='flex justify-between items-center mb-6 '>
                        <div className='flex justify-between items-center'>
                            <AiFillLike className='h-6 w-8 text-lime-600 '></AiFillLike><span className='text-lg font-semibold'>{likes}
                            </span>
                        </div>

                        <Link to={`/${id}`} class="inline-flex  items-center px-3 py-2 text-sm md:text-lg pe-3 font-bold text-center text-orange-900 bg-lime-500 hover:bg-lime-600">
                            View Recipes
                            <ImArrowRight2 className='mx-2 hover:translate-x-2 duration-200'></ImArrowRight2>
                        </Link></div>
                </div>
            </div>

        </div>
    );
};

export default SingleChef;