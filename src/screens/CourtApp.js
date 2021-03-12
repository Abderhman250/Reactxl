import React, { Component } from "react";
import { Dimensions, Picker, Text, StyleSheet, View, TextInput, Linking, Image, ScrollView, ImageBackground } from "react-native";
import { FontAwesome, AntDesign, Entypo, Feather, Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons, EvilIcons, SimpleLineIcons, Fontisto } from '@expo/vector-icons';

import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, ThemeProvider, colors } from 'react-native-elements';
import { Platform } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Layout from "../compnents/Layout";
import { Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-ionicons'

const image = { uri: "../../assets/logoOF.png" };


class CourtApp extends React.Component {
    // color = new Array([{ backgroundColor: "rgba(192, 125, 2, 0.671)" }], "", "", "", "", "");


    constructor(props) {
        super(props)

        this.state = {
            FlagPhon: false,
        };

    }

    linkPhone(phoneNumber) {
        Linking.openURL(phoneNumber);

    }
    render() {
        const { navigation } = this.props.navigation;
        console.log(Actions);



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

                <ScrollView >
                    <View style={styles.ScrollViews}>
                        <Text style={styles.textColor}> Defendant's  Name : </Text>

                        <View style={styles.inputViwe}>

                            <TextInput
                                style={styles.input}
                            />
                        </View>
                        <Text style={styles.textColor}>
                            Court Location :
                    </Text>

                        <View style={styles.inputViwe, styles.ViewLoction}>

                            <TextInput
                                style={styles.inputLoction}
                            />
                            <TouchableOpacity style={styles.btnLoction} >
                                <FontAwesome name="map-pin" size={20} color="red" />
                                <Text style={styles.TextBtnLoction}>
                                    PICK
                            </Text>

                            </TouchableOpacity>
                        </View>

                        <Text style={styles.textColor}> Judge's Name </Text>

                        <View style={styles.inputViwe}>

                            <TextInput
                                style={styles.input}
                            />
                        </View>

                        <Text style={styles.textColor}> Date: </Text>
                        <View style={styles.inputViwe, styles.ViewLoction}>

                            <TextInput
                                style={styles.inputLoction}
                            />
                            <TouchableOpacity style={styles.btnLoction} >
                                <Fontisto name="date" size={24} color="green" />
                                <Text style={styles.TextBtnLoction}>
                                    PICK
                         </Text>

                            </TouchableOpacity>
                        </View>


                        <Text style={styles.textColor}> Time: </Text>
                        <View style={styles.inputViwe, styles.ViewLoction}>

                            <TextInput
                                style={styles.inputLoction}
                            />
                            <TouchableOpacity style={styles.btnLoction} >
                                <Entypo name="back-in-time" size={28} color="#534401" />
                                <Text style={styles.TextBtnLoction}>
                                    PICK
                         </Text>

                            </TouchableOpacity>
                        </View>
                        <Text style={styles.textColor}> Your Email </Text>

                        <View style={styles.inputViwe}>

                            <TextInput
                                style={styles.input}
                            />
                        </View>

                        <Text style={styles.textColor}> Next Court Date: </Text>
                        <View style={styles.inputViwe, styles.ViewLoction}>

                            <TextInput
                                style={styles.inputLoction}
                            />
                            <TouchableOpacity style={styles.btnLoction} >
                                <Fontisto name="date" size={24} color="green" />
                                <Text style={styles.TextBtnLoction}>
                                    PICK
                         </Text>

                            </TouchableOpacity>
                        </View>

                        <Text style={styles.textColor}> Comments </Text>

                        <View style={styles.inputViwe}>

                            <TextInput
                                style={styles.input}
                            />
                        </View>


                        <Text style={styles.textColor}> Photos of Any court documents you received :</Text>
                        <View style={styles.inputViwe, styles.ViewLoction}>


                            <TouchableOpacity style={styles.btnLoction, styles.btnSign} onPress={() => Actions.Sign()}   >
                                <Entypo name="camera" size={24} color="black" />
                                <Text style={styles.TextBtnLoction}>
                                    TAKE
                             </Text>
                            </TouchableOpacity>

                            <Image
                                style={styles.imgSign}
                                source={require('./../../assets/Photos.jpg')}
                                resizeMode='stretch'

                            />
                        </View>


                        <Text style={styles.textColor}>  My Signature attestes that I attended court on the stated data above  </Text>
                        <View style={styles.inputViwe, styles.ViewLoction}>


                            <TouchableOpacity style={styles.btnLoction, styles.btnSign} onPress={() => Actions.Sign()}   >
                                <Text style={styles.TextBtnLoction}>
                                    SIGN
                             </Text>
                            </TouchableOpacity>

                            <Image
                                style={styles.imgSign}
                                source={require('./../../assets/pencil.jpg')}
                                resizeMode='stretch'

                            />
                        </View>
                        <View style={styles.inputViwe, styles.ViewLoction}>



                            <TouchableOpacity style={styles.submit} onPress={() => Actions.Sign()}   >
                                <Text style={styles.TextBtnLoction}>
                                SUBMIT
                             </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.btnCallView}>

                            {/* <TouchableOpacity style={styles.btnCall} >

            <Text style={styles.btnCallText2}>
                svae
            </Text>

        </TouchableOpacity> */}

                        </View>
                    </View>
                </ScrollView>

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



    ViewTap: {

        top: 0,
        backgroundColor: "#fff",
        padding: width * "0.06",
        paddingTop: height * "0.05",

        paddingBottom: height * "0.02",


    },
    rowTap: {

        justifyContent: 'center',
        alignItems: 'center',

        flexDirection: "row"
    },
    colTap: {
        marginLeft: width * "0.1",
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
        marginBottom: Dimensions.get('window').height * "0.03",
        marginLeft: Dimensions.get('window').width * "0.05",


    }, input: {


        width: Dimensions.get('window').width * "0.9",
        height: Dimensions.get('window').height * "0.04",
        borderBottomWidth: 2,
        borderColor: "#fff",
    }, textColor: {

        color: "#ffff",
        // fontFamily: "Cochin",
        fontSize: 14,
        marginLeft: Dimensions.get('window').height * "0.02",
        marginTop: Dimensions.get('window').height * "0.02",


    }, ViewLoction: {

        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

    }, inputLoction: {
        width: Dimensions.get('window').width * "0.7",
        height: Dimensions.get('window').height * "0.04",
        marginLeft: Dimensions.get('window').height * "0.01",
        marginRight: Dimensions.get('window').height * "0.01",


        borderBottomWidth: 2,
        borderColor: "#fff",

    }, btnLoction: {

        width: Dimensions.get('window').width * "0.2",
        height: Dimensions.get('window').height * "0.07",
        top: Dimensions.get('window').height * "0.02",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#bdbdbdf6",
        backgroundColor: "#bdbdbdf6",

        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

    }, TextBtnLoction: {
        marginLeft: Dimensions.get('window').height * "0.006",

        fontSize: 16,

    }, imgSign: {
        width: Dimensions.get('window').width * "0.7",
        height: Dimensions.get('window').height * "0.4",
        borderRadius: 20,
        marginTop: Dimensions.get('window').height * "0.03",
        marginLeft: Dimensions.get('window').height * "0.03",


    }, btnSign: {
        width: Dimensions.get('window').width * "0.2",
        height: Dimensions.get('window').height * "0.08",
        bottom: Dimensions.get('window').height * "0.080",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#bdbdbdf6",
        backgroundColor: "#bdbdbdf6",

        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

    }, ScrollViews: {

        marginTop: Dimensions.get('window').height * "0.07",
    }, submit: {


        width: Dimensions.get('window').width * "0.8",
        height: Dimensions.get('window').height * "0.08",
        top: Dimensions.get('window').height * "0.080",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#bdbdbdf6",
        backgroundColor: "#bdbdbdf6",

        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

    }


});
export default CourtApp;
