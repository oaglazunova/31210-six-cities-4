import React from 'react';
import PropTypes from 'prop-types';
import {Main} from '../main/main.jsx';

const handleTitleClick = () => {
  // eslint-disable-next-line no-console
  console.log(`Title is clicked`);
};

export const App = (props) => {
  const {offerCount, offerDescriptions} = props;

  return <Main offerCount={offerCount} offerDescriptions={offerDescriptions} handleTitleClick={handleTitleClick}/>;
};

App.propTypes = {
  offerCount: PropTypes.number,
  offerDescriptions: PropTypes.arrayOf(PropTypes.string),
  onTitleClick: PropTypes.func
};
