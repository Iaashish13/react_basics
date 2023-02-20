
import { View, Text, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

function RestaurantScreen() {
  return (
    <SafeAreaView>
      <View>
        <Searchbar value={""} />
        <Text>Open up App.x to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}

export default RestaurantScreen;
