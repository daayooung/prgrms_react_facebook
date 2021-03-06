import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { Home, SignIn, SignUp, UserPostList } from './pages';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" user={user} setUser={setUser} component={SignIn} />
        <PublicLayout path="/signup" component={SignUp} />
        <DefaultLayout path="/u/:name" user={user} component={UserPostList} />
        <DefaultLayout path="/" user={user} setUser={setUser} component={Home} />
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
