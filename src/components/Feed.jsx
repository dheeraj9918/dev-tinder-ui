import axios from 'axios';
import React, { use, useEffect } from 'react'
import { API_BASE_URL } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../redux/slice/feedSlice';

const Feed = () => {
    const feedData = useSelector((state) => state.feed);
    console.log("feed data in feed comp", feedData);
    const dispacth = useDispatch();

    const getFeedData = async () => {
        try {
            if (feedData) return;
            const response = await axios.get(`${API_BASE_URL}/feed`, { withCredentials: true });
            dispacth(addFeed(response.data));
        } catch (error) {
            console.error("❌ Feed data fetch error:", error.response?.data || error.message);
        }
    }

    useEffect(() => {
        getFeedData();
    },[]);

    
    return (
        <div>Feed</div>
    )
}

export default Feed;