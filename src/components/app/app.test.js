import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const testData = {
  offerCount: 40,
  offerDescriptions: [
    `Available from mid-July.`,
    `This neat corner house in Amsterdam Zuid in a good location near the roads and public facilities. The spacious living room has a lot of light, the kitchen is beautiful and practically furnished, spacious entrance, separate toilet, modern bathroom, three spacious bedrooms and there are built-in wardrobes throughout the house. The garden is very sunny and adjacent to the driveway and garage. More info on demand. (rent surcharge possible)`,
    `Beautiful & luxurious apartment at great location.`,
    `NEW OFFER!`
  ]
};

describe(`Content rendered`, () => {
  // Step 1: Snapshot test
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <App offerCount={testData.errorCount} offerDescriptions={testData.offerDescriptions} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
