import React, { useState } from 'react';
import './Login.css';
import Image from '../assets/loginPage.png';
import { auth } from '../Firebase/Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('')
// getting the dispatch used to shoot actions into the data layer
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert('Please enter your Name');
        }

        // the crazy part
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {   
// console.log(userAuth) to see what it contains
            userAuth.user
               .updateProfile({
                displayName: name,
                photoUrl: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        }).catch(err => alert(err))
    }

    const loginToApp = (e) => {

        e.preventDefault();
        if(!email && !password){
            alert("Please Enter a valid Email and Password to sign up")
        }
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.displayName,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch(err => alert(err));
    }

    return (
        <div className="login">
            <img src={Image} alt="LinkedIn-Image"/>

            <form>
                <input 
                    type="text"
                    placeholder="Full name (required if registering)"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                 <input 
                    type="text"
                    placeholder="Profile pic URL (Optional)"
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                />

                 <input 
                    type="Email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                 <input 
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? {(" ")}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
