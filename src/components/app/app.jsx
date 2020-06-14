import React from 'react';
import PropTypes from 'prop-types';
import {Main} from '../main/main.jsx';

export const App = (props) => {
  const {proposalsCount, proposalsDescription} = props;

  return <Main proposalsCount={proposalsCount} proposalsDescription={proposalsDescription} />;
};

App.propTypes = {
  proposalsCount: PropTypes.number,
  proposalsDescription: PropTypes.string,
};
