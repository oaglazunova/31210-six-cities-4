import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

import testData from './map.test-data.js';

describe(`Content rendered`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <Map data={testData} />, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
