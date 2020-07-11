import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';

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
  handleTitleClick: PropTypes.func
};

export default PlaceCardList;
