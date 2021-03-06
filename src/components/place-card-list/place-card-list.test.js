import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardList from './place-card-list.jsx';

import testData from './place-card-list.test-data.js';

describe(`Content rendered`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <PlaceCardList offersData={testData} handleTitleClick={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
