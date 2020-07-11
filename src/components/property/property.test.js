import React from 'react';
import renderer from 'react-test-renderer';
import {Property} from './property.jsx';

import testData from './property.test-data.js';

describe(`Content rendered`, () => {
  // Step 1: Snapshot test
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <Property data={testData} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
