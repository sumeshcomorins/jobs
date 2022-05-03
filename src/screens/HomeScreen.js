import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreens({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={styles.followButton} onPress={()=>navigation.navigate('Search')}>
                      <Text style={styles.followButtonText}> Search Candidates </Text>  
                    </TouchableOpacity>
                    <Text style={{fontSize:15,paddingTop:7}}>OR</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=>navigation.navigate('Register')}>
                      <Text style={styles.followButtonText}> Register </Text>  
                    </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  followButton: {
    marginTop:10,
    height:35,
    width:300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
});   