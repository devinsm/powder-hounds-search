import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PropertyListing extends Component {
  render() {
    let property = this.props.property;

    let amenities = [];
    const mapOfAmenityNames = {
      aricon: 'Air Conditioning',
      appletv: 'Apple TV',
      btspeakers: 'Bluetooth Speakers',
      cardkey: 'Card Key Access',
      chromecast: 'Chromecast',
      fireplace: 'Fireplace',
      hdtv: 'HD TV',
      jacuzzi: 'Jacuzzi',
      nespresso: 'Nespresso Machine'
    };

    for(let prop in property.amenities) {
      if(property.amenities.hasOwnProperty(prop) && property.amenities[prop]) {
        amenities.push(
          <li key={prop}>
            {mapOfAmenityNames[prop]}
          </li>
        );
      }
    }

    let attributes = [
      <li key={'floorArea'}>{'Floor Area: ' + property.floorArea + ' sqm'}</li>,
      <li key={'bathrooms'}>{'Number of Bathrooms: ' + property.bathrooms}</li>,
      <li key={'villageDistance'}>{'Distance to Village Center: ' + property.villageCentreDistanceId + ' m'}</li>,
      <li key={'liftsDistance'}>{'Distance to Ski Lifts: ' + property.liftDistanceId + ' m'}</li>
    ];
    if(amenities.length > 0) {
      attributes.push(<li key={'amenities'}><ul>{amenities}</ul></li>)
    }

    return (
      <div className="PropertyListing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>{property.name}</h3>
              <p className="description">
                {property.description}
              </p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="attributes">
                {attributes}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PropertyListing.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liftDistanceId: PropTypes.number.isRequired,
    villageCentreDistanceId: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    amenities: PropTypes.shape({
      aircon: PropTypes.bool,
      appletv: PropTypes.bool,
      btspeakers: PropTypes.bool,
      cardkey: PropTypes.bool,
      chromecast: PropTypes.bool,
      fireplace: PropTypes.bool,
      hdtv: PropTypes.bool,
      jacuzzi: PropTypes.bool,
      nespresso: PropTypes.bool
    }).isRequired,
    floorArea: PropTypes.number.isRequired
  }).isRequired
}
