import React from 'react';

export const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentProposals} = props;

  return <h1>Rent Proposals: {rentProposals}</h1>;
};
