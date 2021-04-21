import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    color: '#d73a4a',
    paddingLeft: 20
  },
  textInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    color: 'white',
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  textInputPlaceholder: {
    color: 'grey'
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  
  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.textInput}
        placeholderTextColor={styles.textInputPlaceholder.color}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;