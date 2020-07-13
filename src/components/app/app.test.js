import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

import testData from './app.test-data.js';

describe(`Content rendered`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <App offersData={testData} />, {
          // workaround for leaflet map testing - to get rid of Error: Uncaught [Error: Map container not found.]
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
