import { Container } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
            {/* <!-- logo --> */}
                <div className='w-3/12 flex'>
                    <img width={90} src='../../../../public/find-chef.jpg'/>
                    <h2 className=' text-3xl font-bold my-auto'>FindChef</h2>
                
                </div>


            {/* <!-- navigation --> */}
            <nav className="nav font-semibold text-lg">
                <ul className="flex items-center">
                    <li className="p-4 border-b-2 border-lime-500 border-opacity-0 hover:border-opacity-100 hover:text-lime-800 duration-200 cursor-pointer active">
                        <a href="">HOME</a>
                    </li>
                    <li className="p-4 border-b-2 border-lime-500 border-opacity-0 hover:border-opacity-100 hover:text-lime-800 duration-200 cursor-pointer">
                        <a href="">BLOG</a>
                    </li>
                </ul>
            </nav>

            {/* <!-- buttons ---> */}
            <div className=" w-4/12  flex justify-end">

            <a href="">
                    <svg className="h-8 p-1 hover:text-green-500 duration-200" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" ></path></svg>
                </a>
                <button type="button" className="text-black bg-lime-400  px-6 py-3 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 font-medium text-sm  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">LOGIN

                </button>

                <button type="button" className="text-black bg-lime-400  px-5 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 font-medium text-sm  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Register
                    <svg aria-hidden="true" className=" ps-2 w-8 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </header>

    );
};

export default Header;