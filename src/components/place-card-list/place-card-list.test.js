import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardList from './place-card-list.jsx';

import testData from './place-card-list.test-data.js';

describe(`Content rendered`, () => {
  // Step 1: Snapshot test
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <PlaceCardList offers={testData} handleTitleClick={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
