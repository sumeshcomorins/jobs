import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { colors } from './Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen({ route, navigation }) {

    const item = route.params.item

    const capitalize_first_letter =(string,num) =>{
      if(isNaN(string) && string){
        if(num){
    
        return string=='fas' ?  string.charAt(0).toUpperCase() + string.charAt(1).toUpperCase()+ string.slice(2).toLowerCase(): string
    
        }else{
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
      }else{
        return string;
      }
    }
  return (

    <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>{capitalize_first_letter(item.name)}</Text>
                <Text style={styles.name}>John Doe @gmail.com</Text>
                <View style={{flexDirection:'row',marginTop:8}}>
                <FontAwesome name="phone-square" size={24} color="black" />
                  <Text style={styles.phone}>{item.phone}</Text>
                </View>
            </View>
          </View>

          <View style={styles.body}>
          <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:3}}>
                  <Text style={styles.statusKey}>Jobcategory :</Text>
                  <Text style={styles.statusText}>{capitalize_first_letter(item.jobcategory)}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:3}}>
                  <Text style={styles.statusKey}>workStatus :</Text>
                  <Text style={styles.statusText}>{capitalize_first_letter(item.workstatus)}</Text>
                </View>
        </View>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultWhite,
    borderRadius: 10,
    flex: 1,
    justifyContent:'center',
    marginTop: 0,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
  header:{
    backgroundColor: "#00BFFF",
    borderRadius: 10,
    height:200,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  body:{
    marginTop:'10%',
    backgroundColor:colors.defaultWhite,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
    marginVertical:2
  },
  phone:{
    fontSize:17,
    color:"#FFFFFF",
    marginLeft:5
  },
  statusKey:{
    fontSize:15,
    marginLeft:5,
    color: "#00BFFF",
  },
  statusText:{
    fontSize:15,
    marginLeft:5,
    color: "#00BFFF",
  },
});