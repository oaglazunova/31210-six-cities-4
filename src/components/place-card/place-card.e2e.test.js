import React from 'react';
import {shallow} from 'enzyme';
import {PlaceCard} from './place-card.jsx';

import testData from './place-card.test-data.js';

describe(`Place Card component`, () => {
// Step 1: Test callback on the offer title
  it(`callback for title is received`, () => {
    const handleTitleClick = jest.fn();

    const card = shallow(
        <PlaceCard data={testData} handleTitleClick={handleTitleClick} handleCardHover={()=>{}} />
    );

    card.find(`.place-card__name a`).forEach((node) => {
      node.props().onClick();
    });

    expect(handleTitleClick.mock.calls.length).toBe(card.find(`.place-card__name a`).length);
  });
  // Step 2: Test callback on hover
  it(`callback on hover is received`, () => {
    const handleCardHover = jest.fn();

    const card = shallow(
        <PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={handleCardHover} />
    );

    const cardElement = card.find(`.place-card`);

    cardElement.props().onMouseEnter();
    cardElement.props().onMouseLeave();

    expect(handleCardHover).toHaveBeenCalledTimes(2);
    expect(handleCardHover).toHaveBeenCalledWith(501);
    expect(handleCardHover).toHaveBeenLastCalledWith(null);
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
