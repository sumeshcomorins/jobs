import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreens({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      </View>
  )
}