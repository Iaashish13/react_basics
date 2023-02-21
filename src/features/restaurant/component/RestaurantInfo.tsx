
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

function RestaurantInfo({ restaurant = {} }) {
  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover
        source={{
          uri: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
        }}
      />
      <Text>name</Text>
    </Card>
  );
}

export default RestaurantInfo;

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { backgroundColor: "black" },
});
