import React, { ReactElement, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import type { Color } from '../../constants/Colors';
import type { RadioProps } from './Radio';

export type RadioGroupStyle = 'card' | 'minimal';
export type RadioGroupIconStyle = 'check' | 'circle';
export type RadioGroupType = 'radio' | 'select';
export type RadioGroupValue = string | number | boolean;

export interface RadioGroupProps {
  children: ReactElement<RadioProps>[];
  initialValue?: RadioGroupValue;
  style?: RadioGroupStyle;
  iconStyle?: RadioGroupIconStyle;
  type?: RadioGroupType;
  onChange?: (selected: RadioGroupValue[]) => void;
  inline?: boolean;
  variantColor?: Color;
  values?: RadioGroupValue[];
}

const notNullUndefined = (value: any) => value !== null && value !== undefined;

export default function RadioGroup({
  children,
  initialValue,
  style = 'card',
  type = 'radio',
  onChange = () => {},
  inline = false,
  iconStyle = 'check',
  variantColor = Colors.Blue,
  values,
}: RadioGroupProps) {
  const [selected, setSelected] = useState<RadioGroupValue[]>(
    notNullUndefined(initialValue) ? [initialValue as RadioGroupValue] : []
  );

  const updateValues = (incomingValues: RadioGroupValue[]) => {
    setSelected(incomingValues);
    onChange(incomingValues);
  };

  const onPress = (incomingValue: RadioGroupValue) => {
    if (type === 'radio') {
      updateValues([incomingValue]);
    } else {
      if (selected.includes(incomingValue)) {
        updateValues(
          selected.filter((selectedValue) => selectedValue !== incomingValue)
        );
      } else {
        updateValues([...selected, incomingValue]);
      }
    }
  };

  useEffect(() => {
    if (values) setSelected(values);
  }, [values, setSelected]);

  const updatedChildrenWithProps = React.Children.map(
    children,
    (child: ReactElement<RadioProps>, i: number) => {
      return React.cloneElement(child, {
        isSelected: selected.includes(
          notNullUndefined(child.props.value)
            ? (child.props.value as RadioGroupValue)
            : child.props.children
        ),
        onPress,
        style,
        key: i,
        inline,
        iconStyle,
        variantColor,
      });
    }
  );

  return (
    <View style={[styles.container, inline ? styles.containerInline : {}]}>
      {updatedChildrenWithProps}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerInline: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
