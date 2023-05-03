import { Container } from 'postcss';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'
import { ImArrowRight2 } from 'react-icons/im'
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut, loggedIn,setLoggedIn } = useContext(AuthContext);
    console.log(user?.email);
    const handleLogout = () => {
        logOut()
            .then(()=>
            {
                setLoggedIn(false)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <header className=" header sticky top-0 bg-white shadow-lg flex md:flex-row flex-col items-center justify-between px-8 py-2">
                {/* <!-- logo --> */}
                <div className='w-3/12 flex justify-center'>
                    <img width={90} src='../../../../public/find-chef.jpg' />
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

                    {
                        loggedIn && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                    }
                    {loggedIn ?

                        <button onClick={handleLogout} className="text-orange-900 font-bold  bg-lime-400  px-6 py-3 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 text-sm  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">LOGOUT</button>
                        :
                        <Link to="/login">
                            <button className="text-orange-900 font-bold  bg-lime-400  px-6 py-3 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 text-md  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">LOGIN</button>
                        </Link>
                    }

                    <Link to="/register">
                        <button className="text-orange-900 bg-lime-400  px-6 py-3 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 font-bold text-md  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">REGISTER
                        <ImArrowRight2 className='ms-2' ></ImArrowRight2>
                        </button>
                    </Link>
                </div>



            </header>


        </div>
    );
};

export default Header;