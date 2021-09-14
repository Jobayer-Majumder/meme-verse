import React from 'react';
import Navbar from '../../../Components/Shared/Navbar/Navbar';
import signInImg from '../../../assets/images/undraw_unlock_24mb.svg';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <section>
            <Navbar />
            <div className="container mx-auto px-2 md:px-0 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="border p-3 flex items-center text-center">
                        <form action="/" className='w-full'>
                            <h2 className="py-2 text-xl font-medium text-indigo-500">Enter your credential</h2>
                            <div className="p-3">
                                <input className='w-full md:w-2/3 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' type="email" name="" id="" placeholder='Your Email' />
                            </div>
                            <div className="p-3">
                                <input className='w-full md:w-2/3 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' type="password" name="" id="" placeholder='Your secret code' />
                            </div>
                            <div className="p-3">
                                <input className='w-full md:w-2/3 py-2 px-3 transition duration-500 bg-gray-300 hover:bg-indigo-500 cursor-pointer rounded-md hover:text-white font-medium' type="submit" value="Login" />
                            </div>
                            <Link to='/auth/signup' className='text-gray-500 font-medium'>New to MemeVerse? {''}
                                <button className='text-indigo-500 hover:underline'>Create Account</button>
                            </Link>
                        </form>
                    </div>
                    <div className="">
                        <img className='w-full' src={signInImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;