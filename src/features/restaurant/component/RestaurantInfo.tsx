import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "./star";

import { Spacer } from "../../../components/spacer";
import { Texts } from "../../../components/TextComponent";
import { RestaurnatInfoProps } from "../types/RestaurantTypes";

const  RestaurantInfo=(data:RestaurnatInfoProps)=> {

  const rating = 4;
  const ratingArray = Array.from(Array(Math.floor(rating)));
  return (
    <RestroCard>
      <Card.Cover
        source={{
          uri: data?.image,
        }}
      />
      <Texts variant="body">{data.name}</Texts>
      <RowView>
        {ratingArray.map(() => (
          <SvgXml xml={star} width={20} height={20}></SvgXml>
        ))}
        <LocationView>
          <TitleText style={{}}>Test</TitleText>
        </LocationView>
      </RowView>
      <Address>Some random street</Address>
      <Spacer position="left" size="small">
        <Text>Yooo</Text>
      </Spacer>
    </RestroCard>
  );
}

export default RestaurantInfo;

const TitleText = styled(Text)`
  margin-top:15px;
  margin-bottom:5px;
  color: ${(props) => props.theme.colors.ui.secondary};
  fontweight: bold;
  font-family:${(props) => props.theme.fonts.heading}
  font-size:${(props) => props.theme.fontSizes.body}
`;
// copy with method like flutter to exchange property
const TitleText1 = styled(TitleText)`
  font-size: 14px;
`;
const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.secondary};
  font-family:${(props) => props.theme.fonts.body}
  font-size:${(props) => props.theme.fontSizes.bodySmall}
`;
const RestroCard = styled(Card)`
  padding: 20px;
  margin-top: 40px;
  elevation: 5;
  background-color: white;
`;
const RowView = styled(View)`
  flex-direction: row;
  margin-top: 5px;
  margin-top: 5px;
`;
const LocationView = styled(View)`
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
`;
