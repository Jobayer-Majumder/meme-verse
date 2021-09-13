import React from 'react';

const SignUpAlert = () => {
    return (
        <div className='border p-2 rounded text-center'>
            <h5 className='font-bold text-xl text-gray-500'>New to MemeVerse?</h5>
            <p className='text-md text-gray-500 font-medium'>Sign-up to see more memes !</p>
            <button className='py-2 px-5 bg-indigo-500 rounded-full text-white font-bold hover:bg-indigo-800 my-2'>Sign up</button>
        </div>
    );
};

export default SignUpAlert;