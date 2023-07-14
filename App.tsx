/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';
import DrawerNavigator from './src/navigations/DrawerNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
