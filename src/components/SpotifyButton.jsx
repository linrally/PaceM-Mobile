import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SpotifyIcon from '../assets/spotify.svg';

const SpotifyButton = ({ onPress }) => {
    return (
        <Pressable
            style={styles.buttonContainer}
            onPress={onPress}
        >
            <LinearGradient
                colors={['#E14176F2', '#9B091E']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
               <SpotifyIcon width={100} height={100}/>
            </LinearGradient>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 230,
        height: 52,
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#e14176',
        borderStyle: 'solid',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SpotifyButton;
