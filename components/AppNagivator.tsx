import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import { RootStackParamList } from '../navigation/types';

const Stack = createStackNavigator<RootStackParamList>(); // Specify the type of the stack

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
