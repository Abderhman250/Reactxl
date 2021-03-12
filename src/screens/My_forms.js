
import React, { Component } from "react";
import { Dimensions, Slider, SafeAreaView, Picker, Text, StyleSheet, View, TextInput, Image, Button, ScrollView, ImageBackground } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, EvilIcons,SimpleLineIcons } from '@expo/vector-icons';


import * as firebase from 'firebase';
import '@firebase/firestore';
import { FrameAttribute } from "expo/build/AR";

const image = { uri: "https://reactjs.org/logo-og.png" };



class My_forms extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
 
        }


    }

    render() {
 

      
        const width = 20;
        return (

            <ScrollView style={{ height: Dimensions.get('window').height, backgroundColor: "#000" }} >

                
   



            </ScrollView>
        );



    }
}
const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const styles = StyleSheet.create({
  pop:{
  

    borderWidth: 1,
     backgroundColor:"#000",
    borderColor:"transparent",
    padding:widthWindow *"0.10",
    marginTop:heightWindow*"0.30",

    shadowColor: "#000",

    shadowOpacity: 2.34,
    shadowRadius: 2.57,
    borderColor:"#fff",
    elevation: 10,
    justifyContent:"center",
    alignItems:"center",    
  },

  linPop:{

    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",    
  },
  Text:{
    fontSize:17,
    justifyContent:"center",
    alignItems:"center",    
   color:"#fff"
  },

  lin2Pop:{
   marginTop:"10%",
    alignItems:"center",
  },


  bnt:{

      borderWidth:2,
      backgroundColor:"#000",
      padding:"4%",
      paddingHorizontal:"10%",
      borderColor:"#fff",

  }
});
export default My_forms;
