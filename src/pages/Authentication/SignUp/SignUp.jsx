import React from 'react';
import Navbar from '../../../Components/Shared/Navbar/Navbar';
import signUpImg from '../../../assets/images/undraw_authentication_fsn5.svg';
import { Link } from 'react-router-dom';
import useForm from '../../../Hooks/useForm';



const SignUp = () => {
    const { SignUpInputValidation, inputErr, validateValue } = useForm()
    

    console.log(validateValue)
    console.log(inputErr)

    return (
        <section>
            <Navbar />
            <div className="container mx-auto px-2 md:px-0 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="border p-3 flex items-center text-center">
                        <form action="/" className='w-full'>
                            <h2 className="py-2 text-xl font-medium text-indigo-500">Enter your credential</h2>
                            <div className="p-2">
                                <input onChange={(e) => SignUpInputValidation(e)} className='w-full md:w-2/3 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' name='name' type="text" placeholder='Full Name' />
                                <span className={`${inputErr?.name === 'name' ? 'visible' : 'invisible'} block text-red-500`}>
                                    {
                                        inputErr?.name === 'name' ? inputErr.errMassage : 'Error Massage'
                                    }
                                </span>
                            </div>
                            <div className="px-2">
                                <input onChange={(e) => SignUpInputValidation(e)} className='w-full md:w-2/3 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' name='email' type="email" id="" placeholder='Your Email' />
                                <span className={`${inputErr?.name === 'email' ? 'visible' : 'invisible'} block text-red-500`}>
                                    {
                                        inputErr?.name === 'email' ? inputErr.errMassage : 'Error Massage'
                                    }
                                </span>
                            </div>
                            <div className="px-2">
                                <select className='w-full md:w-2/3 text-gray-500 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' name="City" id="">
                                    <optgroup label='Choose City'>
                                        <option selected>Choose City</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Sylhet">Sylhet</option>
                                    </optgroup>
                                </select>
                                <span className={`${inputErr?.name === 'email' ? 'visible' : 'invisible'} block text-red-500`}>
                                    {
                                        inputErr?.name === 'email' ? inputErr.errMassage : 'Error Massage'
                                    }
                                </span>
                            </div>
                            <div className="px-2">
                                <input onChange={(e) => SignUpInputValidation(e)} className='w-full md:w-2/3 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' type="password" name="pass" placeholder='Choose secret code' />
                                <span className={`${inputErr?.name === 'pass' ? 'visible' : 'invisible'} block text-red-500`}>
                                    {
                                        inputErr?.name === 'pass' ? inputErr.errMassage : 'Error Massage'
                                    }
                                </span>
                            </div>
                            <div className="p-2">
                                <input className='w-full md:w-2/3 py-2 px-3 transition duration-500 bg-gray-300 hover:bg-indigo-500 cursor-pointer rounded-md hover:text-white font-medium' type="submit" value="Sign up" />
                            </div>
                            <Link to='/auth/login' className='text-gray-500 font-medium'>New to MemeVerse? {''}
                                <button className='text-indigo-500 hover:underline'>Login</button>
                            </Link>
                        </form>
                    </div>
                    <div className="">
                        <img className='w-full' src={signUpImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;