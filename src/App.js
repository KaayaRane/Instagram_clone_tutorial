import './App.css';
import Post from "./Post.js";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {username: "kaaba",
     caption: "WOW it works",
     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
    },
    {username: "baaba", 
     caption: "HOIIII",
     imageUrl: "https://www.jquery-az.com/html/images/banana.jpg"
    },
  ])
  return (
    <div className="app">
      {/*Header*/}
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram logo">

        </img>
      </div>

      <h1>HELLO</h1>
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      {/* <Post username= "laaba" caption="HELLO" imageUrl= "https://amymhaddad.s3.amazonaws.com/morocco-blue.png"/> */}
      {/*Posts*/}
      {/*Posts*/}
    </div>
  );
}

export default App;
