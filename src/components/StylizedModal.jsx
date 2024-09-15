import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Button from './Button';
import InputField from './InputField';

const StylizedModal = ({ isVisible, hideModal, content }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={hideModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{content}</Text>
          <InputField
            placeholder="Enter Height"
            keyboardType="numeric"
          />
          <InputField
            placeholder="Enter Height"
            keyboardType="numeric"
          />
          <Button onPress={hideModal}>
            <Text style={styles.submitText}>{'Submit'}</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'rgba(82, 22, 41, 1)',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  submitText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});

export default StylizedModal;
