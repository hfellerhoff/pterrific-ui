# pterrific-ui

A simply pterrific component library for React Native.

NOTE: This library is HIGHLY work in progress. Breaking changes will be frequent and expected, so bear that in mind when using it.

## Installation

```sh
npm install pterrific-ui
```

## Usage

### Button

```js
import { Button, Colors } from "pterrific-ui";

// ...

const onPress = () => console.log("Button pressed"

<Button
    onPress={onPress)             // () => void
    variantColor={Colors.Blue}    // Color
    variantColorWeight='400'      // ColorIndex
    size='md'                     // "sm" | "md" | "lg"    
    isLoading={false}             // boolean
    isDisabled={false}            // boolean
>
    Press Me
</Button>
```

### Radio

```js
import { Radio, RadioGroup, Colors } from "pterrific-ui";

// ...

<RadioGroup
    style={style}           // "card" | "minimal"
    iconStyle={iconStyle}   // "check" | "circle"
    type={type}             // "radio" | "select"
    inline={inline}         // boolean
    onChange={(incomingValues) => setValues(incomingValues)}  // string | number | boolean => void
    variantColor={Colors.Blue},
>
    <Radio>A</Radio>
    <Radio>B</Radio>
    <Radio>C</Radio>
    <Radio>D</Radio>
</RadioGroup>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
