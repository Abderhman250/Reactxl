// import React from 'react'
// import { Router, Scene, Stack } from 'react-native-router-flux';
// import { NavigationContainer } from "@react-navigation/native";

// import MyTabs from "./src/screens/s";
// import { View } from 'react-native';

// function App() {
//   return (

//     <NavigationContainer>
    
//           <MyTabs/>

//     </NavigationContainer>

//   )
// }

// export default App



import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux';
import { View, Text,StyleSheet,ImageBackground } from 'react-native'

import Homes from "./src/screens/Homes";
import contact from "./src/screens/contact";
import My_Form from "./src/screens/My_Form";
import More from "./src/screens/More";
import Call_to_check_in from "./src/screens/Call_to_check_in";
import StoreId from "./src/screens/StoreId";
import Location from "./src/screens/Location";
import cheack_In from "./src/screens/cheack_In";
import Sign from "./src/screens/Sign";
import CourtApp from "./src/screens/CourtApp";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colors } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();
 

function App() {
  return (
    <Router style={styles.nav}>
      <Scene key="root" style={styles.nav} >
      <Scene key="Homes" component={Homes}  style={styles.nav} hideNavBar={1}/>
      <Scene key="contact" component={contact}  style={styles.nav} hideNavBar={1}/>
      <Scene key="My_Form" component={My_Form}  style={styles.nav} hideNavBar={1}/>
      <Scene key="More" component={More}  style={styles.nav} hideNavBar={1}/>
      <Scene key="Call_to_check_in" component={Call_to_check_in}  style={styles.nav} hideNavBar={1}/>
      <Scene key="StoreId" component={StoreId}  style={styles.nav} hideNavBar={1}/>
      <Scene key="Location" component={Location}  style={styles.nav} hideNavBar={1}/>
      <Scene key="cheack_In" component={cheack_In}  style={styles.nav} hideNavBar={1}/>
      <Scene key="Sign" component={Sign}  style={styles.nav} hideNavBar={1}/>
      <Scene key="CourtApp" component={CourtApp}  style={styles.nav} hideNavBar={1}/>

      
    </Scene>
  </Router>
  )



}
const styles = StyleSheet.create({

  nav: {
     backgroundColor:"#000",
  },


});
export default App

