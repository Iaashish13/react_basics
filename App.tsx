import { StatusBar, SafeAreaView, Text } from "react-native";

import { ColorValue } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import RestaurantScreen from "./src/features/restaurant/screen/RestaurantScreen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Icons for Bottom Tab Navigation
const homeIcon = ({ color }: { color: ColorValue | number }) => (
  <Icon name="home" size={30} color={color} />
);
const mapsIcon = ({ color }: { color: ColorValue | number }) => (
  <Icon name="google-maps" size={24} color={color} />
);
const settingsIcon = ({ color }: { color: ColorValue | number }) => (
  <Icon name="cog" size={24} color={color} />
);

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings</Text>;
const Maps = () => <Text>Maps</Text>;

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
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Restaurnts"
                options={{
                  // headerShown: false,
                  tabBarIcon: homeIcon,
                }}
                component={RestaurantScreen}
              />
              <Tab.Screen
                name="Maps"
                options={{
                  // headerShown: false,
                  tabBarIcon: mapsIcon,
                }}
                component={Maps}
              />
              <Tab.Screen
                name="Settings"
                options={{
                  // headerShown: false,
                  tabBarIcon: settingsIcon,
                }}
                component={Settings}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}
