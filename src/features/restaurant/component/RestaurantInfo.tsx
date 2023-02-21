import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

function RestaurantInfo({ restaurant = {} }) {
  return (
    <RestroCard>
      <Card.Cover
        source={{
          uri: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
        }}
      />
      <TitleText>Momo</TitleText>
    </RestroCard>
  );
}

export default RestaurantInfo;

const TitleText = styled(Text)`
  padding: 10px;
  color: ${(props)=>props.theme.colors.ui.red};
  fontweight: bold;
`;
const RestroCard = styled(Card)`
  padding: 20px;
  elevation: 5;
  background-color: white;
  marginTop:40px;
`;


