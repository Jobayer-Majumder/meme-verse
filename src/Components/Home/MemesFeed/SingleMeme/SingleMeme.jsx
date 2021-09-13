import React from 'react';
import { AiOutlineShareAlt, AiOutlineLike, AiOutlineComment, AiOutlineSend } from 'react-icons/ai'
import { BsThreeDots, BsBookmarks } from 'react-icons/bs';

const SingleMeme = ({ data }) => {
    const [isOnComment, setIsOnComment] = React.useState(false);

    const {
        userName,
        userImg,
        postUrl,
        likes,
        comments
    } = data

    const handleComment = () => {
        if(isOnComment){
            return (
                <>
                    <div className='flex justify-evenly items-center pt-3'>
                        <textarea className='w-100 border rounded' name="w3review" rows="2"  cols='70' />
                        <AiOutlineSend className='inline text-2xl'/>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className="p-2 mb-5">
                <div className="flex justify-between items-center border rounded py-3 px-2">
                    <div className="flex gap-3 justify-start items-center">
                        <img className='h-12 w-12 rounded-full' src={userImg} alt="" />
                        <h3 className='text-gray-500 font-bold'>{userName}</h3>
                    </div>
                    <div className="flex gap-3 cursor-pointer text-gray-500">
                        <BsBookmarks className='text-xl hover:text-gray-900' title='Bookmark' />
                        <BsThreeDots className='text-xl hover:text-gray-900' title='More' />
                    </div>
                </div>
                <div className="py-2">
                    <h3 className='text-xl font-bold text-gray-500 pb-2'>The Benefits of Memes in Marketing</h3>
                    <img className='w-100 rounded' src={postUrl} alt="" />
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <button className='py-2 px-3 border rounded-md bg-gray-300'>
                            <AiOutlineLike className='inline mr-1 text-xl'/>
                                {
                                    likes
                                }
                        </button>
                        <button onClick={() => setIsOnComment(!isOnComment)} className='py-2 px-3 border rounded-md bg-gray-300'>
                            <AiOutlineComment className='inline mr-1 text-xl'/>
                            {
                                comments
                            }
                        </button>
                    </div>
                    <div className="flex text-white items-center">
                        <button className='py-2 px-3 border rounded-md bg-indigo-500 hover:bg-indigo-900'>
                            <AiOutlineShareAlt className='inline mr-1 text-xl' />
                            Share
                        </button>
                    </div>
                </div>
                {
                    handleComment()
                }
            </div>
        </>
    );
};

export default SingleMeme;