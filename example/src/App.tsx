import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import RadioGroupExample from './radio/RadioGroupExample';

export default function App() {
  return (
    <View style={styles.container}>
      <RadioGroupExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
  },
});
