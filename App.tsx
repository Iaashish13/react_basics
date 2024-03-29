import React from "react";

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
import { Provider } from "react-redux";
import stored from "./src/store/store";
import UserScreen from "./src/features/restaurant/screen/UserScreen";

import MainNavigation from "./src/routing/MainNavigation";

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
      <Provider store={stored}>
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen
                  name="Restro"
                  options={{
                    tabBarIcon: homeIcon,
                    headerShown: false,
                  }}
                  component={MainNavigation}
                />
                <Tab.Screen
                  name="Users"
                  options={{
                    tabBarIcon: mapsIcon,
                  }}
                  component={RestaurantScreen}
                />
                <Tab.Screen
                  name="Settings"
                  options={{
                    tabBarIcon: settingsIcon,
                    headerShown: false,
                  }}
                  component={Settings}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </SafeAreaView>
        <ExpoStatusBar />
      </Provider>
    </>
  );
}
