import './App.css';
import Post from "./Post.js";
import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

function getModalStyle(){
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function App() {
  //const classes = style;
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([ // posts = useState[{}, {}] use setPosts to manipulate
    // {username: "kaaba",
    //  caption: "WOW it works",
    //  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
    // },
    // {username: "baaba", 
    //  caption: "HOIIII",
    //  imageUrl: "https://www.jquery-az.com/html/images/banana.jpg"
    // },
  ])
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // useEffect runs a piece of code based on a specific condition
  useEffect(()=>{
    //this is where the code runs (once when the app component loads)
    /*conditions - runs every single time posts change*/
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data(),
      })
      )) //for each post, go into
      // the documents and map each document with its provided data and id.
      // update posts when it reloads
    })
    //any time a new document is added, it fires this code
  }, [posts])

  const signUp = (event) => {

  }

  // const handleClose = () => {
  //     setOpen(false)
  // }


  return (
    <div className="app">
      {/*Header*/}
      <Modal
        open={open}
        onClose={() => setOpen(false)}>
        <Box sx={style}>
          <center>
            <div className="app__header">
              <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram logo"></img>
            </div>
            <Input 
            placeholder = "username"
            type = "text"
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}>
            </Input>
            <Input 
            placeholder = "email" 
            type = "text"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}>
            </Input>
            <Input 
            placeholder = "password" 
            type = "password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}>
            </Input>
          </center>
        </Box>
        {/* <Button onClick = {signUp}>Sign Up</Button> */}
      </Modal>

      <div className="app__header">
          <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram logo"></img>
      </div>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      <h1>HELLO</h1>
      {// for all posts with given id and post data, create post component)
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      {/* <Post username= "laaba" caption="HELLO" imageUrl= "https://amymhaddad.s3.amazonaws.com/morocco-blue.png"/> */}
      {/*Posts*/}
      {/*Posts*/}
    </div>
  );
}

export default App;
