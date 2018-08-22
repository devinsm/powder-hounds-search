import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PropertyListing.css';

export default class PropertyListing extends Component {
  render() {
    let property = this.props.property;

    let amenities = [];
    const mapOfAmenityNames = {
      aircon: 'Air Conditioning',
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
      <dt key={'floorAreaTerm'}>Floor Area</dt>,
      <dd key={'floorAreaNum'}>{property.floorArea + ' sqm'}</dd>,
      <dt key={'bathroomsTerm'}>Number of Bathrooms</dt>,
      <dd key={'bathroomsNum'}>{property.bathrooms}</dd>,
      <dt key={'villageDistanceTerm'}>Distance to Village Center</dt>,
      <dd key={'villageDistanceNum'}>{property.villageCentreDistanceId + ' m'}</dd>,
      <dt key={'liftsDistanceTerm'}>Distance to Ski Lifts</dt>,
      <dd key={'liftsDistanceNum'}>{property.liftDistanceId + ' m'}</dd>
    ];
    if(amenities.length > 0) {
      attributes.push(
        <dt key={'amenitiesTerm'}>Amenities</dt>,
        <dd key={'amenitiesList'}><ul>{amenities}</ul></dd>
      );
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
            <div className="col-12 col-md-6 text-md-right">
              <dl className="attributes">
                {attributes}
              </dl>
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
