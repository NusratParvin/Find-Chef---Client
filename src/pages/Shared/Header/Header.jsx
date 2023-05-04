import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'
import { ImArrowRight2 } from 'react-icons/im'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../../assets/find-chef.jpg'

const Header = () => {
    const { user, logOut, loggedIn, setLoggedIn } = useContext(AuthContext);
    if(user){
        setLoggedIn(true)
        console.log(user,loggedIn);
    }
    console.log(user, 'header');
    const handleLogout = () => {
        logOut()
            .then(() => {
                setLoggedIn(false)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log( user,loggedIn );
    return (
        <div>
            <header className=" header sticky top-0 bg-white shadow-lg flex md:flex-row flex-col items-center justify-between px-8 py-2">
                {/* <!-- logo --> */}
                <div className='w-3/12 flex justify-center'>
                    <img width={90} src={logo} />
                    <h2 className=' text-3xl text-orange-900 font-bold my-auto'>FindMyChef</h2>

                </div>


                {/* <!-- navigation --> */}
                <nav className="nav sidebar font-semibold text-lg">
                    <ul className="flex items-center justify-center gap-7 ">

                        <NavLink to='/' className="p-4 text-orange-900  border-b-2 border-lime-500 border-opacity-0 hover:border-opacity-100 hover:text-lime-800 duration-200 cursor-pointer">HOME</NavLink>

                        <NavLink to='/blog' className="p-4 text-orange-900  border-b-2 border-lime-500 border-opacity-0 hover:border-opacity-100 hover:text-lime-800 duration-200 cursor-pointer">BLOG
                        </NavLink>

                        <NavLink to='/about' className="p-4 text-orange-900  border-b-2 border-lime-500 border-opacity-0 hover:border-opacity-100 hover:text-lime-800 duration-200 cursor-pointer">ABOUT US </NavLink>
                    </ul>
                </nav>

                {/* <!-- buttons ---> */}
                <div className=" w-4/12  flex justify-center md:justify-end">

                    {loggedIn &&(
                        user?.photoURL ?
                    
                             <img class=" text-primary text-primary transition duration-150 ease-in-out "
                                    data-te-toggle="tooltip"
                                    title={user.displayName} width={80} className='me-4 rounded-full' src={user.photoURL} /> 
                        
                        :
                        <FaUserCircle className='me-4 mt-2' data-te-toggle="tooltip"
                        title={user.displayName} style={{ fontSize: '2.5rem' }}></FaUserCircle>)

                    }
                    {loggedIn ?

                        <button onClick={handleLogout} className="text-orange-900 font-bold  bg-lime-400  px-6 py-3 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 text-sm  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">LOGOUT</button>
                        :
                        <><Link to="/login">
                            <button className="text-orange-900 font-bold  bg-lime-400  px-6 py-3 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 text-md  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">LOGIN</button>
                        </Link>

                            <Link to="/register">
                                <button className="text-orange-900 bg-lime-400  px-6 py-3 hover:bg-lime-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-400 font-bold text-md  text-center inline-flex items-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">REGISTER
                                    <ImArrowRight2 className='ms-2' ></ImArrowRight2>
                                </button>
                            </Link>
                        </>

                    }



                </div>



            </header>


        </div>
    );
};

export default Header;