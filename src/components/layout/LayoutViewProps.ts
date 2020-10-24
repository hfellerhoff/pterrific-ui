import type { ViewStyle, FlexAlignType } from 'react-native';

export interface LayoutViewProps {
  children?: JSX.Element | JSX.Element[];
  style?: ViewStyle;
  align?: FlexAlignType;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}
