import './App.css';
import Post from "./Post.js";
import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";

function App() {
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


  return (
    <div className="app">
      {/*Header*/}
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram logo">

        </img>
      </div>

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
