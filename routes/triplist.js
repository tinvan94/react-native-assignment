import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import TripsList from '../screens/tripslist';
import TripsDetails from '../screens/tripdetail';

const PrimaryNav = createStackNavigator(
    {
      PageHome: { screen: TripsList },
      TripDetails: { screen: TripsDetails }
    },
    {
      // Default config for all screens

      initialRouteName: "PageHome",
    }
  );



export default createAppContainer(PrimaryNav)
