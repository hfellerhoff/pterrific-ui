# Radio Group

More details to be added soon. (WIP)

```tsx
import { Radio, RadioGroup, Colors } from 'pterrific-ui';

// ...

<RadioGroup
  style={style} // "card" | "minimal"
  iconStyle={iconStyle} // "check" | "circle"
  type={type} // "radio" | "select"
  inline={inline} // boolean
  value={value} // string | number | boolean
  onChange={onChange} // (values: string | number | boolean) => void
  variantColor={Colors.Blue} // Color
>
  <Radio>A</Radio>
  <Radio>B</Radio>
  <Radio>C</Radio>
  <Radio>D</Radio>
</RadioGroup>;
```
