import React from 'react';
import { feedData } from './feedData';
import SingleMeme from './SingleMeme/SingleMeme';



const MemesFeed = () => {
    return (
        <section>
            {
                feedData.map((d, index) => <SingleMeme key={index++} data={d} />)
            }
        </section>
    );
};

export default MemesFeed;