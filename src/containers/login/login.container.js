import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Page from '../../components/page/page.component';

import { authenticate, signUpUser } from '../../store/auth/actions';

import styles from './login.module.css';

const LoginContainer = () => {
  const { auth } = useSelector((store) => ({
    auth: store.authStore,
  }), shallowEqual);

  const [showLogin, setShowLogin] = useState(true);

  const [loginCreds, setloginCreds] = useState({
    email: '',
    password: '',
  });

  const [signUpCreds, setSignUpCreds] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    dispatch(authenticate(loginCreds));
  }

  const signUp = (e) => {
    e.preventDefault();
    dispatch(signUpUser(signUpCreds));
  }

  return (
    <Page>
      <div className={styles.landingContainer}>
        {
          showLogin ? (
            <form onSubmit={(e) => login(e)} className={styles.loginSection}>
              <h2>Login</h2>
              <div className={styles.label}>
                Email
              </div>
              <input
                value={loginCreds.email}
                onChange={(e)=> setloginCreds({ ...loginCreds, email: e.target.value })}
                required
                name="email"
                type="email"
              />
              <div className={styles.label}>
                Password
              </div>
              <input
                value={loginCreds.password}
                required
                onChange={(e)=> setloginCreds({ ...loginCreds, password: e.target.value })}
                name="password"
                type="password"
              />
              {auth.loginMessage && (<div className={styles.message}>{auth.loginMessage}</div>)}
              {auth.error && (<div className={styles.error}>{auth.error}</div>)}
              <button type="submit">
                Login
              </button>
              <div onClick={() => setShowLogin(false)} className={styles.bottomText}>
                Don't have an account? Signup here
              </div>
            </form>
          )
            : (
              <form onSubmit={(e) => signUp(e)} className={styles.loginSection}>
                <h2>Sign up</h2>
                <div className={styles.label}>
                  Name
                </div>
                <input
                  value={signUpCreds.name}
                  onChange={(e)=> setSignUpCreds({ ...signUpCreds, name: e.target.value })}
                  required
                  name="name"
                  type="text"
                />
                <div className={styles.label}>
                  Email
                </div>
                <input
                  value={signUpCreds.email}
                  onChange={(e)=> setSignUpCreds({ ...signUpCreds, email: e.target.value })}
                  required
                  name="email"
                  type="email"
                />
                <div className={styles.label}>
                  Password
                </div>
                <input
                  value={signUpCreds.password}
                  required
                  onChange={(e)=> setSignUpCreds({ ...signUpCreds, password: e.target.value })}
                  name="password"
                  type="password"
                />
                {auth.signUpMessage && (<div className={styles.message}>{auth.signUpMessage}</div>)}
                {auth.error && (<div className={styles.error}>{auth.error}</div>)}
                <button type="submit">
                  Sing up
                </button>
                <div onClick={() => setShowLogin(true)} className={styles.bottomText}>
                  Already have an account? Login here
                </div>
              </form>
            )
        }
      </div>
    </Page>
  );
}

export default LoginContainer;
