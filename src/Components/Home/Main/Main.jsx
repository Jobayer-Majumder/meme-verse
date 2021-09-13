import React from 'react';
import LeftSidebar from '../leftSidebar/LeftSidebar';
import MemesFeed from '../MemesFeed/MemesFeed';
import RightSidebar from '../RightSidebar/RightSidebar';

const Main = () => {
    return (
        <>
            <section className='pt-4'>
                <div className="container px-2 sm:px-0 mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">
                            <LeftSidebar />
                        </div>
                        <div className="col-span-6">
                            <MemesFeed />
                        </div>
                        <div className="col-span-3">
                            <RightSidebar />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Main;