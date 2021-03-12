import React, { Component } from "react";
import { Dimensions, Picker, Text, StyleSheet, View, TextInput, Linking, Image, ScrollView, ImageBackground } from "react-native";
import { FontAwesome, AntDesign, Entypo, Feather, Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';

import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, ThemeProvider, colors } from 'react-native-elements';
import { Platform } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Layout from "../compnents/Layout";
import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-ionicons'

const image = { uri: "../../assets/logoOF.png" };


class Homes extends React.Component {
  // color = new Array([{ backgroundColor: "rgba(192, 125, 2, 0.671)" }], "", "", "", "", "");


  constructor(props) {
    super(props)

    this.state = {
      FlagPhon: false,
    };

  }

  Call(phone,FlagPhon) {

    let phoneNumber =phone;

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${phoneNumber}`;
    } else {

      phoneNumber = `telprompt:${phoneNumber}`;
    }

    if (FlagPhon) {
      return (
        <View style={styles.Viewphone}>

          <View style={styles.phone}>



            <TouchableOpacity onPress={() => this.linkPhone(phoneNumber)} >
              <Text style={styles.testPhone}>{phone}</Text>


            </TouchableOpacity>

            <TouchableOpacity style={styles.close} onPress={() => this.setState({ FlagPhon: false })} >

              <Ionicons name="ios-close-circle" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      );
    } else {

      return (<View>

      </View>);

    }

  }
  linkPhone(phoneNumber) {
    Linking.openURL(phoneNumber);

  }
  render() {
    const { navigation } = this.props.navigation;
    console.log(Actions);



    return (

      <Layout>
        <View style={styles.ViewTap}>
          <View style={styles.rowTap}>

            <View style={styles.colTap, styles.icons}>
              <FontAwesome name="home" size={24} color="#0b587cf6" />
              <Text style={{ color: "#0b587cf6" }}>HOME</Text>

            </View>


            <View style={styles.colTap}>

              <TouchableOpacity style={styles.icons} onPress={() => Actions.contact()} >
                <AntDesign name="contacts" size={24} color="black" />


                <Text>CONTACT</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.colTap}>
              <TouchableOpacity style={styles.icons} onPress={() => Actions.My_Form()} >
                <AntDesign name="folderopen" size={24} color="black" />

                <Text>MY FORM</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.colTap}>

              <TouchableOpacity style={styles.icons} onPress={() => Actions.More()} >
                <Foundation name="indent-more" size={24} color="black" />
                <Text>MORE</Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>

        <View style={styles.Viewlogo}>
          <View >
            <Image
              style={styles.Gallagher}
              source={require('./../../assets/Gallagher.png')}
              resizeMode='stretch'

            />

          </View>
          <Image
            style={styles.logo}
            source={require('./../../assets/logoOF.png')}
            resizeMode='stretch'

          />
          <View >
            <Image
              style={styles.BailBonds}
              source={require('./../../assets/BailBonds.png')}
              resizeMode='stretch'
            />

          </View>

          <View >


            <Image
              style={styles.text3}
              source={require('./../../assets/text4.png')}
              resizeMode='stretch'
            />

          </View>



        </View>
        <View style={styles.RowButton}>
          <TouchableOpacity onPress={() => this.setState({ FlagPhon: true })} >
            <Image
              style={styles.tinyLogo}
              source={require('./../../assets/b1.png')}
              resizeMode='stretch'

            />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() =>  Actions.Location()} >
            <Image
              style={styles.tinyLogo}
              source={require('./../../assets/b2.png')}
              resizeMode='stretch'

            />
          </TouchableOpacity>

        </View>


        <View style={styles.RowButton1}>

          <TouchableOpacity onPress={() =>  Actions.Call_to_check_in()} >
            <Image
              style={styles.tinyLogo}
              source={require('./../../assets/b3.png')}
              resizeMode='stretch'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.RowButton2}>
          <TouchableOpacity onPress={() => Actions.Call_to_check_in()} >
            <Image
              style={styles.tinyLogo1}
              source={require('./../../assets/b4.png')}
              resizeMode='stretch'
            />
          </TouchableOpacity>
          {this.Call("0785371854",this.state.FlagPhon)}
        </View>





      </Layout>
    );



  }
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  },
  RowButton: {

    top: Dimensions.get('window').height * "0.17",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: Dimensions.get('window').width * "0.04",
    marginLeft: Dimensions.get('window').width * "0.04",

  }, RowButton1: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: Dimensions.get('window').height * "0.028",

  },

  RowButton2: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  Viewlogo: {
    marginRight: 10,
    width: Dimensions.get('window').width * "0.4",
    height: Dimensions.get('window').height * "0.1",
  },
  logo: {
    top: Dimensions.get('window').height * "0.001",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * "0.25",
    position: "relative",
    zIndex: Platform.OS === 'ios' ? -1 : 0
  },
  Gallagher: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * "0.1",
    // top: Dimensions.get('window').height * "0.08",
    top: Dimensions.get('window').height * "0.01",
    position: "absolute",
    zIndex: 1


  },
  BailBonds: {

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * "0.1",
    // top: Dimensions.get('window').height * "0.08",
    bottom: Dimensions.get('window').height * "0.01",
    position: "absolute",
    zIndex: 1


  },
  text3: {

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * "0.1",
    top: Dimensions.get('window').height * "0.00",
    backgroundColor: '#00000002',



    position: "absolute",
    zIndex: 1


  },
  tinyLogo: {

    width: Dimensions.get('window').width * "0.45",
    marginRight: Dimensions.get('window').width * "0.02",
    height: height * "0.1",


  },
  tinyLogo1: {
    width: Dimensions.get('window').width * "0.7",
    height: height * "0.2",


  },
  ViewTap: {

    top: 0,
    backgroundColor: "#fff",
    padding: width * "0.05",

    paddingTop: height * "0.05",
    paddingBottom: height * "0.02",


  },
  rowTap: {


    flexDirection: "row"
  },
  colTap: {
    marginLeft: width * "0.12",
    // borderEndWidth:"1%"
  }, icons: {

    justifyContent: 'center',
    alignItems: 'center',
  }, Viewphone: {

    width: Dimensions.get('window').width * "0.5",
    height: height * "0.1",

    position: "absolute",
    bottom: 0,
    zIndex: 6,


  },
  phone: {

    width: Dimensions.get('window').width * "0.5",
    height: height * "0.1",
    borderColor: "#1e2020f6",
    borderWidth: 5,
    borderRadius: 25,
    backgroundColor: "#1e2020f6",
    position: "absolute",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    zIndex: 6,



  },
  testPhone: {
    color: "#246ef7f6",
    paddingBottom: height * "0.01",
    borderBottomWidth: 1,
    borderColor: "#246ef7f6",


  },close:{
      
     marginLeft:Dimensions.get('window').width * "0.08",

     padding:0,
  }


});
export default Homes;
