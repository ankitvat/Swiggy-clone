import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import React, {useEffect} from 'react';
import {scale} from './src/utils/fonts';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigators/MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
