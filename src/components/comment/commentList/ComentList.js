import React, { Component } from 'react';
import css from 'styled-jsx/css';
import CommentItem from './CommentItem';

const CommentList = ({ post }) => {
  const comments = post.commentList;

  return (
    <>
      <ul className="comment-list">
        {comments.map((comment) => (
          <CommentItem key={comment.seq} comment={comment} />
        ))}
      </ul>
      <style jsx>{StyledCommentList}</style>
    </>
  );
};

const StyledCommentList = css`
  ul.comment-list {
    padding: 0;
    list-style: none;
  }
`;

export default CommentList;