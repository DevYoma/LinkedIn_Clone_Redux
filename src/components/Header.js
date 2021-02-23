import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Image from '../assets/linkedIn.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import {useDispatch, useSelector } from 'react-redux';
import { auth } from '../Firebase/Firebase';
import { logout, selectUser } from '../features/userSlice';

function Header() {
    // getting user from the store, 
    // we get the useSelector and the selectUser
    // const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
            <div className="header">

                <div className="header__left">
                    <img src={Image} alt=""/>

                    <div className="header__search">
                        {/* SearchIcon */}
                        <SearchIcon />
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>

                <div className="header__right">
                    <HeaderOption title="Home" Icon={HomeIcon} />
                    <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                    <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                    <HeaderOption title="Messaging" Icon={ChatIcon} />
                    <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                    <HeaderOption
                        avatar={true} 
                        title="me"
                        onClick={logoutOfApp}
                    />
                </div>
            </div>
    )
}

export default Header
