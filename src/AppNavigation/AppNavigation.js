import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ChartTest from '../Screens/ChartTest';
import List from '../Screens/ListTest';
import StatisticsChart from '../Screens/StatisticsCharts';
import Eod from '../Screens/EOD';
import CallScreen from '../Screens/CallScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation(AppState){
    return (
        <NavigationContainer>
            <Stack.Navigator>

            {/* <Stack.Screen name="End Of Day">
             {props => <Eod {...props} extraData={AppState} />}
          </Stack.Screen> */}
            {/* <Stack.Screen name="Statistics (30) MIN">
             {props => <StatisticsChart {...props} extraData={AppState} />}
          </Stack.Screen> */}

            {/* <Stack.Screen name="Summary">
             {props => <List {...props} extraData={AppState} />}
          </Stack.Screen> */}

            <Stack.Screen name="Calls">
             {props => <CallScreen {...props} extraData={AppState} />}
             </Stack.Screen>     
            {/* <Stack.Screen name="Charts">
             {props => <ChartTest {...props} extraData={AppState} />}
          </Stack.Screen> */}
               
          {/* <Stack.Screen name="All Notes">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
             {props => <Home {...props} extraData={AppState} />}
          </Stack.Screen> */}


          </Stack.Navigator>
        </NavigationContainer>
      );

}