import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../constants/constants';
import axios from 'axios';

const NavBar = () => {
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    console.log("user in nav", user);
    const handleLogout = async () => {
        try {
            await axios.post(`${API_BASE_URL}/api/auth/logout`, {}, { withCredentials: true });
            navigate('/login');
        } catch (error) {
            console.error("❌ Logout error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost text-xl">DevTinder</Link>
            </div>
            {user && <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.data?.photoUrl} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to={'/profile'} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handleLogout}><a >Logout</a></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default NavBar