import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Page from '../../components/page/page.component';

import { authenticate } from '../../store/auth/actions';

import styles from './login.module.css';

const LoginContainer = () => {
  const { auth } = useSelector((store) => ({
    auth: store.authStore,
  }), shallowEqual);

  const [showLogin, setShowLogin] = useState(true);

  console.log(auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authenticate({}));
  }, [dispatch]);

  const login = () => {

  }
  const signUp = () => {
    
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
            <input required name="email" type="email" />
            <div className={styles.label}>
              Password
            </div>
            <input required name="password" type="password" />
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
              <input required name="name" type="text" />
              <div className={styles.label}>
                Email
              </div>
              <input required name="email" type="email" />
              <div className={styles.label}>
                Password
              </div>
              <input required name="password" type="password" />
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
