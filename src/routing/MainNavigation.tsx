
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RestaurantScreen from "../features/restaurant/screen/RestaurantScreen";
import DetailScreen from "../features/restaurant/screen/DetailScreen";

const RestaurantStack = createNativeStackNavigator();

const RestaurantStackScreen = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{
          // To hide tab bar
          headerShown: false,
        }}
      />
      <RestaurantStack.Screen name="Details"  component={DetailScreen}  />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantStackScreen;
