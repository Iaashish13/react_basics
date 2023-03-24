import React from 'react'
import { Text } from 'react-native'
import { RestroModel } from '../types/RestaurantTypes'

import type {Route} from '@react-navigation/native'


const DetailScreen = ({route}:any) => {
  return (
    <Text>{route.params.item.id}</Text>
   
  )
}

export default DetailScreen