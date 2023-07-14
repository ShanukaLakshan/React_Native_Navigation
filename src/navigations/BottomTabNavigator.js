import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {COLORS, ROUTES} from '../constants';
import {Home, Wallet, Notifications, Settings} from '../screens';
import SettingsNavigator from './SettingsNavigator';
import CustomTabBarButton from '../components/CustomTabBarButton';
import {useNavigation} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.tabBarStyle}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, focused}) => {
          let iconName;
          let label;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'home' : 'home';
            label = 'Home';
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? 'cogs' : 'cogs';
            label = 'Settings';
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? 'credit-card' : 'credit-card';
            label = 'Wallet';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused ? 'bell' : 'bell';
            label = 'Notifications';
          }

          return (
            <View style={styles.tabIconContainer}>
              <FontAwesome name={iconName} size={22} color={color} />
              <Text style={[styles.tabLabel, {color}]}>{label}</Text>
            </View>
          );
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        options={{
          tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.WALLET}
        component={Wallet}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="settings" {...props} />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <FontAwesome
                  name={Platform.OS === 'ios' ? 'bars' : 'bars'}
                  size={30}
                  color={COLORS.dark}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    height: 92,
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
