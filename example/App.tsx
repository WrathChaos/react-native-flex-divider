import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FlexDivider from "react-native-flex-divider";

const App = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#000", "#0f2642"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        <View style={{ marginTop: 32 }}>
          <FlexDivider
            text="GAME SETTINGS"
            textStyle={{ fontFamily: "SuezOne-Regular" }}
          />
        </View>
        <View style={{ marginTop: 64 }}>
          <FlexDivider
            text="USER SETTINGS"
            textStyle={{ fontFamily: "SuezOne-Regular" }}
            rightDividerStyle={{ flex: 5 }}
          />
        </View>
        <View style={{ marginTop: 64 }}>
          <FlexDivider
            text="GAME SETTINGS"
            textStyle={{ fontFamily: "SuezOne-Regular" }}
            leftDividerStyle={{ flex: 5 }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;
