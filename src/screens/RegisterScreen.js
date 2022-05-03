import React, { useState,useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Keyboard, ScrollView } from 'react-native'
import { colors } from './Colors';
import { fetchApi } from './api';
import { config } from '../../config';
import { RadioButton } from 'react-native-paper';
export default function RegisterScreen(props) {
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [gender, setGender] = useState('male');
  const [workStatus, setWorkStatus] = useState('fresher');
  const [jobCategory, setJobCategory] = useState('');

  const onRegister = async() => {
    Keyboard.dismiss()
    if(username && password && email && phone && jobCategory ){
      const data ={
        "username"    : username,
        "password"    : password,
        "email"       : email,
        "phone"       : phone,
        "gender"      : gender,
        "workStatus"  : workStatus,
        "jobCategory" : jobCategory
      }
const response = await fetchApi(config.TEST+'registerJobUser',data);
    if (response.data.status){
      alert('Registration Successfully Submited')
      setusername('')
      setpassword('')
      setEmail('')
      setPhone('')
      setJobCategory('')
      props.navigation.navigate('Home')
    }else{
      alert("Registration Faild please Submit Later")
    }
    }else{
      alert('Please Fill ALL Details')
    }
    
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
      <TextInput
        style={styles.inputBox}
        placeholder="Which Job Category"
        placeholderTextColor={colors.white}
        value={jobCategory}
        onChangeText={(jobCategory) => setJobCategory(jobCategory)}
      />


      <View style ={{flexDirection:'row',alignItems: 'center'}}>
      <Text style={styles.radioQuestion}>Gender*</Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="male"
        status={ gender === 'male' ? 'checked' : 'unchecked' }
        onPress={() => setGender('male')}
      />
      <Text>Male</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="female"
        status={ gender === 'female' ? 'checked' : 'unchecked' }
        onPress={() => setGender('female')}
      />
      <Text>Female</Text>
      </View>
      </View>

    
      <View style ={{flexDirection:'row',alignItems: 'center'}}>
      <Text style={styles.radioQuestion}>Work Status*</Text>

      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="fresher"
        status={ workStatus == 'fresher' ? 'checked' : 'unchecked' }
        onPress={() => setWorkStatus('fresher')}
      />
      <Text>Fresher</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="experienced"
        status={ workStatus == 'experienced' ? 'checked' : 'unchecked' }
        onPress={() => setWorkStatus('experienced')}
      />
      <Text>Experienced</Text>
      </View>
      </View>

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
  radioQuestion: {
    fontSize: 15,
    width: '30%'
  },
})