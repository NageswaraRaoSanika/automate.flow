import React from 'react';

type Props = {
  match: Object,
}

const Workflow = (props: Props) => {
  const { match : { params : { id }} } = props;

  return (
    <div>
      {id}
    </div>
  );
};

export default Workflow;
