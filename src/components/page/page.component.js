import React from 'react';
import Header from '../header/header.component';
import styles from './page.module.css';

type Props = {
  children: Node,
};

const Page = (props: Props) => {
  return (
    <div>
      <Header />
      <div className={styles.pageContent}>
        {props.children}
      </div>
    </div>
  );
};

export default Page;
