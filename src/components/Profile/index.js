import React, { useEffect, useState } from "react";
import "./styles.css";
import image from "./images.png";



function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem('currUser')) {
      setUser(JSON.parse(localStorage.getItem('currUser')));
    }
  }, [user]);

  return (
    <div className="profile">
      <header>
        <h1> Account Setting</h1>
      </header>
      <div className="profilePge">

        <div className="profilePge-details">
          <img src={image} className="profilePge-photo" alt />
          <div className="profilePge-nameemail">
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        </div>

        <div className="profile-para">
          <p> Lorem lpsum Dolor Site Amet, Conseteture Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Mangna Aliquyam Erat, Sed Diam</p>

        </div>
      </div>
    </div>
  );
}

export default Profile;