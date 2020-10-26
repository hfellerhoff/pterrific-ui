# pterrific-ui

A simply pterrific component library for React Native.

NOTE: This library is HIGHLY work in progress. Breaking changes will be frequent and expected, so bear that in mind when using it.

## Installation

```sh
npm install pterrific-ui
```

## Usage

```js
import { Radio, RadioGroup } from "pterrific-ui";

// ...

<RadioGroup
    style={style}           // "card" | "minimal"
    iconStyle={iconStyle}   // "check" | "circle"
    type={type}             // "radio" | "select"
    inline={inline}         // boolean
    onChange={(incomingValues) => setValues(incomingValues)}  // string | number | boolean => void
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
