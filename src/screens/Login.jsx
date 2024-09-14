import React from 'react';
import { View, StyleSheet } from 'react-native';
import SpotifyButton from '../components/SpotifyButton';

const Login = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <SpotifyButton onPress={handlePress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  }
});

export default Login;