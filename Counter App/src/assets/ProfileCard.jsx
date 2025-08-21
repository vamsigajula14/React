import React, { useState } from "react";

function ProfileCard({ name, age, bio, image, initialFollowers }) {

  const [isFollowing, setIsFollowing] = useState(false);
  
  const [followers, setFollowers] = useState(initialFollowers);

  const handleFollowClick = () => {
    if (isFollowing) {
      setFollowers(followers - 1);
    } else {
      setFollowers(followers + 1); 
    }
    setIsFollowing(!isFollowing); 
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={image}
        alt="Profile"
        style={{ borderRadius: "50%", width: "100px", marginBottom: "15px" }}
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
      <p><strong>Followers:</strong> {followers}</p>
      <button
        onClick={handleFollowClick}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: isFollowing ? "red" : "green",
          color: "white",
          cursor: "pointer"
        }}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
