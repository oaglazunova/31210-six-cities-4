import React from 'react';
import {shallow} from 'enzyme';
import {PlaceCard} from './place-card.jsx';

import testData from './place-card.test-data.js';

describe(`Place Card component`, () => {
// Step 1: Test callback on the offer title
  it(`callback for title is received`, () => {
    const handleTitleClick = jest.fn();

    const main = shallow(
        <PlaceCard data={testData} handleTitleClick={handleTitleClick} handleCardHover={()=>{}} />
    );

    main.find(`.place-card__name a`).forEach((node) => {
      node.props().onClick();
    });

    expect(handleTitleClick.mock.calls.length).toBe(main.find(`.place-card__name a`).length);
  });
  // Step 2: Test callback on hover
  it(`callback on hover is received`, () => {
    const handleCardHover = jest.fn();

    const main = shallow(
        <PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={handleCardHover} />
    );

    main.find(`.place-card`).forEach((node) => {
      node.props().onMouseEnter();
    });

    expect(handleCardHover.mock.calls.length).toBe(main.find(`.place-card`).length);
  });
  // Step 3: Unit test - data has a correct type
  it(`check the type of data`, () => {
    const wrapper = shallow(<PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={()=>{}} />);
    expect(typeof wrapper.prop(`id`) === `object`);
  });
  // Step 4: Unit test - id has a correct type
  it(`check the type of id`, () => {
    const wrapper = shallow(<PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={()=>{}} />);
    expect(typeof wrapper.prop(`id`) === `number`);
  });
  // Step 5: Unit test - check if the img scr is correct
  it(`images source is correct`, () => {
    const wrapper = shallow(<PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={()=>{}} />);
    expect(wrapper.find(`img`).naturalWidth).not.toEqual(0);
  });
});
