import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

import testData from './main.test-data.js';

describe(`Content rendered`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <Main offersData={testData} handleTitleClick={()=>{}} />, {
        // workaround for leaflet map testing - to get rid of Error: Uncaught [Error: Map container not found.]
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
