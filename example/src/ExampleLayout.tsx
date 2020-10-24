import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const ExampleLayout = ({ title, children }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

export default ExampleLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  titleContainer: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    marginVertical: 20,
    paddingBottom: 5,
    width: '100%',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  childrenContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
