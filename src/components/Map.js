import React from 'react';
import { FormattedMessage } from "react-intl";



const Map = () => (
  <div className="map content-container-with-image">
    <h1>
      <FormattedMessage id="map.mainText" defaultMessage="Behold ... The Map" />
    </h1>
    
    <h3>Get an Overview of where all the action is at</h3>
    <img src="/images/mapoverview.png" alt="A map showing islands, water, and land. Some points are marked with a heat gradient to show where fish are biting"/>
    <h3>Ok. So many fisherman ain't gonna show you where their "honeyhole" is. But they may be nice enough to mark spots on the map where the fish are not biting! At least you will know where not to fish!</h3>
    <img src="/images/mapcoldsample.png" alt="A map showing islands, water, and land. Some points are marked with a heat gradient to show where fish are not biting"/>
    <h3>Get criticals details about a catch at a location, including the type, depth, bait, and time when a fish is caught.</h3>
    <img src="/images/details.png" alt="A map with a textbox overlay that gives details about a fish that was caught, like the type of fish, depth caught, weight, and time"/>
    <h3>There are plans for other cool features, like setting the heatmap to show emphasis where the bigger fish are at, or by where the most fish are caught. But first, tests need to be written so that the site is not buggy and sucky.</h3>




      </div>


      );

      export default Map;
