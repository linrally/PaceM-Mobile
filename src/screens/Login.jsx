import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import SpotifyButton from '../components/SpotifyIcon';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('About You');
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
