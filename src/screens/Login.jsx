import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import SpotifyButton from '../components/SpotifyIcon';
import Button from '../components/Button';
import { authorize } from 'react-native-app-auth';
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URL } from 'react-native-dotenv';
import { NativeModules } from 'react-native';

console.log(NativeModules);

const config = {
  clientId: String(SPOTIFY_CLIENT_ID), // Your Spotify app's client ID
  redirectUrl: String(SPOTIFY_REDIRECT_URL), // The redirect URL you set in the Spotify developer dashboard
  scopes: ['user-read-email', 'playlist-modify-public', 'user-read-private'], // Spotify API scopes you need
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};


async function authenticateWithSpotify() {
  try {
    const authState = await authorize(config);
    console.log('Authentication Successful:', authState);
  } catch (error) {
    console.error('Failed to authenticate with Spotify:', error);
  }
}

const Login = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('AboutYou'); // Updated name to match the Stack.Screen
  };

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/blob-tl.png')} style={styles.blobTL} />
        <Image source={require('../assets/images/blob-br.png')} style={styles.blobBR} />
        <Text style={styles.title}>Sign In</Text>
        <Button onPress={authenticateWithSpotify}>
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
