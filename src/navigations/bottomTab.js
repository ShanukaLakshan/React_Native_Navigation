import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../constants';
import Login from '../screens/auth/Login';
import Settings from '../screens/home/Settings';
import SettingsDetail from '../screens/home/SettingsDetail';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName={ROUTES.LOGIN}>
      <Tab.Screen name={ROUTES.LOGIN} component={Login} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Tab.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
