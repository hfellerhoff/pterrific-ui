import * as React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import RadioGroupExample from './radio/RadioGroupExample';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ButtonExample from './radio/ButtonExample';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="Button" component={ButtonExample} />
      <Drawer.Screen name="Radio" component={RadioGroupExample} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
  },
});
