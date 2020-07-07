import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

import testData from './app.test-data.js';

describe(`Content rendered`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <App offersData={testData} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
