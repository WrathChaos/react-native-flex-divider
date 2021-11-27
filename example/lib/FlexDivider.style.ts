import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  dividerStyle: ViewStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dividerStyle: {
    flex: 1,
    height: 1,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#ccc",
  },
  textStyle: {
    color: "#fff",
  },
});
