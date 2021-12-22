import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppLovinMAX from 'react-native-applovin-max';
import Routes from './routes';

const App = () => {
  AppLovinMAX.initialize(
    'x6Dgg1LMuG5stk7FsgX3e1Re8bo-b4UTxszaJW7KWiTBEiUZ9QKpHyPUEtoaR6R2Awg1-PNSaK2sn0FmztDH-z',
    configuration => {},
  );
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
