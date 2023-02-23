import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../component/RestaurantInfo";
import styled from "styled-components/native";
import { FlatList, Text } from "react-native";
import { RestaurnatInfoProps } from "../types/RestaurantTypes";

const data: RestaurnatInfoProps[] = [
  {
    id: 1,
    name: "Lumbini Restaurant",
    image:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
  },
  {
    id: 2,
    name: "Pokhara Restro",
    image:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
  },
  {
    id: 3,
    name: "Chiyawala",
    image:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
  },
  {
    id: 4,
    name: "Jhir Sekuwa",
    image:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
  },
  {
    id: 5,
    name: "Spice Restro",
    image:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
  },
];
function RestaurantScreen() {
  const renderItem = ({ item }: { item: RestaurnatInfoProps }) => (
    <RestaurantInfo {...item} />
  );
  return (
    <SearchContainer>
      <Searchbar value={""} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      {/* <RestaurantInfo /> */}
    </SearchContainer>
  );
}

const SearchContainer = styled.View`
  padding: 20px;
`;

export default RestaurantScreen;
