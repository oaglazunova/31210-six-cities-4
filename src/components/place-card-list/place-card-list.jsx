import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';

import {TOfferPropTypes} from '../app/app.model.js';

class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null,
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  render() {
    const {offersData, handleTitleClick} = this.props;

    return (
      <>
        {offersData.map((offer) => {
          return (
            <PlaceCard key={offer.id}
              data={offer}
              handleTitleClick={handleTitleClick}
              handleCardHover={this._handleCardHover} />
          );
        })}
      </>
    );
  }

  _handleCardHover(id) {
    this.setState({hoveredCard: id});
  }
}

PlaceCardList.propTypes = {
  offersData: PropTypes.arrayOf(TOfferPropTypes),
  handleTitleClick: PropTypes.func,
};

export default PlaceCardList;
