import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';

import testData from './main.test-data.js';

describe(`Content rendered`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <Main offersData={testData} handleTitleClick={()=>{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
