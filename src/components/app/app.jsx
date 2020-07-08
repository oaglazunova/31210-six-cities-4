import React from 'react';
import PropTypes from 'prop-types';
import {Main} from '../main/main.jsx';

const _handleTitleClick = () => {
  // eslint-disable-next-line no-console
  console.log(`Title is clicked`);
};

export const App = (props) => {
  const {offersData} = props;

  return <Main offersData={offersData} handleTitleClick={_handleTitleClick} />;
};

App.propTypes = {
  offersData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.string,
    imgSrc: PropTypes.string,
    priceValue: PropTypes.number.isRequired,
    priceText: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string.isRequired,
    type: PropTypes.string
  })),
  onTitleClick: PropTypes.func
};
