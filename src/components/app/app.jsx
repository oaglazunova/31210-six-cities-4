import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Main} from '../main/main.jsx';
import {Property} from '../property/property.jsx';

import history from '../../history.js';
import {AppRoute} from '../../const.js';

import {TOfferPropTypes} from './app.model.js';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      clickedCard: null,
    };

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  render() {
    const {offersData} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderScreen()}
          </Route>
          <Route exact path={AppRoute.OFFER}>
            <Property data={offersData[this._returnClickedCardIndex(offersData)]} />
          </Route>
          <Route path="/dev-component-property">
            <Property data={offersData[Math.floor(Math.random() * offersData.length)]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _handleTitleClick(id) {
    this.setState({clickedCard: id});
  }

  _returnClickedCardIndex(data) {
    const {clickedCard} = this.state;

    return data.findIndex((item) => item.id === clickedCard);
  }

  _renderScreen() {
    const {offersData} = this.props;
    const {clickedCard} = this.state;

    if (clickedCard === null) {
      return <Main offersData={offersData} handleTitleClick={this._handleTitleClick} />;
    }

    if (clickedCard >= 0) {
      return history.push(AppRoute.OFFER);
    }

    return null;
  }
}

App.propTypes = {
  offersData: PropTypes.arrayOf(TOfferPropTypes),
  onTitleClick: PropTypes.func
};

export default App;
