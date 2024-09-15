import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const InputField = (props) => {
    return (
        <TextInput
            style={styles.input}
            placeholderTextColor="rgba(255, 162, 198, 0.5)"
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 27,
        borderRadius: 36,
        height: 66,
        width: 330,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        marginBottom: 36,
        borderWidth: 1,
        borderColor: '#ED447C99',
        shadowColor: '#D71354',
        // Add props for IOS
        backgroundColor: '#000',
        elevation: 10,
        color: '#FFA2C6',
    },
});

export default InputField;