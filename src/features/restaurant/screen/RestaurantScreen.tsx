import { useEffect } from "react";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { ThunkDispatch } from "redux-thunk";

import { Text, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import styled from "styled-components/native";

import {  RestroModel } from "../types/RestaurantTypes";

import RestaurantInfo from "../component/RestaurantInfo";
import { fetchRestroList } from "../../../store/restro.slice";
import { RootState } from "../../../store/store";


const RestaurantScreen = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const { loading, restroList, error } = useSelector(
    (state: RootState) => state.restro
  );

  useEffect(() => {
 
    
    dispatch(fetchRestroList());

  }, []);

  const renderItem = ({ item }: { item: RestroModel }) => (
    <RestaurantInfo key={item.id.toString()} {...item} />
  );

  return (
    <SearchContainer>
      <Searchbar value={""} />
      {loading && <Text>Loading...</Text>}
      <FlatList

    
        data={restroList}
        keyExtractor={(item,index) => {
          return index.toString();
        }}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      {error && <Text>{error}</Text>}

      {/* <RestaurantInfo /> */}
    </SearchContainer>
  );
};

const SearchContainer = styled.View`
  padding: 20px;
`;

export default RestaurantScreen;
