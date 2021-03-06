import React from 'react';
import css from 'styled-jsx/css';
import CommentItem from './CommentItem';

const CommentList = ({ commentList }) => {
  return (
    <>
      <ul className="comment-list">
        {commentList.map((comment) => (
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
