import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SearchScreen from './src/screens/SearchScreen';

const screenOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: 'blue',
  },
  headerTintColor: 'white',
};


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator initialRouteName="Search" screenOptions={screenOptions}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Profile" component={ProfileScreen} />
    </SearchStack.Navigator>
  );
}

const RegisterStack = createNativeStackNavigator();

function RegisterStackScreen() {
  return (
    <RegisterStack.Navigator initialRouteName="Register" screenOptions={screenOptions}>
      <RegisterStack.Screen name="Register" component={RegisterScreen} />
    </RegisterStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home"
      activeColor='red'
      barStyle={{backgroundColor: 'white', borderWidth: 0.15,paddingBottom: 2}}>
        <Tab.Screen name="Home" component={HomeStackScreen}   options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name="Search" component={SearchStackScreen} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="search" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name="Register" component={RegisterStackScreen} options={{
          tabBarLabel: 'Register',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="how-to-reg" size={24} color={color} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}