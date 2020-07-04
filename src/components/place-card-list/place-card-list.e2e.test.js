import React from 'react';
import {shallow} from 'enzyme';
import PlaceCardList from './place-card-list.jsx';

import testData from './place-card-list.test-data.js';

describe(`Main component`, () => {
// Step 1: Test callback on the rent offer title
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
  // Step 2: Unit test - offers data has a correct type
  it(`check the type of data`, () => {
    const wrapper = shallow(<PlaceCardList offers={testData} handleTitleClick={()=>{}} />);
    expect(Array.isArray(wrapper.prop(`data`)));
  });
  // Step 3: Unit test - check if the logo img scr is correct
  it(`images sources are correct`, () => {
    const wrapper = shallow(<PlaceCardList offers={testData} handleTitleClick={()=>{}} />);
    expect(wrapper.find(`img`).naturalWidth).not.toEqual(0);
  });
});
