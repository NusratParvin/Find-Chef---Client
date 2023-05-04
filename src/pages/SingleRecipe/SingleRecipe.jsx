import React from 'react';
import { FaHeart } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';



const SingleRecipe = ({ recipe }) => {
    const { recipe_name, recipe_img, ingredients,cooking_method } = recipe

    const handleToast=()=>{
        toast.success(`${recipe_name} is your favorite now!`)
    }
    return (
        <div >
           
            <div class="card h-72 shadow-2xl shadow-slate-600">
                <div class="card-header">
                    <img className='card_img' src={recipe_img} alt="" />
                    <button onClick={handleToast} 
                    class="like hover:bg-red-600 hover:text-white"><FaHeart></FaHeart>
                    </button>
                </div>
                <div class="text">
                    <h1 class="food pt-6">{recipe_name}
                    </h1>
                    <i class="fa fa-clock-o"> 15 Mins</i>
                    <i class="fa fa-users"> Serves 2</i>

                    {/* <div class="stars">
                        <li>
                            <a href="#"><i class="fa fa-star"></i></a>
                            <a href="#"><i class="fa fa-star"></i></a>
                            <a href="#"><i class="fa fa-star"></i></a>
                            <a href="#"><i class="fa fa-star"></i></a>
                            <a href="#"><i class="fa fa-star-o"></i></a>
                        </li>
                    </div> */}
                    <div>
                        <h2 className='food'>Ingredients:</h2>
                        <ul className="info font-medium">
                            {
                                ingredients.map(i => <li className='text-orange-950 text-md'>{i}</li>)
                            }

                        </ul>
                    </div>

                    <div className='pb-10 mt-6'>
                        <h2 className='food'>How to Cook:</h2> 
                        <div className="info font-medium">
                            {
                                cooking_method.map(i => <p className='text-orange-950 text-md'>{i}</p>)
                            }

                        </div>
                    </div>

                </div>
                {/* <p class="cook">Let's Cook!</p> */}
            </div>
        </div>
    );
};

export default SingleRecipe;