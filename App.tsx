import { Button, StatusBar, SafeAreaView } from "react-native";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import RestaurantScreen from "./src/features/restaurant/screen/RestaurantScreen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/theme";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <ThemeProvider theme={theme}>
          <RestaurantScreen />
        </ThemeProvider>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}
