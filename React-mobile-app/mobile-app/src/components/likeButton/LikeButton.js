import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import './LikeButton.scss';
import axios from "axios";

const LikeButton = () => {
  const [liked, setLiked] = useState(null);

  function likeService(){
    const userId = localStorage.getItem('userId');
    axios.post(`https://three-points.herokuapp.com/api/posts/${userId}/like`)
    .then((response)=>{
      if(response.status === 204){
        setLiked(liked + 1);
      }
    })
  }

  return (
    <button
      onClick={() => {
        likeService()
      }}
      className="like-button"
    >
      <div>
        <Icon.Heart />
        { liked && (
          <span>{liked} likes</span>
        )}
      </div>
    </button>
  );
};

export default LikeButton;