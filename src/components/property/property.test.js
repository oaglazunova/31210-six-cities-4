import React from 'react';
import renderer from 'react-test-renderer';
import {Property} from './property.jsx';

describe(`Content rendered`, () => {
  // Step 1: Snapshot test
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <Property />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
