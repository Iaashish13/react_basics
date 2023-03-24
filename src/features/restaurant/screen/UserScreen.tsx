import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "src/store/store";
import { fetchUserList } from "../../../store/user.slice";

import { UserModel } from "../types/UserTypes";

const UserScreen = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const { loading, userList, error } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    dispatch(fetchUserList());
  });
  const renderItem = ({ item }: { item: UserModel }) => (
    <Text>{item.name}</Text>
  );
  return (
    <View>
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={userList}
        keyExtractor={(item) =>item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserScreen;
