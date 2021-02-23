// import React from 'react'; '
// so the code above is optional cool...
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Widgets from './components/Widgets';
import { useEffect } from 'react';
import { auth } from './Firebase/Firebase';

function App() {
  // pulling the user to the App component
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // user is logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }else{
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {!user ? (<Login />) :
      (
        <div className="app__body">
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />

        </div>
      )
      }

    </div>
  );
}

export default App;
// so uhmm, i'll try doing persistent login with context api