import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'native-base';
import { Formik } from 'formik';
import FormikTextInput from "../../Components/FormikTextInput";
import * as Yup from "yup";

const initialValues = {
  Username: '',
  Email: '',
  Password: '',
  PasswordConfirmation: ''
};

const validationSchema = Yup.object().shape({
  Username: Yup.string()
    .required()
    .min(2, 'Username must have at least 3 characters.')
    .max(30, 'Username cannot exceed 30 characters.'),  
  Email: Yup.string()
    .required('Please enter a valid email address.'),
  Password: Yup.string()
    .required()
    .min(5, 'Password must have more than 5 characters.')
    .max(50, 'Password cannot exceed 50 characters.'),    
  PasswordConfirmation: Yup.string()
    .required('Confirm Password is a required field.')
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
});

const SignUp = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
       <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
        {({ handleSubmit }) => 
          <>
           <FormikTextInput name="Username" placeholder="Username"/>
           <FormikTextInput name="Email" placeholder="Email Address"/>
           <FormikTextInput name="Password" placeholder="Password" secureTextEntry={true}/>
           <FormikTextInput name="PasswordConfirmation" placeholder="Confirm Password" secureTextEntry={true}/>
           <Button colorScheme='blue' size='lg' style={styles.buttonStyle} onPress={handleSubmit}>Create Account</Button>
          </>
        }
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonStyle: {
    padding: 10
  },
});

export default SignUp;