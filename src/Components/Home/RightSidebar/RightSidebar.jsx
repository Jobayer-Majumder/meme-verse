import React from 'react';
import SignUpAlert from '../../Shared/SignUpAlert/SignUpAlert';
import { featuredPostData } from './featuredPostData/featuredPostData';

const RightSidebar = () => {
    return (
        <aside className=''>
            <SignUpAlert />
            <div className="p-2">
                <h3 className='text-gray-500 font-medium'>Featured Post</h3>
                <div className="grid grid-cols-2 gap-2">
                    
                    {
                        featuredPostData.map((data, index) => 
                        <div key={index++}>
                            <img className='rounded' src={data.img} alt="" />
                            <h4 className='text-gray-500 font-medium'>{data.title}</h4>
                        </div>
                        )
                    }
                </div>
            </div>
        </aside>
    );
};

export default RightSidebar;