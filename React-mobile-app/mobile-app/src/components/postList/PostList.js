import React from 'react';
import Post from '../post/Post';

function PostList (props){
    return <>
      {props.posts.map((post) => 
          <Post card={post} key={post.id}/>
      )}
      </>
  }


export default PostList;