import React from 'react'
import { Dimensions, View, Text, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native'


function Layout({ children }) {
  let border=Array()
  
  return (
    <ImageBackground source={require("../../assets/bg1.png")} style={styles.image}>
      {children}
    </ImageBackground>
  )
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  Background:{

   backgroundColor:"#000",
   
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
         
  }

});

export default Layout
