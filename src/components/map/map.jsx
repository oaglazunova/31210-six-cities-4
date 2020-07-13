import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {TOfferPropTypes} from '../app/app.model.js';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._markers = [];
    this._map = null;
  }

  _initMap() {
    const mapContainer = this._mapRef.current;
    const city = [52.38333, 4.9];
    const zoom = 12;

    this._map = leaflet.map(mapContainer, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._map);
  }

  _addMarkers() {
    const {data} = this.props;

    data.forEach((item) => {
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [27, 39],
      });

      const marker = leaflet.marker(item.coordinates, {icon}).addTo(this._map);

      this._markers.push(marker);
    });
  }

  componentDidMount() {
    this._initMap();
    this._addMarkers();
  }

  render() {
    return (
      <section className="/*cities__map*/ map" style={{'width': `100%`, 'height': `100%`}}>
        <div ref={this._mapRef} style={{'width': `100%`, 'height': `100%`}} />
      </section>
    );
  }
}

Map.propTypes = {
  data: PropTypes.arrayOf(TOfferPropTypes),
};

export default Map;
