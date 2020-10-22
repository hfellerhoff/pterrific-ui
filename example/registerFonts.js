// Use prebuilt version of RNVI in dist folder
// Generate required css
import iconFont from '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf';
import { Platform } from 'react-native';

export default function () {
  if (Platform.OS === 'android' || Platform.OS === 'ios') return;
  const iconFontStyles = `@font-face {
        src: url(${iconFont});
        font-family: FontAwesome;
      }`;

  // Create stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);
}
