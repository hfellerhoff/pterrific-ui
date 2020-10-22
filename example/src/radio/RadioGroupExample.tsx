import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioGroup, Radio } from 'pterrific-ui';
import type {
  RadioGroupIconStyle,
  RadioGroupStyle,
  RadioGroupType,
  RadioGroupValue,
} from 'src/radio/RadioGroup';

export default function RadioGroupExample() {
  const [values, setValues] = useState<RadioGroupValue[]>([]);
  const [style, setStyle] = useState<RadioGroupStyle>('card');
  const [type, setType] = useState<RadioGroupType>('radio');
  const [inline, setInline] = useState<boolean>(false);
  const [iconStyle, setIconStyle] = useState<RadioGroupIconStyle>('check');

  const renderListItems = (incomingValues: RadioGroupValue[]) => {
    return (
      <View style={styles.listItemsContainer}>
        {incomingValues.map((value, index) => (
          <Text style={styles.listItem} key={index}>
            {value}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Radio Group</Text>
      </View>
      <View style={styles.optionsContainer}>
        <RadioGroup
          inline
          initialValue="card"
          onChange={(value) => setStyle(value[0] as RadioGroupStyle)}
        >
          <Radio value="card">Card</Radio>
          <Radio value="minimal">Minimal</Radio>
        </RadioGroup>
        <RadioGroup
          inline
          initialValue={type}
          onChange={(value) => setType(value[0] as RadioGroupType)}
        >
          <Radio value="radio">Radio</Radio>
          <Radio value="select">Select</Radio>
        </RadioGroup>
        <RadioGroup
          inline
          initialValue={iconStyle}
          onChange={(value) => setIconStyle(value[0] as RadioGroupIconStyle)}
        >
          <Radio value="check">Check</Radio>
          <Radio value="circle">Circle</Radio>
        </RadioGroup>
        <RadioGroup
          inline
          initialValue={inline}
          onChange={(value) => setInline(value[0] as boolean)}
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
      >
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </RadioGroup>
      <View style={styles.headingContainer}>
        <Text>Selection:</Text>
        {renderListItems(values)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  headingContainer: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  optionsContainer: {
    marginVertical: 20,
    textAlign: 'center',
    width: '100%',
  },
  heading: {
    fontWeight: '700',
    fontSize: 24,
  },
  listItemsContainer: { marginVertical: 20 },
  listItem: { fontWeight: '700' },
});
