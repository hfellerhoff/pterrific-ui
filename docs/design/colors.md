# Colors

Colors in pterrific-ui are based on [Chakra UI's default theme](https://chakra-ui.com/theme), which in turn are based on [Tailwind CSS's default colors](https://tailwindcss.com/docs/customizing-colors#default-color-palette). Those previous design specifications are useful for reference and for determining exact color hues, but for simplicity the list of default colors available in pterrific-ui are detailed below:

```tsx
export interface ColorTheme {
  Grayscale: Color; // Black and white color, no hues of any color
  Gray: Color; // Primarily black and white, hints of blue
  Red: Color;
  Orange: Color;
  Yellow: Color;
  Green: Color;
  Teal: Color;
  Blue: Color;
  Cyan: Color;
  Purple: Color;
  Pink: Color;
}
```

## Usage

To use the default color set, simply import `Colors` from `pterrific-ui` and reference the color you'd like to use.

```tsx
import { Colors } from 'pterrific-ui';

// ...

<Button variantColor={Colors.Blue}>This is a blue button!</Button>;
```

You can also use any color from the set by simply referencing its corresponding color weight. A smaller numbered color weight corresponds to a lighter hue of that color. Color weights range from 100 to 900.

```tsx
Colors.Blue[100]; // The lightest blue
Colors.Blue[500]; // A medium blue
Colors.Blue[900]; // The darkest blue
```

## Custom Colors

To add a color to the set of predefined colors and use it in components throughout your app, create a new color object and assign the corresponding hues to it.

```tsx
// STEP 1: Import the predefined colors from pterrific-ui
import { Colors } from 'pterrific-ui';

// STEP 2: Create your custom color.
// In practice, this would consist of different hues ranging from light to dark.
const NewColors: Color[] = {
  ...Colors,
  MyColor: {
    100: '#FFFFFF',
    200: '#FFFFFF',
    300: '#FFFFFF',
    400: '#FFFFFF',
    500: '#FFFFFF',
    600: '#FFFFFF',
    700: '#FFFFFF',
    800: '#FFFFFF',
    900: '#FFFFFF',
  },
};

// STEP 3: Re-export the colors from pterrific-ui, adding your custom color to the batch.
export default NewColors;
```

Once your color has been created, you can pass it into any pterrific-ui component to be used as a color. That component will then pick the correct color weight to use for the given circumstance.
