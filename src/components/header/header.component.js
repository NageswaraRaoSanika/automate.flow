import React from 'react';
import { FlowIcon, UserIcon } from '../icons/icon.component';
import { checkAuth, logout } from '../../store/auth/actions';

import styles from './header.module.css';

type Props = {

};

const Header = (props: Props) => {
  const user = checkAuth();
  return (
    <div className={styles.navbar}>
      <div className={styles.icon}>
        <FlowIcon />
        automate.flow
      </div>
      {
        user &&
        (<div className={styles.navlinks}>
          <a href="#profile" className={styles.username}>
            <UserIcon /> {user?.name}
          </a>
          <a onClick={() => logout()} href="/" className={styles.logout}>
            Logout
        </a>
        </div>)
      }
    </div>
  );
}

export default Header;
