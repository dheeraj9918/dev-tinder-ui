import axios from 'axios';
import React, { useEffect } from 'react';
import { API_BASE_URL } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../redux/slice/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
    const feedData = useSelector((state) => state.feed);
    console.log("feed data in feed comp", feedData?.data);

    const dispatch = useDispatch();

    const getFeedData = async () => {
        try {
            if (feedData && feedData.length > 0) return;
            const response = await axios.get(`${API_BASE_URL}/user/feed`, { withCredentials: true });
            dispatch(addFeed(response.data));
        } catch (error) {
            console.error("❌ Feed data fetch error:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        getFeedData();
    }, []);

    return (
        <div className=''>
            <h2>Feed</h2>
            {feedData?.data && feedData?.data.length > 0 ? (
                <ul className=' space-y-4 gap-3 flex md:flex-row flex-col flex-wrap'>
                    {feedData?.data.map((item, idx) => (
                       <UserCard  key={idx} item={item} />
                    ))}
                </ul>
            ) : (
                <p>Loading feed...</p>
            )}
        </div>
    );
};

export default Feed;
