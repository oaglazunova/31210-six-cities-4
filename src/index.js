import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

import offersData from './mocks/offers.js';

const init = () => {
  ReactDOM.render(
      <App offersData={offersData} />,
      document.querySelector(`#root`)
  );
};

init();
