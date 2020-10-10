import React from 'react';
import Header from '../header/header.component';

type Props = {
  children: Node,
};

const Page = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Page;
