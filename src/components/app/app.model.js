import PropTypes from "prop-types";

function ratingWithinFive(props, componentName) {
  componentName = componentName || `ANONYMOUS`;

  if (props[`rating`]) {
    let value = props[`rating`];
    if (typeof value === `number`) {
      return (value >= 1 && value <= 5) ? null : new Error(`PropType "rating" in ` + componentName + ` is not within 1 to 5`);
    }
  }
  return null;
}

export const TOfferPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  imgSrc: PropTypes.string,
  gallery: PropTypes.arrayOf(PropTypes.string),
  priceValue: PropTypes.number,
  priceText: PropTypes.string,
  rating: ratingWithinFive,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
  bedrooms: PropTypes.number,
  maxGuests: PropTypes.number,
  utensils: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isSuper: PropTypes.bool,
  }).isRequired,
});
