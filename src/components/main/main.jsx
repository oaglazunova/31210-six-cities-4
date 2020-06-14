import React from 'react';
import PropTypes from 'prop-types';

export const Main = (props) => {
  const {proposalsCount, proposalsDescription} = props;

  return <div>
    <h1>Rent Proposals: {proposalsCount}</h1>

    {proposalsDescription.map((item) => {
      return (
        <div key={item}>
          <h2>{item}</h2>
          <img alt={item} src="img/studio-01.jpg" />
        </div>
      );
    })}
  </div>;
};

Main.propTypes = {
  proposalsCount: PropTypes.number,
  proposalsDescription: PropTypes.string,
};
