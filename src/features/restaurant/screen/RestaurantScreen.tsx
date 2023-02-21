
import { View, Text, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../component/RestaurantInfo";

function RestaurantScreen() {
  return (
    <SafeAreaView>
      <View>
        <Searchbar value={""} />
        <RestaurantInfo/>
      </View>
    </SafeAreaView>
  );
}

export default RestaurantScreen;
