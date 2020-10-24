import React, { ReactElement, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
}

const notNullUndefined = (value: any) => value !== null && value !== undefined;

export default function RadioGroup({
  children,
  initialValue,
  style = 'card',
  type = 'radio',
  onChange,
  inline = false,
  iconStyle = 'check',
}: RadioGroupProps) {
  const [selected, setSelected] = useState<RadioGroupValue[]>(
    notNullUndefined(initialValue) ? [initialValue as RadioGroupValue] : []
  );

  const onPress = (value: RadioGroupValue) => {
    if (type === 'radio') {
      setSelected([value]);
    } else {
      if (selected.includes(value)) {
        setSelected(
          selected.filter((selectedValue) => selectedValue !== value)
        );
      } else {
        setSelected([...selected, value]);
      }
    }
  };

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [onChange, selected]);

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
