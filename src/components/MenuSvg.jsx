import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, StyleSheet, Text } from 'react-native';

const MenuSvg = () => {
  return (
    <View style={styles.container}>
      <Svg width="430" height="252" viewBox="0 0 430 252" fill="none">
        <Path
          d="M233.398 120.543C250.879 125.698 267.959 134.361 286.185 134.361H431.207C448.328 134.361 462.207 148.24 462.207 165.361V221.159C462.207 238.28 448.328 252.159 431.207 252.159H-0.890259C-18.0111 252.159 -31.8902 238.28 -31.8902 221.159V165.361C-31.8902 148.24 -18.0111 134.361 -0.890244 134.361H145.22C163.445 134.361 180.526 125.698 198.006 120.543C203.618 118.888 209.556 118 215.702 118C221.848 118 227.787 118.888 233.398 120.543Z"
          fill="#1F060E"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#ED447C', // Pink shadow color (deep pink)
    shadowOffset: { width: 0, height: 10 }, // No offset for equal glow on all sides
    shadowOpacity: 1, // Full opacity for strong glow
    shadowRadius: 20, // The blur radius of the glow
    elevation: 20, // Android shadow equivalent (to support Android)
  },
});

export default MenuSvg;
