import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button } from 'native-base';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.welcomeImage} source={require("../../Assets/fast-food.png")}/>     
      <View style={styles.buttonContainer}>
      <Button colorScheme='blue' size='lg' style={styles.buttonStyle}>Sign Up</Button>
      <Button colorScheme='blue' size='lg' style={styles.buttonStyle}>Login</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  welcomeImage: {
    alignSelf: 'center',
    width: '100%',
    height: '75%',
    resizeMode: 'contain',
  },
  buttonStyle: {
    padding: 10
  },
});


export default Welcome;