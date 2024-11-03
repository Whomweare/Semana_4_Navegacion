import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Users from './Users';
import Settings from './Settings';

export default function NavBar() {

  const drawer = createDrawerNavigator();

  return (
  <NavigationContainer>
  <drawer.Navigator initialRouteName='Home'>
   <drawer.Screen name='Home' component={Home}></drawer.Screen>
   <drawer.Screen name='Users' component={Users}></drawer.Screen>
   <drawer.Screen name='Settings' component={Settings}></drawer.Screen>
  </drawer.Navigator>
  </NavigationContainer>
  )
}