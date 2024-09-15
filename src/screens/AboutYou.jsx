import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';

const AboutYou = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/blob-tl.png')} style={styles.blobTL} />
        <Image source={require('../assets/images/blob-br.png')} style={styles.blobBR} />
        <Text style={styles.title}>About You</Text>
        <InputField placeholder="Gender"/>
        <InputField placeholder="Height"/>
        <InputField placeholder="Weight"/>
        <Button onPress={handlePress}>
            <Text style={styles.submitText}>Submit</Text>
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
  title: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    marginBottom: 45,
  },
  submitText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  inputField: {
    marginBottom: 24,
  },
});

export default AboutYou;
