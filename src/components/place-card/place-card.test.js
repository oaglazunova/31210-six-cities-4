import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceCard} from './place-card.jsx';

import testData from './place-card.test-data.js';

describe(`Place Card content rendered`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
