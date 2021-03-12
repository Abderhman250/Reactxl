import React, { Component } from "react";
import { Dimensions, Picker, Text, StyleSheet, View, TextInput, Image, ScrollView, ImageBackground, Linking } from "react-native";
import { FontAwesome, AntDesign, Entypo, Feather, Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, ThemeProvider, colors } from 'react-native-elements';
import { Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';

import Layout from "../compnents/Layout";
// import { startAsync } from "expo/build/AR";

const image = { uri: "../../assets/logoOF.png" };


class Call_to_check_in extends React.Component {
    color = new Array([{ backgroundColor: "rgba(192, 125, 2, 0.671)" }], "", "", "", "", "");


    constructor(props) {
        super(props)

        this.state = {
            Username: '',
        };

    }
    linkPhone(phone) {

        let phoneNumber = phone;

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${phoneNumber}`;
        } else {

            phoneNumber = `telprompt:${phoneNumber}`;
        }

        Linking.openURL(phoneNumber);

    }
    render() {
        const { navigation } = this.props.navigation;


        return (

            <View style={styles.backgroundView}>
                <View style={styles.ViewTap}>
                    <View style={styles.rowTap}>

                        <View style={styles.colTap, styles.icons}>
                            <TouchableOpacity style={styles.icons} onPress={() => Actions.Homes()} >

                                <FontAwesome name="home" size={24} color="black" />
                                <Text >HOME</Text>
                            </TouchableOpacity>

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
                <View style={styles.inputViwe}>
                <Text style={styles.textColor}> # Client ID </Text>

                    <TextInput
                        style={styles.input}
                    />
                </View>

                <View style={styles.btnCallView}>

                <TouchableOpacity style={styles.btnCall} >

                    <Text style={styles.btnCallText2}>
                        SAVE
                    </Text>

                </TouchableOpacity>

                </View>

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

        paddingBottom: height * "0.02",


    },
    rowTap: {


        flexDirection: "row"
    },
    colTap: {
        marginLeft: width * "0.12",
        // borderEndWidth:"1%"
    }, backgroundView: {


        flex: 1,

        backgroundColor: "#1a1b1bf6",
    }, topText: {

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * "0.1",
        marginTop: Dimensions.get('window').height * "0.02",
        justifyContent: 'center',
        alignItems: 'center',
    }, Text1: {

        color: "#fff",
        // fontFamily: "Cochin",
        fontSize: 25,
    }
    , centerText: {

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * "0.1",
        marginTop: Dimensions.get('window').height * "0.02",
        justifyContent: 'center',
        alignItems: 'center',
    }, Text2: {

        color: "#fff",
        // fontFamily: "Cochin",
        fontSize: 20,
    }, StoridView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * "0.1",
        marginTop: Dimensions.get('window').height * "0.02",
        justifyContent: 'center',
        alignItems: 'center',


    }, btnStorid: {

        width: Dimensions.get('window').width * "0.25",
        height: Dimensions.get('window').height * "0.08",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#bdbdbdf6",
        backgroundColor: "#bdbdbdf6",
        justifyContent: 'center',
        alignItems: 'center',


    }, btnStoridText: {


        color: "#000",
        // fontFamily: "Cochin",
        fontSize: 17,

    }, Text3: {

        color: "#fff",
        // fontFamily: "Cochin",
        fontSize: 22,


    }, btnCallView: {

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * "0.1",
        marginTop: Dimensions.get('window').height * "0.02",
        justifyContent: 'center',
        alignItems: 'center',

    }
    , btnCall: {

        width: Dimensions.get('window').width * "0.6",
        height: Dimensions.get('window').height * "0.08",
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#bdbdbdf6",
        backgroundColor: "#bdbdbdf6",
        justifyContent: 'center',
        alignItems: 'center',


    }
    , btnCallText2: {

        color: "#000",
        // fontFamily: "Cochin",
        fontSize: 22,

    }, inputViwe: {


        width: Dimensions.get('window').width * "0.9",
        height: Dimensions.get('window').height * "0.2",
       marginLeft :Dimensions.get('window').width * "0.05",
        justifyContent: 'center',
        alignItems: 'center',

    }, input: {


        width: Dimensions.get('window').width * "0.8",
        height: Dimensions.get('window').height * "0.04",
        borderBottomWidth: 2,
        borderColor: "#fff",
    },textColor :{
      
        color: "#ffff",
        // fontFamily: "Cochin",
        fontSize: 14,
         right:  Dimensions.get('window').width * "0.32",


    }


});

export default Call_to_check_in;
