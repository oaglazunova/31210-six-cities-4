import React from 'react';
import {shallow} from 'enzyme';
import {Main} from './main.jsx';

import testData from './main.test-data.js';

describe(`Main component`, () => {
  it(`callback for title is received`, () => {
    const handleTitleClick = jest.fn();
    const main = shallow(
        <Main offersData={testData} handleTitleClick={handleTitleClick} />
    );

    main.find(`.place-card__name a`).forEach((node) => {
      node.props().onClick();
    });

    expect(handleTitleClick.mock.calls.length).toBe(main.find(`.place-card__name a`).length);
  });

  it(`check the type of offersData`, () => {
    const wrapper = shallow(<Main offersData={testData} handleTitleClick={()=>{}} />);
    expect(Array.isArray(wrapper.prop(`offersData`)));
  });

  it(`images sources are correct`, () => {
    const wrapper = shallow(<Main offersData={testData} handleTitleClick={()=>{}} />);
    expect(wrapper.find(`img`).naturalWidth).not.toEqual(0);
  });
});
