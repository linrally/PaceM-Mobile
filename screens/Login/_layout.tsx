import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REDIRECT_URL,
} from '@env';
import {SPOTIFY_TOKEN_ENDPOINT} from '../../config/spotifyConfig';
import {Linking} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const navigation = useNavigation<NavigationProp>(); // Specify the type for useNavigation

  useEffect(() => {
    const handleDeepLink = async (event: {url: string}) => {
      const {url} = event;

      // Extract the authorization code from the URL
      const regex = /code=([^&]*)/;
      const match = url.match(regex);

      if (match) {
        const code = match[1];

        try {
          // Exchange the authorization code for an access token
          const response = await axios.post(SPOTIFY_TOKEN_ENDPOINT, {
            grant_type: 'authorization_code',
            code,
            redirect_uri: SPOTIFY_REDIRECT_URL,
            client_id: SPOTIFY_CLIENT_ID,
            client_secret: SPOTIFY_CLIENT_SECRET,
          });

          const {access_token} = response.data;

          // Store the access token in AsyncStorage
          await AsyncStorage.setItem('spotify_token', access_token);

          // Navigate to the Home screen (TypeScript now knows about 'Home')
          navigation.navigate('Home');
        } catch (error) {
          console.error('Spotify token exchange failed:', error);
        }
      }
    };

    // Subscribe to deep linking events
    const subscription = Linking.addEventListener('url', handleDeepLink);

    // Clean up the event listener
    return () => {
      subscription.remove();
    };
  }, [navigation]);

  return <>{children}</>;
};

export default Layout;
