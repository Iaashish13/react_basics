import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../component/RestaurantInfo";
import styled from "styled-components/native";

function RestaurantScreen() {
  return (
    <SearchContainer>
      <Searchbar value={""} />
      <RestaurantInfo />
    </SearchContainer>
  );
}

const SearchContainer = styled.View`
  padding: 20px;
  
`;


export default RestaurantScreen;
