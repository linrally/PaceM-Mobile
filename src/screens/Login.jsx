import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import SpotifyButton from '../components/SpotifyIcon';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI, SPOTIFY_AUTH_ENDPOINT, SPOTIFY_SCOPES } = { // DID NOT USE ENV TODO
  SPOTIFY_CLIENT_ID: "62028a42bb1b4872ac6ff9f2a9bf5451",
  SPOTIFY_REDIRECT_URI: "pulse://dashboard",
  SPOTIFY_AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
  SPOTIFY_SCOPES: "user-read-email user-read-private playlist-read-private"
};

const spotifyAuthURL = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&response_type=code&scope=${SPOTIFY_SCOPES}`;

const Login = ({navigation}) => {
  useEffect(() => {
    const handleDeepLink = async(event) => {
      const { url } = event;
      console.log('Deep link received:', url);
      if (url && url.startsWith('pulse://dashboard')) {
        const urlParts = url.split('?');
        const query = urlParts[1];
        const token = query.slice(5);
        if (token) {
          console.log(token);
          await AsyncStorage.setItem('authToken', token);
          navigation.navigate('About You');
        }
      }
    };
    Linking.addEventListener('url', handleDeepLink);
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  });

  const handlePress = () => {
    console.log(`Request sent to ${spotifyAuthURL}`);
    Linking.openURL(spotifyAuthURL);
  };

  const checkUserId = async () => {
    const userId = await AsyncStorage.getItem('userId');
    if (userId) {
      navigation.navigate('Dashboard');
    }
  };

  useEffect(() => {
    checkUserId();
  }, []);

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/blob-tl.png')} style={styles.blobTL} />
        <Image source={require('../assets/images/blob-br.png')} style={styles.blobBR} />
        <Text style={styles.title}>Sign In</Text>
        <Button onPress={handlePress}>
            <SpotifyButton/>
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingBottom: 100,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    marginBottom: 45,
  },
  blobTL: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 300,
    height: 300,
  },
  blobBR: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 400,
    height: 400,
  },
});

export default Login;
