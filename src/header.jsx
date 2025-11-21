import React, { useState, useEffect, use } from "react";

function Header() {
  const [profileIcon, setProfileIcon] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfileIcon(data.image);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log();

  return (
    <header className="header">
      <span className="headerSpan">
        {profileIcon && (
          <img
            className="roundButton profilePic"
            src={profileIcon}
            alt="Profile Pic"
          />
        )}
        <span>
          <img src="/public/Shape Copy.svg" alt="" />
          <select className="citySelector" name="city">
            <option value="New York City">New York City</option>
          </select>
        </span>
      </span>
      <button className="roundButton">
        <img src="./public/notification bell.svg" alt="Notification Icon" />
      </button>
    </header>
  );
}

export default Header;
