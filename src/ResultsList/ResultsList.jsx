import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PropertyListing from './PropertyListing';

export default class ResultsList extends Component {
  render() {
    let propertiesJSX = [];
    for(let property of this.props.properties) {
      propertiesJSX.push(<PropertyListing property={property} key={property.id} />);
    }

    return (
      <div className="ResultsList container">
        {propertiesJSX}
      </div>
    );
  }
}

ResultsList.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired
}
