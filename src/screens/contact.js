import React, { Component } from "react";
import { Dimensions, Picker, Text, StyleSheet, View, TextInput, Image, ScrollView, ImageBackground } from "react-native";
import { FontAwesome, AntDesign, Entypo, Feather, Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, ThemeProvider, colors } from 'react-native-elements';
import { Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';

import Layout from "../compnents/Layout";

const image = { uri: "../../assets/logoOF.png" };


class contact extends React.Component {
  color = new Array([{ backgroundColor: "rgba(192, 125, 2, 0.671)" }], "", "", "", "", "");


  constructor(props) {
    super(props)

    this.state = {
      Username: '',
    };

  }

  render() {
    const { navigation } = this.props.navigation;


    return (

      <Layout>

        <View style={styles.ViewTap}>
          <View style={styles.rowTap}>

            <View style={styles.colTap, styles.icons}>
            <TouchableOpacity style={styles.icons} onPress={() => Actions.Homes()} >

              <FontAwesome name="home" size={24} color="black"  />
              <Text >HOME</Text>
              </TouchableOpacity>

            </View>


            <View style={styles.colTap}>

              <TouchableOpacity style={styles.icons}  >
                <AntDesign name="contacts" size={24} color="#0b587cf6" />


                <Text style={{color:"#0b587cf6"}}>CONTACT</Text>
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
          <TouchableOpacity onPress={() => this.chooseCategory("Network", this.props.navigation)} >
            <Image
              style={styles.tinyLogo}
              source={require('./../../assets/btcontact1.png')}
              resizeMode='stretch'

            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.chooseCategory("Network", this.props.navigation)} >
            <Image
              style={styles.tinyLogo1}
              source={require('./../../assets/btcontact2.png')}
              resizeMode='stretch'

            />
          </TouchableOpacity>

        </View>

        <View style={styles.RowButton2}>
          <TouchableOpacity onPress={() => this.chooseCategory("Network", this.props.navigation)} >
            <Image
              style={styles.tinyLogo}
              source={require('./../../assets/btcontact3.png')}
              resizeMode='stretch'

            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.chooseCategory("Network", this.props.navigation)} >
            <Image
              style={styles.tinyLogo1}
              source={require('./../../assets/btcontact4.png')}
              resizeMode='stretch'

            />
          </TouchableOpacity>

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

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    top: height * "0.2"

  },
  RowButton2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width * "0.1",
    bottom: height * "0.1"


  },
  Viewlogo: {
    marginRight: 10,
    width: Dimensions.get('window').width * "0.4",
    height: Dimensions.get('window').height * "0.1",
  },
  logo: {
    top: Dimensions.get('window').height * "0.01",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * "0.25",
    position: "relative",
    zIndex: Platform.OS === 'ios' ? -1 : 0

  },
  Gallagher: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * "0.1",
    top: Dimensions.get('window').height * "0.05",
    position: "absolute",
    zIndex: 2

  },
  BailBonds: {

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * "0.1",
    bottom: Dimensions.get('window').height * "0.01",
    position: "absolute",
    zIndex: 1


  },
  text3: {

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * "0.1",
    top: Dimensions.get('window').height * "0.00",
    position: "absolute",
    zIndex: 1


  },
  tinyLogo: {
    width: width * "0.5",
    height: height * "0.1",

    resizeMode: 'stretch',

  },
  tinyLogo1: {
    width: width * "0.45",
    height: height * "0.1",
    marginLeft: width * "0.02",

    resizeMode: 'stretch',

  },
  ViewTap: {

    top: 0,
    backgroundColor: "#fff",
    padding: width * "0.06",
    paddingTop: height * "0.05",

    paddingBottom:height * "0.02",


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
  }

});

export default contact;
