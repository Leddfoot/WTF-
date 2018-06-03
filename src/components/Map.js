import React from 'react';
import { FormattedMessage } from "react-intl";



const Map = () => (
  <div className="map">
    <h1>
    <FormattedMessage id="map.mainText" defaultMessage="Something ain't right his is a default message" />
    </h1>
    <h1>
    NOTE TO SELF: THE GOOGLE MAPS API WILL NOT WORK AFTER JUNE 11TH WITHOUT SIGNING UP with BILLING INFO,
    THE NEW ALTERNATIVE IS MAPBOX, THE INFO IS IN THE /documents/mapbox info folder.
    </h1>


  </div>


);

export default Map;
