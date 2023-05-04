import React, { useState } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { FaPortrait } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { ImArrowRight2 } from "react-icons/im";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
// import {  updateProfile } from "firebase/auth";


const Register = () => {

    const { createNewUser, logOut,setProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const [errorMessage,setErrorMessage]=useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const updateUserData = (user, name,photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL:photo
        })
            .then(() => {
                console.log(user.displayName,user.photoURL)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        setErrorMessage('')
        setSuccessMessage('')

        if (password.length < 6) {
            setErrorMessage('Your password has to be atleast 6 characters long');
            return
        }

        createNewUser(email, password)
            .then(result => {
                const createdNewUser = result.user;
                console.log(createdNewUser,'createdNewUser');

                updateUserData(createdNewUser, name,photo)

                setSuccessMessage("Your registration is successful")
                setErrorMessage('')
                logOut()
                console.log('till nav');
                navigate('/login')
            })
            .catch(error => {           

                setErrorMessage(error.code.slice(5))
            }) 
            console.log(errorMessage.code);
    }


    return (
        <div>
            <div className="h-[calc(100%-5rem)] flex flex-col items-center justify-center bg-lime-200 " >

                <div className="flex flex-col bg-white shadow-4xl px-4 sm:px-6 md:px-8 lg:px-10 md:w-1/2 w-screen py-10 my-8">

                    <div className="font-bold tracking-normal self-center text-xl sm:text-3xl  text-orange-900"> Join us Now </div>

                    <div className="mt-10 border-red-900">
                        <form onSubmit={handleRegister}>
                            <div className="flex flex-col mb-5 justify-center mx-auto w-3/4">
                                <label for="email" className="mb-1 text-md font-semibold tracking-wide text-orange-950 " >Name:</label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-12 text-lime-500">
                                        <BsFillPersonFill />
                                    </div>

                                    <input type="text" name="name" className=" text-md border-none  placeholder-gray-400 pl-10 pr-4 bg-gray-100 w-full py-2 focus:outline-none text-orange-950 text-md focus:border-green-400 "
                                        placeholder="Enter your name" required />
                                </div>
                            </div>
                            <div className="flex flex-col mb-5 justify-center mx-auto w-3/4">
                                <label for="photo" className="mb-1 text-md font-semibold tracking-wide text-orange-950 " >Photo URL:</label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-12 text-lime-500">
                                        <FaPortrait />
                                    </div>

                                    <input type="text" name="photo" className=" text-md border-none  placeholder-gray-400 pl-10 pr-4 bg-gray-100 w-full py-2 focus:outline-none text-orange-950 text-md focus:border-green-400 " placeholder="Enter your photo url here" />
                                </div>
                            </div>
                            <div class="flex flex-col mb-5 justify-center mx-auto w-3/4">
                                <label for="email" className="mb-1 text-md font-semibold tracking-wide text-orange-950 " >Email Address:</label >
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-lime-500">
                                        <MdEmail />
                                    </div>

                                    <input id="email" type="email" name="email" className=" text-md border-none  placeholder-gray-400 pl-10 pr-4 bg-gray-100 w-full py-2 focus:outline-none text-orange-950 text-md focus:border-green-400 " required placeholder="Enter your email here" />
                                </div>
                            </div>
                            <div class="flex flex-col mb-5 justify-center mx-auto w-3/4">
                                <label for="email" className="mb-1 text-md font-semibold tracking-wide text-orange-950 " >Password:</label >
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-lime-500">
                                        <RiLockPasswordFill />
                                    </div>

                                    <input id="password" type="password" name="password" className=" text-md border-none  placeholder-gray-400 pl-10 pr-4 bg-gray-100 w-full py-2 focus:outline-none text-orange-950 text-md focus:border-green-400 " placeholder="Enter your password here" required/>
                                </div>
                            
                            {
                            errorMessage &&
                            <p className='text-red-600 pt-2'>{errorMessage}</p>
                           
                        }
                        {
                            successMessage &&
                            <p className='text-green-600 pt-2'>
                                {successMessage}</p>
                           
                        }
                        </div>

                            <div class="flex w-1/2 mx-auto">
                                <button type="submit" className=" flex flex-col md:flex-row text-sm mt-2 items-center justify-center focus:outline-none text-orange-900 md:text-md  sm:text-base font-bold bg-lime-500  hover:bg-lime-600 py-3 w-full transition hover:text-gray-100 duration-150 ease-in " >
                                    <span className="mr-2 uppercase">Sign Up</span>
                                    <span><ImArrowRight2></ImArrowRight2></span>
                                </button>
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <p className=" inline-flex items-center text-orange-900 font-medium text-sm text-center ">
                                    <span className="ml-2" >Already have an account?
                                        <Link to='/login' className="text-sm text-orange-700 ml-2 underline" >Login here</Link></span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;