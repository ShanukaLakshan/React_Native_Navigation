import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home, Wallet, Notifications} from '../screens';
import SettingsNavigator from './SettingsNavigator';
import {COLORS, ROUTES} from '../constants';

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      style={styles.tabBarStyle}
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ROUTES.LIVE_SCREEN) {
            iconName = focused ? 'videocam' : 'videocam-outline';
          } else if (route.name === ROUTES.NOTIFICATION_SCREEN) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === ROUTES.MAP_SCREEN) {
            iconName = focused ? 'earth' : 'earth-outline';
          } else if (route.name === ROUTES.VR_SCREEN) {
            iconName = focused ? 'cube' : 'cube-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.white,
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontSize: 12,
        },
        tabBarActiveBackgroundColor: COLORS.black,
        tabBarInactiveBackgroundColor: COLORS.black,
        tabBarTabStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.black,
        },
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
        }}
        name={ROUTES.HOME_TAB}
        component={Home}
      />
      <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    height: 60,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 2,
  },
});

export default BottomTabNavigator;
