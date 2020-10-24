import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  RadioGroup,
  Radio,
  Colors,
  Button,
  Divider,
  Spacing,
  HorizontalView,
} from 'pterrific-ui';
import type {
  RadioGroupIconStyle,
  RadioGroupStyle,
  RadioGroupType,
  RadioGroupValue,
} from 'src/components/radio/RadioGroup';
import ExampleLayout from '../ExampleLayout';

export default function RadioGroupExample() {
  const [values, setValues] = useState<RadioGroupValue[]>([]);
  const [style, setStyle] = useState<RadioGroupStyle>('card');
  const [type, setType] = useState<RadioGroupType>('radio');
  const [inline, setInline] = useState<boolean>(false);
  const [iconStyle, setIconStyle] = useState<RadioGroupIconStyle>('check');

  const renderListItems = (incomingValues: RadioGroupValue[]) => {
    return (
      <HorizontalView>
        <Text style={styles.listItemTitle}>Selection:</Text>
        <HorizontalView>
          {incomingValues.map((value, index) => (
            <Text style={styles.listItem} key={index}>
              {value}
            </Text>
          ))}
        </HorizontalView>
      </HorizontalView>
    );
  };

  return (
    <ExampleLayout title="Radio">
      <View style={styles.optionsContainer}>
        <RadioGroup
          inline
          initialValue="card"
          onChange={(value) => setStyle(value[0] as RadioGroupStyle)}
          variantColor={Colors.Blue}
        >
          <Radio value="card">Card</Radio>
          <Radio value="minimal">Minimal</Radio>
        </RadioGroup>
        <RadioGroup
          inline
          initialValue={type}
          onChange={(value) => setType(value[0] as RadioGroupType)}
          variantColor={Colors.Orange}
        >
          <Radio value="radio">Radio</Radio>
          <Radio value="select">Select</Radio>
        </RadioGroup>
        <RadioGroup
          inline
          initialValue={iconStyle}
          onChange={(value) => setIconStyle(value[0] as RadioGroupIconStyle)}
          variantColor={Colors.Teal}
        >
          <Radio value="check">Check</Radio>
          <Radio value="circle">Circle</Radio>
        </RadioGroup>
        <RadioGroup
          inline
          initialValue={inline}
          onChange={(value) => setInline(value[0] as boolean)}
          variantColor={Colors.Purple}
        >
          <Radio value={false}>Column</Radio>
          <Radio value={true}>Inline</Radio>
        </RadioGroup>
      </View>

      <RadioGroup
        style={style}
        iconStyle={iconStyle}
        type={type}
        inline={inline}
        onChange={(incomingValues) => setValues(incomingValues)}
        values={values}
      >
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </RadioGroup>
      <Divider transparent spacing={Spacing[10]} />
      <Button variantColor={Colors.Gray} onPress={() => setValues([])}>
        Clear
      </Button>
      <Divider transparent spacing={Spacing[10]} />
      <View>{renderListItems(values)}</View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    marginVertical: 20,
    textAlign: 'center',
    width: '100%',
  },
  heading: {
    fontWeight: '700',
    fontSize: 24,
  },
  listItemTitle: { marginRight: 5 },
  listItem: { fontWeight: '700', textAlign: 'center' },
});
