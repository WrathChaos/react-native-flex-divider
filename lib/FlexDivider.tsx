import * as React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./FlexDivider.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

interface IFlexDividerProps {
  text: string;
  style?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  leftDividerStyle?: CustomStyleProp;
  rightDividerStyle?: CustomStyleProp;
  TextComponent?: any;
}

const FlexDivider: React.FC<IFlexDividerProps> = ({
  style,
  text,
  textStyle,
  leftDividerStyle,
  rightDividerStyle,
  TextComponent = Text,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.dividerStyle, leftDividerStyle]} />
      <TextComponent style={[styles.textStyle, textStyle]}>
        {text}
      </TextComponent>
      <View style={[styles.dividerStyle, rightDividerStyle]} />
    </View>
  );
};

export default FlexDivider;
