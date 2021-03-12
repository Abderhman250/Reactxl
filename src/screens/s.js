import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign,Feather } from '@expo/vector-icons'; 
import React, { Component } from "react";
import { View } from 'react-native';
import Homes from "./Homes";
import contact from "./contact";
import My_forms from "./My_forms";
import More from "./More";

const Tab = createMaterialBottomTabNavigator();


export default function MyTabs() {
    return (
      <Tab.Navigator 
        style={{backgroundColor:'#008000'}}
        screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
  
        //   if (route.name === 'Homes') {
        //     iconName = 'ios-home' ;
        //   }
        //   if (route.name === 'Favorite') {
        //     iconName = "ios-star";
        //   }
        //   if (route.name === 'Account') {
        //     iconName = "ios-person";
        //   }
        //   if (route.name === 'Offers') {
        //     iconName = "dashboard";
        //   }
        //   if (route.name === 'Messages') {
        //     // iconName = "ios-chatbubbles";
        //   }
          
        //   // You can return any component that you like here!
        //   return <Ionicons name={iconName} size={size} color={color}/>;
        // },
      })}
      tabBarOptions={{
        activeTintColor: '#5E2052',
        inactiveTintColor: '#F3F3F3',
        style: {
          backgroundColor:'#B39866'
        }
        
      }}
    >
        <Tab.Screen name="Homes" component={Homes}
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
              }}
        />
        <Tab.Screen name="contact" component={contact}
        
        options={{
            tabBarLabel: 'contact',
            tabBarIcon: ({ color }) => (
             <AntDesign name="contacts" size={24} color = {color} />            ),
          }}
        />
        <Tab.Screen name="My_forms" component={My_forms}
             options={{
                tabBarLabel: 'My Forms',
                tabBarIcon: ({ color }) => (
                <AntDesign name="form" size={24} color = {color} />                ),
              }}
        />
        <Tab.Screen name="More" component={More}
             options={{
                tabBarLabel: 'More',
                tabBarIcon: ({ color }) => (
                <Feather name="more-horizontal" size={24}  color = {color} />                       ),
              }}
        />

        
        {/* <Tab.Screen name="Homes" component={Homes}/>

        <Tab.Screen name="Homes" component={Homes}/> */}

        {/* <Tab.Screen name="Favorite" component={FavoriteScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
        <Tab.Screen name="Offers" component={ServicesScreen}/>
        <Tab.Screen name="Messages" component={SignIn_Stack}/> */}
        {/* <Tab.Screen name="Notifications" component={SignIn_Stack}/> */}
  
      </Tab.Navigator>
    );
}
