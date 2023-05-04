import React from 'react';
import './css.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import SingleRecipe from '../SingleRecipe/SingleRecipe';


const RecipeDetails = () => {

    const { id } = useParams();
    const chefDetails = useLoaderData();
    console.log(chefDetails[0].recipes);
    const recipes = chefDetails[0].recipes;

    recipes.map(r => console.log(r))
    return (
        <div>
            <div className=' bg-lime-100'>
                <div className="min-w-screen min-h-screen w-10/12 mx-auto flex items-center p-5 lg:p-10 overflow-hidden relative">
                    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-5 lg:py-12 lg:px-24 mx-auto text-orange-950 relative md:text-left">
                        <div className="md:flex items-center -mx-10">
                            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative ">
                                    <img src={chefDetails[0].chef_img} class="w-full h-full object-fit relative z-10" alt="" />
                                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-10">
                                <div className="mb-10">
                                    <h1 className="font-bold uppercase text-3xl mb-5">{chefDetails[0].chef_name}</h1>
                                    <p class="text-sm md:text-lg">{chefDetails[0].bio}</p>
                                </div>
                                <div>
                                    <div class="flex md:flex-row flex-col justify-between gap-2">
                                        <p class="text-orange-950 px-6 py-2 text-sm font-semibold bg-lime-100">Cooking for<span className='text-lg font-bolder  px-1'> {chefDetails[0].experience}</span>years</p>

                                        <p class="text-orange-950 px-6 py-2 font-semibold text-sm
                                    bg-lime-100">Developed<span className='text-lg font-bolder  px-1'> {chefDetails[0].recipes_num}</span>recipes</p>
                                    </div>

                                    <div class="inline-block align-middle mt-6 mr-5">
                                        <div className='flex justify-between items-center'>
                                            <AiFillLike className='h-6 w-10 text-lime-600 '></AiFillLike><span className='text-xl font-semibold'>7
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-24'>
                    <h2 className='text-orange-900 font-bold text-4xl  pb-8 pt-44 text-center uppercase'>My Top Recipes 
                    </h2> 
                <div className='w-10/12 mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-3  px-0'>
                    {
                        (recipes.slice(0,3)).map(recipe => <SingleRecipe key={chefDetails[0].chef_id} recipe={recipe}></SingleRecipe>)
                    }

                </div>
            </div>

        </div>
    );
};

export default RecipeDetails;