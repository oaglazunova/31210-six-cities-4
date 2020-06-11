import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {
  const settings = {
    rentProposals: 1337,
  };

  ReactDOM.render(
      <App rentProposals={settings.rentProposals} />,
      document.querySelector(`#root`)
  );
};

init();
