import { Container } from 'postcss';
import React from 'react';

const Header = () => {
    return (
        <div>
        <header className=" header sticky top-0 bg-white shadow-lg flex md:flex-row flex-col items-center justify-between px-8 py-2">
            {/* <!-- logo --> */}
                <div className='w-3/12 flex justify-center'>
                    <img width={90} src='../../../../public/find-chef.jpg'/>
                    <h2 className=' text-3xl text-orange-900 font-bold my-auto'>FindMyChef</h2>
                
                </div>


            {/* <!-- navigation --> */}
            <nav className="nav font-semibold text-lg">
                <ul className="flex items-center justify-center ">
                    <li className="p-4 border-b-2 text-orange-900 border-lime-500 border-opacity-0 hover:border-opacity-100 hover:text-lime-800 duration-200 cursor-pointer active">
                        <a href="">HOME</a>
                    </li>
                    <li className="p-4 text-orange-900  border-b-2 border-lime-500 border-opacity-0 hover:border-opacity-100 hover:text-lime-800 duration-200 cursor-pointer">
                        <a href="">BLOG</a>
                    </li>
                    <li className="p-4 text-orange-900  border-b-2 border-lime-500 border-opacity-0 hover:border-opacity-100 hover:text-lime-800 duration-200 cursor-pointer">
                        <a href="">ABOUT US</a>
                    </li>
                </ul>
            </nav>

            {/* <!-- buttons ---> */}
            <div className=" w-4/12  flex justify-center md:justify-end">

            <a href="">
                a href
                </a>
                <button type="button" className="text-orange-900 font-bold  bg-lime-400  px-6 py-3 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 text-sm  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">LOGIN

                </button>

                <button type="button" className="text-orange-900 bg-lime-400  px-5 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 font-bold text-sm  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">REGISTER
                    <svg aria-hidden="true" className=" ps-2 w-8 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>


        
        </header>

      
</div>
    );
};

export default Header;