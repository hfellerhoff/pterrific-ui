import React from 'react';
import { View as RNView, StyleSheet } from 'react-native';
import type { LayoutViewProps } from './LayoutViewProps';

const View = ({
  children,
  style,
  align = 'center',
  justify = 'center',
}: LayoutViewProps) => {
  return (
    <RNView
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
    </RNView>
  );
};

export default View;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
