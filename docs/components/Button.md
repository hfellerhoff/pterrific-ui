# Button

A button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.

## Import

```tsx
import { Button } from 'pterrific-ui';
```

## Usage

```tsx
<Button>Press Me!</Button>
```

## Common Properties

### onPress

Use the <mark>**onPress**</mark> prop to perform an action on button press.

```tsx
const handlePress = () => console.log("Button pressed!")

<Button onPress={handlePress}>Press Me!</Button>
```

### Size

Use the <mark>**size**</mark> prop to change the size of the button. You can set the value to <mark>**sm**</mark>, <mark>**md**</mark>, or <mark>**lg**</mark>.

```tsx
<Button size='sm'>Small</Button>
<Button size='md'>Medium</Button>
<Button size='lg'>Large</Button>
```

### Color

Use the <mark>**variantColor**</mark> prop to change the color of the button. Reference the [Colors](./design/colors.md) page for more information on the colors available.

```tsx
import { Button, Colors } from 'pterrific-ui'

// ...

<Button>Blue</Button>   // Default Color
<Button variantColor={Colors.Orange}>Orange</Button>
<Button variantColor={Colors.Red}>Red</Button>
```

In addition, the <mark>**variantColorWeight**</mark> prop can be used to alter the brightness or darkness of the color passed in. By default, a weight of `"400"` is used for the default button state and a value of `"500"` is used for the active (pressed) button state.

```tsx
// Orange button with default color weight = 400, active color weight = 500
<Button variantColor={Colors.Orange}>Orange</Button>

// Orange button with default color weight = 200, active color weight = 300
<Button variantColor={Colors.Orange} variantColorWeight="200">Orange</Button>

// Orange button with default color weight = 600, active color weight = 700
<Button variantColor={Colors.Orange} variantColorWeight="600">Orange</Button>
```

### Loading State

Pass <mark>**isLoading**</mark> prop to the Button component to show its loading state. Buttons cannot be interacted with while loading, and any action passed to the button will not be triggered. The button will only show the spinner.

```tsx
<Button isLoading>Press Me</Button>
```

### Disabled State

Pass <mark>**isDisabled**</mark> prop to the Button component to show its loading state. Buttons cannot be interacted with while disabled, and any action passed to the button will not be triggered. The button will turn gray to indicate they are disabled.

```tsx
<Button isDisabled>Press Me</Button>
```

## Props

| Name                 | Type          | Default       | Description                                     |
| :------------------- | :------------ | :------------ | :---------------------------------------------- |
| `onPress`            | `() => void`  |               | The function called on button press.            |
| `size`               | `sm, md, lg`  | `md`          | The size of the button.                         |
| `isLoading`          | `boolean`     | `false`       | Whether the button is loading or not.           |
| `isDisabled`         | `boolean`     | `false`       | Whether the button is disabled or not.          |
| `variantColor`       | `Color`       | `Colors.Blue` | The color of the button.                        |
| `variantColorWeight` | `ColorWeight` | `400`         | The weight of the button color (light vs dark). |
