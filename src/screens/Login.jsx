import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Login = () => {
  const handlePress = () => {
    console.log('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handlePress} />
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