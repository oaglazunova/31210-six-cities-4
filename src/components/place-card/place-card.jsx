import React from 'react';
import PropTypes from 'prop-types';

export const PlaceCard = (props) => {
  const {data, handleTitleClick, handleCardHover} = props;

  const handleMouseOverCard = () => {
    handleCardHover(data.id);
  };

  const handleMouseLeaveCard = () => {
    handleCardHover(null);
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleMouseOverCard} onMouseLeave={handleMouseLeaveCard}>
      {data.mark &&
        <div className="place-card__mark">
          <span>{data.mark}</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={data.imgSrc ? data.imgSrc : `img/no-places.png`} width="260" height="200" alt={data.description} />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">

          <div className="place-card__price">
            <b className="place-card__price-value">{data.priceValue}</b>
            {data.priceText && <span className="place-card__price-text">{data.priceText}</span>}
          </div>

          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{'width': `100%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <a onClick={handleTitleClick} href="#">{data.description}</a>
        </h2>

        <p className="place-card__type">{data.type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    mark: PropTypes.string,
    imgSrc: PropTypes.string,
    priceValue: PropTypes.number.isRequired,
    priceText: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  handleTitleClick: PropTypes.func,
  handleCardHover: PropTypes.func,
};
