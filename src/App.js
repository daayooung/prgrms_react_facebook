import React, { useState, useCallback, useRef } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { Home, Login, SignUp } from './pages';
import { user as userInfo } from './api/User.json';

const App = () => {
  const [user, setUser] = useState(userInfo);

  // Post 작성
  const [posts, setPosts] = useState([]);
  const nextSeq = useRef(posts.length + 1);
  const createAt = new Date().toString();

  const onInsertPost = useCallback(
    (contents, comments) => {
      const { seq, name } = user[0];
      const post = {
        seq: nextSeq.current,
        writer: {
          seq,
          name,
        },
        contents,
        createAt: createAt,
        likes: 0,
        comments,
        likesOfMe: false,
        commentList: [],
      };
      setPosts(posts.concat(post));
      nextSeq.current += 1;
      // Q localStorage 해결 못함
      if (posts) {
        localStorage.setItem(name, JSON.stringify(posts));
      }
      const getPost = JSON.parse(localStorage.getItem(name));
      // console.log(getPost);
      // setPosts(getPost);
    },
    [posts]
  );

  const HomePage = () => <Home user={user} posts={posts} onInsertPost={onInsertPost} />;
  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" component={Login} />
        <PublicLayout path="/signup" component={SignUp} />
        <DefaultLayout path="/" component={HomePage} />
      </Switch>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic,
            '돋움', Dotum, sans-serif;
          color: #202b3d;
          background-color: #e9eaed;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }
        body {
          padding: 100px 0;
        }
        .container {
          max-width: 600px;
        }
      `}</style>
    </BrowserRouter>
  );
};

export default App;
