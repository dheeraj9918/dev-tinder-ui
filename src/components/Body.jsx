import React, { use, useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/slice/userSlice'
import axios from 'axios'
import { API_BASE_URL } from '../constants/constants'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const fetchData = async () => {
    try {
      if (user) return;
      const res = await axios.get(`${API_BASE_URL}/profile/view`, { withCredentials: true });
      dispatch(setUser(res.data));

    } catch (error) {
      if (error.status === 401) {
        navigate('/login');
      }
      console.error("❌ Fetch profile error:", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body