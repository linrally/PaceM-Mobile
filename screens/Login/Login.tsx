// components/Login.tsx
import React from 'react';
import { View, Button, Text, Linking } from 'react-native';
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URL } from '@env';
import { SPOTIFY_AUTH_ENDPOINT, SPOTIFY_SCOPES } from '../../config/spotifyConfig';

const Login = () => {
  const spotifyAuthURL = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URL}&response_type=code&scope=${SPOTIFY_SCOPES}`;

  const handleLogin = () => {
    Linking.openURL(spotifyAuthURL);
  };

  return (
    <View>
      <Text>Sign in with Spotify</Text>
      <Button title="Login with Spotify" onPress={handleLogin} />
    </View>
  );
};

export default Login;
