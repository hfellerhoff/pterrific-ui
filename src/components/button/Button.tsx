import React, { useState } from 'react';
import {
  //@ts-ignore
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import FontSizes from '../../constants/FontSizes';
import Spacing from '../../constants/Spacing';
import Colors, { Color, ColorIndex } from '../../constants/Colors';

export interface ButtonProps {
  children: string;
  onPress?: () => void;
  variantColor?: Color;
  variantColorWeight?: ColorIndex;
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  children,
  onPress = () => {},
  variantColor = Colors.Blue,
  variantColorWeight,
  size = 'md',
  isLoading,
  isDisabled,
}: ButtonProps) => {
  const [pressed, setPressed] = useState(false);

  const cannotPress = isLoading || isDisabled;

  const defaultWeight = variantColorWeight ? variantColorWeight : '400';
  const activeWeight = variantColorWeight
    ? ((parseInt(variantColorWeight, 10) + 100).toString() as ColorIndex)
    : '500';

  return (
    <Pressable
      onPress={cannotPress ? () => {} : onPress}
      onPressIn={cannotPress ? () => {} : () => setPressed(true)}
      onPressOut={cannotPress ? () => {} : () => setPressed(false)}
      style={[
        styles.button,
        size === 'sm'
          ? styles.buttonSm
          : size === 'md'
          ? styles.buttonMd
          : styles.buttonLg,
        {
          backgroundColor: isDisabled
            ? Colors.Grayscale['100']
            : pressed
            ? variantColor[activeWeight]
            : variantColor[defaultWeight],
        },
        Platform.OS !== 'android' && Platform.OS !== 'ios'
          ? // eslint-disable-next-line react-native/no-inline-styles
            { cursor: 'pointer' }
          : {},
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text
          style={[
            size === 'sm'
              ? styles.textSm
              : size === 'md'
              ? styles.textMd
              : styles.textLg,
            isDisabled ? styles.textDisabled : styles.text,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    margin: Spacing[2],
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSm: {
    height: FontSizes.sm + Spacing[16],
    paddingHorizontal: 20,
  },
  buttonMd: {
    height: FontSizes.md + Spacing[20],
    paddingHorizontal: 25,
  },
  buttonLg: {
    height: FontSizes.lg + Spacing[24],
    paddingHorizontal: 35,
  },
  text: {
    color: 'white',
  },
  textDisabled: {
    color: Colors.Grayscale['500'],
  },
  textSm: {
    color: 'white',
    fontSize: FontSizes.sm,
  },
  textMd: {
    color: 'white',
    fontSize: FontSizes.md,
  },
  textLg: {
    color: 'white',
    fontSize: FontSizes.lg,
  },
});
