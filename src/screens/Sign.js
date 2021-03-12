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
// import Sketch from 'react-native-sketch';
const image = { uri: "../../assets/logoOF.png" };


class Sign extends React.Component {
    color = new Array([{ backgroundColor: "rgba(192, 125, 2, 0.671)" }], "", "", "", "", "");


    constructor(props) {
        super(props)

        this.state = {
            Username: '',
        };

    }
    save = () => {
        this.sketch.save().then(({ path }) => {
          Alert.alert('Image saved!', path);
        });
      };
    render() {
        const { navigation } = this.props.navigation;


        return (
            <View style={{ flex: 1 }}>
            {/* <Sketch
              ref={sketch => {
                this.sketch = sketch;
              }}
              strokeColor="#ff69b4"
              strokeThickness={3}
            /> */}
            <Button onPress={this.save} title="Save" />
          </View>
    
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
        top: height * "0.1"


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

export default Sign;
