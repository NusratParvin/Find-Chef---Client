import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {

    const { signIn , setLoggedIn, googleSignIn, githubSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage,setErrorMessage]=useState('')
    const [successMessage, setSuccessMessage] = useState('')
    
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setErrorMessage('')
        setSuccessMessage('')

        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser,'logged in login');
                setLoggedIn(true)
                setSuccessMessage("You are successfully logged in!")
                setErrorMessage('')
                navigate(from, { replace: true })
            })
            .catch(error => {console.log('in err');
                setErrorMessage(error.code.slice(5))
                
            })
            console.log(errorMessage);
    }

    const handleGoogleLogin = () =>{
        setErrorMessage('')
        setSuccessMessage('')

        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setLoggedIn(true)
            setSuccessMessage("You are successfully logged in!")
                setErrorMessage('')
            navigate(from, { replace: true })
        })
        .catch(error => {
            setErrorMessage(error.message)
        })
    }


    const handleGithubLogin = () =>{
        setErrorMessage('')
        setSuccessMessage('')

        githubSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setLoggedIn(true)
            setSuccessMessage("You are successfully logged in!")
                setErrorMessage('')
            navigate(from, { replace: true })
        })
        .catch(error => {
            setErrorMessage(error.message)
        })
    }
    return (
        <div>
            
            <div class="py-6 my-10">
                <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div class="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')" }}></div>
                    <div class="w-full p-8 lg:w-1/2">
                        <h2 class="text-2xl font-bold text-orange-900 text-center">FindMyChef</h2>

                        <div className='flex flex-col md:flex-row gap-2'>
                            <button onClick={handleGoogleLogin} className=" w-72 flex items-center justify-normal mt-4 text-orange-900 rounded-lg shadow-lg hover:bg-gray-100">
                                <div className="ps-4 pe-2 py-3">
                                    <FcGoogle></FcGoogle>
                                </div>

                                <h1 className="pe-4 py-3 w-5/6 text-center text-orange-950 font-bold">Google Sign in</h1>
                            </button>
                            <button onClick={handleGithubLogin} class=" w-64 flex items-center justify-center mt-4 text-orange-900 rounded-lg shadow-lg hover:bg-gray-100">
                                <div className="ps-4 pe-2 py-3">
                                    <FaGithub></FaGithub>
                                </div>

                                <h1 className="pe-4 py-3 w-5/6 text-center text-orange-950 font-bold">Github Sign in</h1>
                            </button>
                        </div>


                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <p className="text-sm text-center text-orange-900 uppercase">or login with email</p>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>

                        <form onSubmit={handleLogin}>
                           <div className="mt-4">
                            <label className="block text-orange-900 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-lime-200 text-orange-950 focus:outline-none   focus:shadow-outline border-none rounded py-2 px-4 block w-full appearance-none" type="email" name='email' required />
                        </div>
                        <div class="mt-4">
                            <div class="flex justify-between">
                                <label class="block text-orange-900 text-sm font-bold mb-2">Password</label>
                            </div>
                            <input class="bg-lime-200 text-orange-950 focus:outline-none focus:shadow-outline border-none rounded py-2 px-4 block w-full appearance-none" type="password" name='password' required />
                        </div>

                        {
                            errorMessage &&
                            <p className='text-red-600 pt-2'>Your email and password does not match</p>
                           
                        }
                        {
                            successMessage &&
                            <p className='text-green-600 pt-2'>
                                {successMessage}</p>
                           
                        }

                        <div class="mt-8">
                            <button type='submit' className="bg-lime-500 text-orange-950 font-bold py-2 px-4 w-full rounded hover:bg-lime-700">Login</button>
                        </div> 
                        </form>
                        
                        <div class="mt-4 flex items-center justify-between">
                            <span class="border-b w-1/5 md:w-1/4"></span>
                            <Link to='/register' class="text-sm text-orange-900 uppercase">or sign up here </Link>
                            <span class="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;