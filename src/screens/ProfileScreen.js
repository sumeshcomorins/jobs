import { View, Text } from 'react-native'
import React from 'react'

export default function ProfileScreen({ route, navigation }) {
    console.log('route', route.params.item)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  )
}