import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { LayoutViewProps } from './LayoutViewProps';

const HorizontalView = ({
  children,
  style,
  align = 'center',
  justify = 'center',
}: LayoutViewProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          alignItems: align,
          justifyContent: justify,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default HorizontalView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
