import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation stack
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

// Define a type for the navigation prop
export type NavigationProp = StackNavigationProp<RootStackParamList>;
