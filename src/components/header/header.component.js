import React from 'react';
import { FlowIcon, UserIcon } from '../icons/icon.component';

import styles from './header.module.css';

type Props = {

};

const Header = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.icon}>
        <FlowIcon />
        automate.flow
      </div>
      <div className={styles.navlinks}>
        <a href="#profile" className={styles.username}>
          <UserIcon/> Nagesh Sanika
        </a>
        <a href="#logout" className={styles.logout}>
          Logout
        </a>
      </div>
    </div>
  );
}

export default Header;
