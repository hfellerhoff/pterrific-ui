import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Color } from '../../constants/Colors';
import Colors from '../../constants/Colors';

export interface DividerProps {
  color?: Color;
  height?: number | string;
  transparent?: boolean;
  spacing?: number | string;
}

const Divider = ({
  color = Colors.Grayscale,
  height = 2,
  transparent = false,
  spacing = StyleSheet.hairlineWidth,
}: DividerProps) => {
  const backgroundColor = transparent ? 'transparent' : color?.[100];

  return (
    <View
      style={StyleSheet.flatten([
        styles.divider,
        {
          height,
          backgroundColor,
          marginVertical: spacing,
        },
      ])}
    >
      <View />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '90%',
  },
});
