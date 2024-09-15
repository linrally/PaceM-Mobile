import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuContainer from '../components/MenuContainer';
import LinearGradient from 'react-native-linear-gradient';


const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Dashboard content */}
      <View style={styles.paceStats}> 
        <View style={styles.targetContainer}>
          <Text style={styles.targetPaceHeader}>Target Pace</Text>
          <Text style={styles.targetPaceStats}>7'30''</Text>
        </View>
        <View style={styles.targetContainer}>
        <LinearGradient
        colors={['#E24A60', 'rgba(255, 129, 171, 0.95)']} // Gradient colors
        start={{ x: 0.5, y: 0 }} // Start from the top
        end={{ x: 0.5, y: 1 }}   // End at the bottom
        style={styles.gradientBackground}
      >
          <Text style={styles.targetPaceHeader}>Current Pace</Text>
          <Text style={styles.targetPaceStats}>7'56''</Text>
          </LinearGradient>
        </View>
      </View>

      {/* Bottom menu */}
      <View style={styles.menu}>
        <MenuContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1, // This ensures the container fills the screen
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    position: 'relative',
    paddingTop: 100,
  },
  paceStats: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the child horizontally
    alignItems: 'center', // Center the child vertically
    marginTop: 50, // Space from the top
    paddingHorizontal: 20, // Padding around the text for better spacing
    zIndex: 1, // Ensure it's above other components if needed
  },
  targetContainer: {
    display: 'flex',
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    gap: 10,
    width: 130,
    height: 100,
    
  },
  targetPaceHeader: {
    color: 'white',
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
    color: '#F2F2F2', // Text color
    textShadowColor: '#FFF', // Shadow color
    textShadowOffset: { width: 0, height: 0 }, // No horizontal or vertical offset
    textShadowRadius: 14, // The blur radius of the shadow
  },
  targetPaceStats: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
    color: '#F2F2F2', // Text color
    textShadowColor: '#FFF', // Shadow color
    textShadowOffset: { width: 0, height: 0 }, // No horizontal or vertical offset
    textShadowRadius: 14, // The blur radius of the shadow
  },
  currentPaceHeader: {
    color: 'white',
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
    color: '#F2F2F2', // Text color
    textShadowColor: '#FFF', // Shadow color
    textShadowOffset: { width: 0, height: 0 }, // No horizontal or vertical offset
    textShadowRadius: 14, // The blur radius of the shadow
  },
  currentPaceHeader: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
    color: '#F2F2F2', // Text color
    textShadowColor: '#FFF', // Shadow color
    textShadowOffset: { width: 0, height: 0 }, // No horizontal or vertical offset
    textShadowRadius: 14, // The blur radius of the shadow
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
});

export default Dashboard;
