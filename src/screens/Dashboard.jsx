import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MenuContainer from '../components/MenuContainer';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Dashboard content */}

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
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: '100%',
    position:'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    bottom: 0,
    position:'absolute',
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  menuText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Dashboard;
