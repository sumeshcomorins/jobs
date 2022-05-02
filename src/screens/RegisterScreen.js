import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Keyboard, ScrollView } from 'react-native'
import { colors } from './Colors';
import { fetchApi } from './api';
import { config } from '../../config';
export default function RegisterScreen(props) {
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");

  const onRegister = async() => {
    Keyboard.dismiss()
    
  }

  return (
      <View style={{flex:1}}>
          <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:18}}>Register Your Details</Text>
    </View>
    <View style={styles.container}>
        <ScrollView>
      <TextInput
        style={[styles.inputBox,{marginTop:20}]}
        placeholder="Name"
        placeholderTextColor={colors.white}
        value={username}
        onChangeText={(username) => setusername(username)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor={colors.white}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Phone Number"
        placeholderTextColor={colors.white}
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor={colors.white}
        secureTextEnter={true}
        value={password}
        onChangeText={(password) => setpassword(password)}
      />
      <TouchableOpacity style={styles.button} onPress={() => onRegister()}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.schedule_blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  inputBox: {
    width:300,
    height:50,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:10,
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
  },
  button:{
    width:300,
    marginVertical:10,
    backgroundColor:colors.secondaryColor,
    borderRadius:25,
    paddingHorizontal:20,
    paddingVertical:15
  },
})