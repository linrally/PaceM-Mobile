import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MenuSvg from './MenuSvg';

const MenuWithButtons = () => {
  return (
    <View style={styles.container}>
      {/* Background image for the menu */}
      <View style={styles.backgroundImage}>
        <MenuSvg />
      </View>

      {/* <Image source={require('../assets/MenuBG.png')} style={styles.backgroundImage} /> */}

      <View style={styles.buttonContainer}>
        {/* Button 1 */}
        <TouchableOpacity
          onPress={() => console.log('Button 1 Pressed')}
          style={styles.button}>
          <Image
            source={require('../assets/HomeIcon.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        {/* Button 2 */}
        <TouchableOpacity
          onPress={() => console.log('Button 2 Pressed')}
          style={styles.button}>
          <Image
            source={require('../assets/LeftIcon.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        {/* Button 3 */}
        <TouchableOpacity
          onPress={() => console.log('Button 3 Pressed')}
          style={styles.button}>
          <Image
            source={require('../assets/CenterBallIcon.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        {/* Button 4 */}
        <TouchableOpacity
          onPress={() => console.log('Button 4 Pressed')}
          style={styles.button}>
          <Image
            source={require('../assets/RightIcon.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        {/* Button 5 */}
        <TouchableOpacity
          onPress={() => console.log('Button 5 Pressed')}
          style={styles.button}>
          <Image
            source={require('../assets/ProfileIcon.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    // width: '100%',
    // height: '400px',
    // resizeMode: 'cover', // Cover the screen without distorting the image
    width: '494.098px',
    height: '124.405px',
    fill: '#1F060E',

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -5}, // Similar to 0px -5px in CSS
    shadowOpacity: 0.42, // Opacity of the shadow
    shadowRadius: 113, // Blurriness of the shadow

    // Elevation for Android (since Android doesn't support shadow properties)
    elevation: 20, // Elevation value can be adjusted for the depth of the shadow
  },
  buttonContainer: {
    width: '100%',
    height: '100px',
    bottom: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'space-between',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    margin: 10,
  },
  buttonImage: {
    width: 60,
    height: 60, // Adjust button size as necessary
    resizeMode: 'contain', // Maintain the aspect ratio of button images
  },
});

export default MenuWithButtons;
