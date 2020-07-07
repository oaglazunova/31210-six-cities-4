import React from 'react';
import {shallow} from 'enzyme';
import PlaceCardList from './place-card-list.jsx';

import testData from './place-card-list.test-data.js';

describe(`Main component`, () => {
  it(`callback for title is received`, () => {
    const handleTitleClick = jest.fn();

    const main = shallow(
        <PlaceCardList offers={testData} handleTitleClick={handleTitleClick}/>
    );

    main.find(`.place-card__name a`).forEach((node) => {
      node.props().onClick();
    });

    expect(handleTitleClick.mock.calls.length).toBe(main.find(`.place-card__name a`).length);
  });

  it(`check the type of data`, () => {
    const wrapper = shallow(<PlaceCardList offers={testData} handleTitleClick={()=>{}} />);
    expect(Array.isArray(wrapper.prop(`data`)));
  });

  it(`that images sources are correct`, () => {
    const wrapper = shallow(<PlaceCardList offers={testData} handleTitleClick={()=>{}} />);
    expect(wrapper.find(`img`).naturalWidth).not.toEqual(0);
  });
});
