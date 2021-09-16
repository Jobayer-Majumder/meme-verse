import React, { useContext } from 'react';
import Navbar from '../../../Components/Shared/Navbar/Navbar';
import signUpImg from '../../../assets/images/undraw_authentication_fsn5.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../App';



const SignUp = () => {
    const { handleInputValidation, inputErr, validValue } = useForm()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignUp = e => {
        e.preventDefault()

        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(validValue)
        })
            .then(res => res.json())
            .then(result => {
                if (result?.sucMessage) {
                    alert(result?.sucMessage)
                    setLoggedInUser(validValue)
                    history.push(from);
                }
                if (result?.errMessage) {
                    alert(result.errMessage)
                }
            })
    };


    return (
        <section>
            <Navbar />
            <div className="container mx-auto px-2 md:px-0 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="border p-3 flex items-center text-center">
                        <form onSubmit={handleSignUp} className='w-full'>
                            <h2 className="py-2 text-xl font-medium text-indigo-500">Enter your credential</h2>
                            <div className="p-2">
                                <input onChange={(e) => handleInputValidation(e)} className='w-full md:w-2/3 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' name='name' type="text" required placeholder='Full Name' />
                                <span className={`${inputErr?.name === 'name' ? 'visible' : 'invisible'} block text-red-500`}>
                                    {
                                        inputErr?.name === 'name' ? inputErr.errMassage : 'Error Massage'
                                    }
                                </span>
                            </div>
                            <div className="px-2">
                                <input onChange={(e) => handleInputValidation(e)} className='w-full md:w-2/3 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' name='email' type="email" required placeholder='Your Email' />
                                <span className={`${inputErr?.name === 'email' ? 'visible' : 'invisible'} block text-red-500`}>
                                    {
                                        inputErr?.name === 'email' ? inputErr.errMassage : 'Error Massage'
                                    }
                                </span>
                            </div>

                            <div className="px-2">
                                <input onChange={(e) => handleInputValidation(e)} className='w-full md:w-2/3 py-2 px-3 border border-gray-300 rounded focus:border-indigo-500 transition duration-500 focus:outline-none' type="password" name="pass" required placeholder='Choose secret code' />
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