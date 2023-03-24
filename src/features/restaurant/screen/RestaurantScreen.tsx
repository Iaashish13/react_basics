import { useEffect, useState } from "react";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { ThunkDispatch } from "redux-thunk";

import { Text, FlatList, TouchableOpacity ,ActivityIndicator} from "react-native";
import { Searchbar } from "react-native-paper";

import styled from "styled-components/native";

import { RestroModel } from "../types/RestaurantTypes";

import RestaurantInfo from "../component/RestaurantInfo";
import { fetchRestroList } from "../../../store/restro.slice";
import { RootState } from "../../../store/store";

const RestaurantScreen = ({ navigation }: any) => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const { loading, restroList, error } = useSelector(
    (state: RootState) => state.restro
  );
  


  useEffect(() => {
    dispatch(fetchRestroList());
  }, []);
  const [query,setQuery]=useState('');
  const [filteredRestro, setfilteredRestro]=useState(restroList);

  const handleSearch= (text:string)=>{
    setQuery(text);

    const filteredData= restroList.filter((restro)=>
    restro.name.toLowerCase().includes(text.toLowerCase())
    );
    setfilteredRestro(filteredData);
    
  }

  const renderItem = ({ item }: { item: RestroModel }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details",{item});
      }}
    >
      <RestaurantInfo key={item.id.toString()} {...item} />
    </TouchableOpacity>
  );

  return (
    <SearchContainer>
      <Searchbar  
      placeholder="Search"
      value={query}
      onChangeText={handleSearch}
       />
  
      {loading && <Text>Loading...</Text>}
      
      <FlatList
        data={filteredRestro.length >0?filteredRestro:restroList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      {error && <Text>{error}</Text>}

    
    </SearchContainer>
  );
};

const SearchContainer = styled.View`
  padding: 20px;
`;

export default RestaurantScreen;
