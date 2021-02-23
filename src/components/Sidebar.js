import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import Background from '../assets/background.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Sidebar() {

    // getting the user from the redux store
    const user = useSelector(selectUser);

    // just like using reuseable components, lmao
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={Background} alt="background-Image"/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3,544</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1,000</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {/* this is a new technique */}
                {recentItem('React Js')}
                {recentItem('Programming')}
                {recentItem('SoftwareEngineering')}
                {recentItem('Developer')}
                {recentItem('Node Js')}

            </div>
        </div>
    )
}

export default Sidebar
