import React, {useState, useEffect} from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post';
import { db } from '../Firebase/Firebase';
import firebase from '../Firebase/Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    // getting the user from the store
    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    // connecting to firebase
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
// the code below brings all the data in the collections post.. ie, name, description,message, timestamp etc
                }
            )))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            name: user.displayName, 
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    }


    return (    
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input 
                            type="text"
                            value={input} 
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter your message"
                        />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C8CBCD"/>
                    <InputOption Icon={CalenderViewDayIcon} title='Write article' color="#7FC15E"/>
                </div>

            </div>

                {/* Posts */}
                <FlipMove>
                    {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                        // crazy level destructuring 😐
                        <Post 
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    ))}
                </FlipMove>
        </div>
    )
}

export default Feed
