import * as React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import DiscoverScreen from '../screens/DiscoverScreen';
import FeedScreen from '../screens/FeedScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Discover';

export default function BottomTabNavigator({ navigation, route }) {
  
  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route),
    headerRight: getHeaderRight(route, navigation),
    headerRightContainerStyle: { marginRight: 10 }
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-checkbox-outline" />,
        }}
      />
      <BottomTab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          title: 'Feed',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" />,
        }}
      />
      <BottomTab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-ribbon" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getRouteName(route) {
  return route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
}

function getHeaderTitle(route) {
  return getRouteName(route);
}

function getHeaderRight(route, navigation) {
  const routeName = getRouteName(route);

  if (routeName == 'Discover') {
    return () => (
      <Button onPress={() => navigation.navigate('Create')} title="Create" />
    );
  }
 }
