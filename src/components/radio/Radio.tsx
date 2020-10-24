import React, { useState } from 'react';
//@ts-ignore
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import type {
  RadioGroupIconStyle,
  RadioGroupStyle,
  RadioGroupValue,
} from './RadioGroup';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';

export interface RadioProps {
  children: string;
  value?: RadioGroupValue;
  isSelected?: boolean;
  onPress?: (value: RadioGroupValue) => void;
  style?: RadioGroupStyle;
  inline?: boolean;
  iconStyle?: RadioGroupIconStyle;
}

export default function Radio({
  children,
  value = children,
  isSelected = false,
  onPress = () => {},
  style = 'card',
  inline = false,
  iconStyle = 'check',
}: RadioProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => onPress(value)}
      style={({ pressed }: { pressed: boolean }) => [
        styles.container,
        style === 'card'
          ? styles.cardContainer
          : style === 'minimal'
          ? styles.minimalContainer
          : {},
        style === 'card'
          ? {
              borderColor: pressed ? Colors.Blue['200'] : Colors.Gray['200'],
            }
          : style === 'minimal'
          ? {}
          : {},
        isSelected
          ? style === 'card'
            ? styles.cardContainerSelected
            : style === 'minimal'
            ? styles.minimalContainerSelected
            : {}
          : {},
        (Platform.OS === 'android' || Platform.OS === 'ios') && !inline
          ? { paddingVertical: Spacing[20] }
          : {},
        Platform.OS !== 'android' && Platform.OS !== 'ios'
          ? { cursor: 'pointer' }
          : {},
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          style === 'card' ? styles.cardIconCircle : {},
          style === 'card' && isSelected ? styles.cardIconCircleChecked : {},
          style === 'minimal' ? styles.minimalIconCircle : {},
          style === 'minimal' && isSelected
            ? styles.minimalIconCircleChecked
            : {},

          style === 'minimal' && isPressed
            ? {
                borderColor: isPressed
                  ? Colors.Blue['200']
                  : Colors.Gray['200'],
              }
            : {},
        ]}
      >
        {isSelected ? (
          iconStyle === 'check' ? (
            <View style={[styles.iconCheck]}>
              <View style={[styles.iconCheckHook]} />
              <View style={[styles.iconCheckBody]} />
            </View>
          ) : (
            <View style={[styles.iconCircle]} />
          )
        ) : (
          <></>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing[10],
    margin: Spacing[2],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderColor: Colors.Gray[200],
  },
  cardContainerSelected: {
    borderColor: Colors.Blue['400'],
  },
  minimalContainer: {},
  minimalContainerSelected: {},
  iconContainer: {
    borderRadius: 50,
    width: Spacing[20],
    height: Spacing[20],
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIconCircle: {
    backgroundColor: Colors.Gray[100],
  },
  cardIconCircleChecked: {
    backgroundColor: Colors.Blue['400'],
  },
  minimalIconCircle: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.Gray[200],
  },
  minimalIconCircleChecked: {
    backgroundColor: Colors.Blue['400'],
    borderColor: Colors.Blue['400'],
  },
  icon: {
    color: 'white',
    fontSize: 12,
  },
  iconCheck: {
    position: 'relative',
  },
  iconCheckHook: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: -7,
    left: -5,
    height: 8,
    width: 3,
    borderRadius: 1,
    transform: [{ rotate: '-45deg' }],
  },
  iconCheckBody: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: -7.5,
    left: 0.5,
    height: 13,
    width: 3,
    borderRadius: 1,
    transform: [{ rotate: '45deg' }],
  },
  iconCircle: {
    backgroundColor: 'white',
    height: Spacing[10],
    width: Spacing[10],
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: Spacing[10],
    marginRight: Spacing[20],
    display: 'flex',
  },
  text: {
    color: Colors.Gray[800],
  },
});
