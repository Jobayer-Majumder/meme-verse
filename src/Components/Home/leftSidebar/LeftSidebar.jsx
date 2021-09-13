import React from 'react';
import SignUpAlert from '../../Shared/SignUpAlert/SignUpAlert';
import { mVerseData } from './leftSidebarData';



const LeftSidebar = () => {
    return (
        <>
            <aside className='h-screen overflow-y-scroll'>
                <SignUpAlert />
                
                
                <div className="p-2">
                    {
                        mVerseData.map((d, index) => 
                        <div key={index++} className='flex gap-4 justify-start items-center py-2 px-5 my-2 rounded bg-white hover:bg-gray-200 cursor-pointer'> 
                            <span className='text-xl'>
                                {d.icon}
                            </span>
                            <h4>{d.title}</h4>
                        </div>)
                    }
                </div>
            </aside>
        </>
    );
};

export default LeftSidebar;