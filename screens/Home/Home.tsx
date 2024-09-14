// components/Home.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../navigation/types';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('spotify_token');
      if (!token) {
        navigation.navigate('Login');
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [navigation]);

  if (!isAuthenticated) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Welcome! You are logged in with Spotify.</Text>
      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem('spotify_token');
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default Home;
