import {
  StyleSheet,
  View,
  Button,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import RestaurantScreen from "./src/features/restaurant/screen/RestaurantScreen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const isAndroid = Platform.OS === "android";
export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
    <SafeAreaView style={{flex:1,marginTop:StatusBar.currentHeight}}>
      <View>
        <RestaurantScreen />

        {/* <CustomButton title="Hii" /> */}
      </View>
    </SafeAreaView>
    <ExpoStatusBar/>
    </>
   
  );
}
const CustomButton = styled(Button)` bra
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
