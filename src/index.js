import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {
  const data = {
    offerCount: 1337,
    offerDescriptions: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Small and ugly little space`,
      `Absurdly spacious mansion`,
      `Viewings possible from July 6, 2020. Available from mid-July. Atmospheric apartment located on the 2nd floor of the complex and located right in the center of Amsterdam.`,
      `This neat corner house in Amsterdam Zuid in a good location near the roads and public facilities. The spacious living room has a lot of light, the kitchen is beautiful and practically furnished, spacious entrance, separate toilet, modern bathroom, three spacious bedrooms and there are built-in wardrobes throughout the house. The garden is very sunny and adjacent to the driveway and garage. More info on demand. (rent surcharge possible)`,
      `Note: No agency fees applicable when renting this apartment directly through Housing Agency. Characteristic apartment on the third floor with sunny balcony (south) in the beautiful and quiet Burmanstraat nearby the popular area of the Amstel river. Shops, restaurants, and Pijp within walking distance. Metro line close by.`,
      `NEW OFFER! Spacious unfurnished (furniture on the pictures is from the previous occupants) 2-bedroom apartment with smart lay-out and balcony located in the bustling Amsterdam-West.`
    ]
  };

  ReactDOM.render(
      <App offerCount={data.offerCount} offerDescriptions={data.offerDescriptions} />,
      document.querySelector(`#root`)
  );
};

init();
