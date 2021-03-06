import React from 'react';
import Post from '../components/post/Post';

const UserPostList = ({ posts }) => {
  const userName = location.pathname.split('/')[2];
  const userPosts = posts.filter((post) => post.writer.name === userName);

  return (
    <div>
      {userPosts.map((post) => (
        <Post key={post.seq} post={post} />
      ))}
    </div>
  );
};

export default UserPostList;
