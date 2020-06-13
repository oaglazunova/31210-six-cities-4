import React from 'react';
import PropTypes from 'prop-types';

export const Main = (props) => {
  const {proposalsCount, proposalsDescription} = props;

  return <div>
    <h1>Rent Proposals: {proposalsCount}</h1>

    {proposalsDescription.map((i, key) => {
      return (
        <div key={key}>
          <h2>{i}</h2>
          <img alt={i} src="img/studio-01.jpg" />
        </div>
      );
    })}
  </div>;
};

Main.propTypes = {
  proposalsCount: PropTypes.number,
  proposalsDescription: PropTypes.string,
};
