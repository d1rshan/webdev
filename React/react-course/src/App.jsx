import React, { useState, useEffect } from "react";
import "./style.css";
// Simple github api application

function App() {
  const [username, setUsername] = useState();
  const [userdata, setUserdata] = useState({
    name: "",
    bio: "",
    img: "",
    followers: "",
    following: "",
  });
  // Fetch data from github API

  async function fetchData() {
    if (username) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUsername("");
      setUserdata({
        name: data.name,
        bio: data.bio,
        img: data.avatar_url,
        followers: data.followers,
        following: data.following,
      });
    }
  }

  return (
    <>
      {!userdata.name && (
        <div className="container">
          <h1>Github Profile</h1>
          <input
            type="text"
            placeholder="Enter github username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={fetchData}>Fetch Profile</button>
        </div>
      )}
      {userdata.name && (
        <div className="container">
          <h2>Profile Details</h2>
          <img src={userdata.img} alt={userdata.name} />
          <h3>{userdata.name}</h3>
          <p>{userdata.bio}</p>
          <p>Followers: {userdata.followers}</p>
          <p>Following: {userdata.following}</p>
          <button onClick={() => setUserdata({ ...userdata, name: "" })}>
            Search for different profile
          </button>
        </div>
      )}
    </>
  );
}

export default App;
