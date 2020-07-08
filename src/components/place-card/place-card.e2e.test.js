import React from 'react';
import {shallow} from 'enzyme';
import {PlaceCard} from './place-card.jsx';

import testData from './place-card.test-data.js';

describe(`Place Card component`, () => {
  it(`checks whether callback for title is received`, () => {
    const handleTitleClick = jest.fn();

    const card = shallow(
        <PlaceCard data={testData} handleTitleClick={handleTitleClick} handleCardHover={()=>{}} />
    );

    card.find(`.place-card__name a`).forEach((node) => {
      node.props().onClick();
    });

    expect(handleTitleClick.mock.calls.length).toBe(card.find(`.place-card__name a`).length);
  });

  it(`checks whether callback on hover is received`, () => {
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

  it(`checks whether offers data has a correct type`, () => {
    const wrapper = shallow(<PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={()=>{}} />);
    expect(typeof wrapper.prop(`id`) === `object`);
  });

  it(`check the type of id`, () => {
    const wrapper = shallow(<PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={()=>{}} />);
    expect(typeof wrapper.prop(`id`) === `number`);
  });

  it(`images source is correct`, () => {
    const wrapper = shallow(<PlaceCard data={testData} handleTitleClick={()=>{}} handleCardHover={()=>{}} />);
    expect(wrapper.find(`img`).naturalWidth).not.toEqual(0);
  });
});
