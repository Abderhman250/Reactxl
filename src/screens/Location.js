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


class Location extends React.Component {
    // color = new Array([{ backgroundColor: "rgba(192, 125, 2, 0.671)" }], "", "", "", "", "");


    constructor(props) {
        super(props)

        this.state = {
            FlagPhon: false,
        };

    }

 
    linkPhone(phone) {
                
    let phoneNumber =phone;

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${phoneNumber}`;
    } else {

      phoneNumber = `telprompt:${phoneNumber}`;
    }

        Linking.openURL(phoneNumber);

    }
    linkGoogleMap(lat) {
                
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${lat}`;
        const label = 'Custom Label';
        const url = Platform.select({
          ios: `${scheme}${label}`,
          android: `${scheme}${latLng}(${label})`
        });
    
            Linking.openURL(url);
    
        }
    render() {
        const { navigation } = this.props.navigation;
        console.log(Actions);



        return (

            <View style={styles.backgroundView}>
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




                </View>
                <View style={styles.backgroundIcons}>
                    <View style={styles.centerText}>
                        <Text style={styles.Text2}>
                            Fort Worth, TX (Mian Office)
                       </Text>
                    </View>

                    <View style={styles.RowButton}>
                        <TouchableOpacity style={styles.icons} onPress={() => this.linkPhone("8773200580")} >


                            <Image
                                style={styles.imgPhone}
                                source={require('./../../assets/iphon.png')}
                                resizeMode='stretch'
                            />
                            <Text style={styles.TextIcon}>
                                Call
                             </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icons} onPress={() => this.linkGoogleMap("4500 Airport Fwy, Fort Worth, TX 76117، الولايات المتحدة")} >

                            <Image
                                style={styles.imgPhone}
                                source={require('./../../assets/Gps.jpg')}
                                resizeMode='stretch'
                            />
                            <Text style={styles.TextIcon}>
                                GPS Directions
                             </Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.RowButton2}>
                        <TouchableOpacity style={styles.icons} onPress={() => Actions.cheack_In()} >

                            <Image
                                style={styles.imgPhone}
                                source={require('./../../assets/checkin.png')}
                                resizeMode='stretch'
                            />
                            <Text style={styles.TextIcon}>
                                Check-In
                             </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icons} onPress={() => Actions.CourtApp()} >


                            <Image
                                style={styles.imgPhone}
                                source={require('./../../assets/court.png')}
                                resizeMode='stretch'
                            />
                            <Text style={styles.TextIcon}>
                                Court Appearances 

                             </Text>
                        </TouchableOpacity>

                    </View>


                </View>





            </View>
        );



    }
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    backgroundView: {


        flex: 1,

        backgroundColor: "#1a1b1bf6",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

    },
    centerText: {

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * "0.1",
        marginTop: Dimensions.get('window').height * "0.02",
        justifyContent: 'center',
        alignItems: 'center',
    }, Text2: {

        color: "#fff",
        // fontFamily: "Cochin",
        fontSize: 22,
    }, RowButton: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * "0.22",

        marginRight: Dimensions.get('window').width * "0.04",
        marginLeft: Dimensions.get('window').width * "0.04",

    }, imgPhone: {

        width: Dimensions.get('window').width * "0.25",
        height: Dimensions.get('window').height * "0.15",
        margin: Dimensions.get('window').width * "0.07",
        marginBottom: Dimensions.get('window').width * "0.01",

    }, RowButton2: {
        marginRight: Dimensions.get('window').width * "0.04",
        marginLeft: Dimensions.get('window').width * "0.04",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    }, TextIcon: {
        color: "#fff",
        fontSize: 14,
    },

    backgroundIcons: {

        top: Dimensions.get('window').height * "0.21",

        height: Dimensions.get('window').height * "0.15",

        flex: 1,


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


    }, close: {

        marginLeft: Dimensions.get('window').width * "0.08",

        padding: 0,
    }


});
export default Location;
