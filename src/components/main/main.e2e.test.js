import React from 'react';
import {shallow} from 'enzyme';
import {Main} from './main.jsx';

const testData = {
  offerCount: 40,
  offerDescriptions: [
    `Available from mid-July.`,
    `This neat corner house in Amsterdam Zuid in a good location near the roads and public facilities. The spacious living room has a lot of light, the kitchen is beautiful and practically furnished, spacious entrance, separate toilet, modern bathroom, three spacious bedrooms and there are built-in wardrobes throughout the house. The garden is very sunny and adjacent to the driveway and garage. More info on demand. (rent surcharge possible)`,
    `Beautiful & luxurious apartment at great location.`,
    `NEW OFFER!`
  ]
};

describe(`Main component`, () => {
// Step 1: Test callback on the rent offer title
  it(`callback for title is received`, () => {
    const handleTitleClick = jest.fn();

    const main = shallow(
        <Main
          offerCount={testData.errorCount} offerDescriptions={testData.offerDescriptions}
          handleTitleClick={handleTitleClick}
        />
    );

    main.find(`.place-card__name a`).forEach((node) => {
      node.props().onClick();
    });

    expect(handleTitleClick.mock.calls.length).toBe(main.find(`.place-card__name a`).length);
  });
  // Step 2: Unit test - offerCount has a correct type
  it(`check the type of offerCount`, () => {
    const wrapper = shallow(<Main offerCount={testData.errorCount} offerDescriptions={testData.offerDescriptions} handleTitleClick={()=>{}} />);
    expect(typeof wrapper.prop(`offerCount`) === `number`);
  });
  // Step 3: Unit test - offerDescriptions has a correct type
  it(`check the type of offerDescriptions`, () => {
    const wrapper = shallow(<Main offerCount={testData.errorCount} offerDescriptions={testData.offerDescriptions} handleTitleClick={()=>{}} />);
    expect(Array.isArray(typeof wrapper.prop(`offerDescriptions`)));
  });
  // Step 4: Unit test - check if the logo img scr is correct
  it(`images sources are correct`, () => {
    const wrapper = shallow(<Main offerCount={testData.errorCount} offerDescriptions={testData.offerDescriptions} handleTitleClick={()=>{}} />);
    expect(wrapper.find(`img`).naturalWidth).not.toEqual(0);
  });
});