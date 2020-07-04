import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Main} from '../main/main.jsx';
import {Property} from '../property/property.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._renderApp = this._renderApp.bind(this);
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _renderApp() {
    const {offerCount, offerDescriptions} = this.props;

    return <Main offerCount={offerCount} offerDescriptions={offerDescriptions} handleTitleClick={this._handleTitleClick} />;
  }

  _handleTitleClick() {
    // eslint-disable-next-line no-console
    console.log(`Title is clicked`);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp}
          </Route>
          <Route path="/dev-component-property">
            <Property />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offerCount: PropTypes.number,
  offerDescriptions: PropTypes.arrayOf(PropTypes.string),
  onTitleClick: PropTypes.func
};

export default App;
