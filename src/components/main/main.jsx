import React from 'react';
import PropTypes from 'prop-types';

export const Main = (props) => {
  const {offerCount, offerDescriptions, handleTitleClick} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <h1>For Rent: {offerCount}</h1>

      {offerDescriptions.map((item) => {
        return (
          <article className="cities__place-card place-card" key={item}>
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt={item} />
              </a>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;180</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
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
                  <span style={{'width': `100%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a onClick={handleTitleClick} href="#">{item}</a>
              </h2>
              <p className="place-card__type">Apartment</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

Main.propTypes = {
  offerCount: PropTypes.number,
  offerDescriptions: PropTypes.arrayOf(PropTypes.string),
  handleTitleClick: PropTypes.func
};
