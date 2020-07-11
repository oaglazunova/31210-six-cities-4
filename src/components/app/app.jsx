import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Main} from '../main/main.jsx';
import {Property} from '../property/property.jsx';

import {TOfferPropTypes} from '../app/app.model.js';

export const App = (props) => {
  const {offersData} = props;

  const _handleTitleClick = () => {
    // eslint-disable-next-line no-console
    console.log(`Title is clicked`);
  };

  const _renderMain = () => {
    return <Main offersData={offersData} handleTitleClick={_handleTitleClick} />;
  };

  const _renderProperty = () => {
    return <Property data={offersData[0]} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderMain}
        </Route>
        <Route path="/dev-component-property">
          {_renderProperty}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersData: PropTypes.arrayOf(TOfferPropTypes),
  onTitleClick: PropTypes.func
};

export default App;
