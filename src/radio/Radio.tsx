import React, { useState } from 'react';
//@ts-ignore
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import type {
  RadioGroupIconStyle,
  RadioGroupStyle,
  RadioGroupValue,
} from './RadioGroup';

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
              borderColor: pressed ? '#8BBDE8' : '#EDEDED',
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
        Platform.OS === 'android' || (Platform.OS === 'ios' && !inline)
          ? { paddingVertical: 20 }
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
            ? // eslint-disable-next-line react-native/no-inline-styles
              { borderColor: isPressed ? '#8BBDE8' : '#E1E8F1' }
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
    padding: 10,
    margin: 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#EDEDED',
  },
  cardContainerSelected: {
    borderColor: '#2C91E8',
  },
  minimalContainer: {},
  minimalContainerSelected: {},
  iconContainer: {
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIconCircle: {
    backgroundColor: '#EEEEEE',
  },
  cardIconCircleChecked: {
    backgroundColor: '#2C91E8',
  },
  minimalIconCircle: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#E1E8F1',
  },
  minimalIconCircleChecked: {
    backgroundColor: '#2C91E8',
    borderColor: '#2C91E8',
  },
  icon: {
    color: '#ffffff',
    fontSize: 12,
  },
  iconCheck: {
    position: 'relative',
  },
  iconCheckHook: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    bottom: -7,
    left: -5,
    height: 8,
    width: 3,
    borderRadius: 1,
    transform: [{ rotate: '-45deg' }],
  },
  iconCheckBody: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    bottom: -7.5,
    left: 0.5,
    height: 13,
    width: 3,
    borderRadius: 1,
    transform: [{ rotate: '45deg' }],
  },
  iconCircle: {
    backgroundColor: '#ffffff',
    height: 10,
    width: 10,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 20,
    display: 'flex',
  },
  text: {
    color: '#22272A',
  },
});
