import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {
  const data = {
    proposalsCount: 1337,
    proposalsDescription: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Small and ugly little space`,
      `Absurdly spacious mansion`
    ]
  };

  ReactDOM.render(
      <App rentProposals={data.proposalsCount} proposalsDescription={data.proposalsDescription} />,
      document.querySelector(`#root`)
  );
};

init();
