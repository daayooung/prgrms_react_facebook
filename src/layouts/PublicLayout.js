import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { validate } from '../utils/helper';
import css from 'styled-jsx/css';

const PublicLayout = ({ component: Component, user, setUser, ...rest }) => {
  const [userValues, setUserValues] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    profileImage: 'https://slcp.lk/wp-content/uploads/2020/02/no-profile-photo.png',
  });

  const [errors, setErrors] = useState({
    email: true,
    password: true,
    passwordCheck: true,
  });

  const handleChangeUservalues = (e) => {
    const { name, value } = e.target;
    const isTrue = validate(name, value, userValues);

    setErrors((prevState) => ({
      ...prevState,
      [name]: isTrue,
    }));

    if (name === 'profileImage') {
      const fileReader = new FileReader();
      const file = e.target.files[0];
      if (!file.type.includes('image')) {
        e.preventDefault();
        e.target.value = '';
        throw new Error('이미지 파일만 업로드해주세요');
      }
      fileReader.onload = ({ target }) => {
        setUserValues((prevState) => ({
          ...prevState,
          [name]: target.result,
        }));
      };
      // fileReader.readAsDataURL(file);
    } else {
      setUserValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <Route
        {...rest}
        render={(matchProps) => (
          <div className="sign form container">
            <Component
              {...matchProps}
              userValues={userValues}
              setUser={setUser}
              errors={errors}
              onChangeUserValues={handleChangeUservalues}
            />
          </div>
        )}
      />

      <style jsx global>{`
        .sign form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }
        .form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
          margin-bottom: 20px;
        }
        button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }
        .text-help {
          margin-top: 10px;
        }
        .login-here {
          font-weight: 900;
          color: #3a5999;
        }
        .login .new-account {
          font-weight: 900;
          color: #3a5999;
        }
        button.btn {
          margin-top: 25px;
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
        }
        button.btn-secondary {
          background-color: #566888;
        }
        .input-and-err {
          position: relative;
        }
        .err {
          display: none;
          position: absolute;
          bottom: -20px;
          right: 0;
          text-align: right;
          color: #3b5999;
        }
        .err.on {
          display: block;
        }
      `}</style>
    </>
  );
};

const StyledSignForm = css``;

export default PublicLayout;
