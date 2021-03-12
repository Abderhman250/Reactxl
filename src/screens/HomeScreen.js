import React, { Component } from "react";
import { Dimensions,Text, StyleSheet, View, TextInput, Image, Button, ScrollView, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SliderBox } from "react-native-image-slider-box";


class HomeScreen extends React.Component {



  constructor(props) {
    super(props)

    this.state = {
      images: [
     
        require('./../../assets/LogoSlider.png'),    
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        "https://source.unsplash.com/1024x768/?tree", 
      ],
      categorys:"CCTV",


    };
  }
  
 
  chooseCategory(category,navigation){


     this.setState({ categorys: category });
     navigation.navigate('category',{data:this.state});
  }

  render() {
    const { navigation } = this.props.navigation;
    return (<ScrollView style={{}}>
      <SliderBox

        images={this.state.images}
        sliderBoxHeight={250}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)"
        }}
        ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
        imageLoadingColor="#2196F3"
      />


      <View style={styles.ViewClomButtons}>
        <View style={styles.ViewRowButtons}>
          <View style={[styles.Button1, { borderBottomEndRadius: 0, borderTopLeftRadius: 0 ,}]} >

            <TouchableOpacity   onPress={() => this.chooseCategory("CCTV",this.props.navigation)}>


              <Text style={styles.TextButton}> A/C </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.Button1, { borderBottomLeftRadius: 0, borderTopRightRadius: 0, }]}>

            <TouchableOpacity  onPress={() => this.chooseCategory("Satellite",this.props.navigation)} >

              <Text style={styles.TextButton}> Electric Home Appliances </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.ViewRowButtons}>
          <View style={[styles.Button1, { borderTopRightRadius: 0, borderBottomLeftRadius: 0, }]} >
            <TouchableOpacity  onPress={() => this.chooseCategory("Network",this.props.navigation)} >
              <Text style={styles.TextButton}> Cleaning & Hospitality </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.Button1, { borderTopLeftRadius: 0, borderBottomEndRadius: 0 }]}>

            <TouchableOpacity   onPress={() => this.chooseCategory("Arial",this.props.navigation)}>


              <Text style={styles.TextButton}> Sound Systems</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ViewRowButtons}>
          <View style={[styles.Button1, { borderBottomEndRadius: 0, borderTopLeftRadius: 0 ,}]} >

            <TouchableOpacity   onPress={() => this.chooseCategory("CCTV",this.props.navigation)}>


              <Text style={styles.TextButton}> Wi-Fi Network </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.Button1, { borderBottomLeftRadius: 0, borderTopRightRadius: 0, }]}>

            <TouchableOpacity  onPress={() => this.chooseCategory("Satellite",this.props.navigation)} >

              <Text style={styles.TextButton}> CCTV </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.ViewRowButtons}>
          <View style={[styles.Button1, { borderTopRightRadius: 0, borderBottomLeftRadius: 0, }]} >
            <TouchableOpacity  onPress={() => this.chooseCategory("Network",this.props.navigation)} >
              <Text style={styles.TextButton}> Satellite TV</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.Button1, { borderTopLeftRadius: 0, borderBottomEndRadius: 0 }]}>

            <TouchableOpacity   onPress={() => this.chooseCategory("Mobiles/Computers",this.props.navigation)}>


              <Text style={styles.TextButton}>Mobiles/Computers </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
    );

  }

}

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ViewClomButtons: {
    marginTop: heightWindow *"0.08",
  },
  ViewRowButtons: {

    marginTop: heightWindow *"0.001",

    flexDirection: 'row',

    justifyContent:"center",

    marginLeft:widthWindow *"0.02",
    marginRight:widthWindow *"0.02",
  },
  Button: {
    borderWidth: 3,
   
    borderRadius: 100,
    backgroundColor: "#3a0052",


    justifyContent:"center",

  
  },
  Button1: {

    borderWidth: 3,
    borderRadius: 30,
    borderColor: "#000",
    backgroundColor: "#000",
    marginLeft:widthWindow *"0.002",
   
    width:widthWindow *"0.02",
    flex: 1,
    height:heightWindow*".12",
    alignItems:"center",

    justifyContent:"center",
  },
  TextButton: {

    fontSize: 12,
    color: "#fff",
    justifyContent:"center",

    alignItems:"center"
  }
});


export default HomeScreen;
