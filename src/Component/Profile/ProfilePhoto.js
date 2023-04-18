import React from "react";
import "./ProfilePhoto.css"; // Import CSS file for styling

function ProfilePhoto() {
  return (
    <div className="profile-photo-container">
      <img
        src="work.jpg" // Replace with your own profile photo URL
        alt="Profile"
        className="profile-photo"
      />
    </div>
  );
}

export default ProfilePhoto;
