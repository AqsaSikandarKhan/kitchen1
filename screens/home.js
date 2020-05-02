import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Title, CardItem ,Thumbnail} from 'native-base';
import {View,StyleSheet,Image,TouchableHighlight,ScrollView, Dimensions} from 'react-native'
import { Card,CardMedia,CardActions,CardContent } from 'material-bread';
import { SliderBox } from "react-native-image-slider-box";
import ViewSlider from 'react-native-view-slider';
// import {ScrollView} from "react-native-reanimated/react-native-reanimated.d";
import { images, theme } from "../Constants";
const { background } = images;
const { width, height } = Dimensions.get('window');
export default class home extends Component {
    constructor(props){
        super(props);
        //this below code is for image slider till next comment
        this.state={
            message:'ingredients data',
            images: [
                background.slider1,
                background.slider2,
                background.slider3,
                background.slider4,
                // require('./assets/images/girl.jpg'),          // Local image
            ]

    };// this will be our initiale data that will upadate later
    }

    onPress = () => {

        this.props.navigation.navigate('ingredient')

    };

    onPressChangetoGass = () => {

        this.props.navigation.navigate('gass')

    };
    onPressChangetoSmoke = () => {

        this.props.navigation.navigate('smoke')

    };
    onPressChangetoAbout= () => {

        this.props.navigation.navigate('about')

    };


    render() {
        return (
            <View style={styles.container1}>
                <ScrollView>
                <View>
                    <SliderBox images={this.state.images} />
                    {/*<Image*/}
                        {/*source={background.slider2}*/}
                        {/*style={{width:330,height:170}}*/}
                    {/*/>*/}

                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:'10%'}}>
                    <View>
                        <TouchableHighlight
                            onPress={this.onPress}
                        >
                        <Card>
                            <CardContent >
                                <Image
                                    style={styles.card_image}
                                    source={background.ingredients}
                                    resizeMode="cover"
                                />
                                <Text   style={styles.card_text}>
                                    Ingredient
                                </Text>
                            </CardContent>

                        </Card>
                        </TouchableHighlight>
                    </View>
                    <View style={{marginLeft:'10%'}}>
                        <TouchableHighlight
                            onPress={this.onPressChangetoGass}
                        >
                        <Card>
                            <CardContent >
                                <Image
                                    style={styles.card_image}
                                    source={background.gass}
                                    resizeMode="cover"
                                />

                                <Text style={styles.card_text}>
                                    Gass
                                </Text>
                            </CardContent>

                        </Card>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <TouchableHighlight
                            onPress={this.onPressChangetoSmoke}>

                        <Card>
                            <CardContent >
                                <Image
                                    style={styles.card_image}
                                    source={background.smoke}
                                    resizeMode="cover"
                                />

                                <Text style={styles.card_text}>
                                    Smoke
                                </Text>
                            </CardContent>

                        </Card>
                        </TouchableHighlight>
                    </View>
                    <View style={{marginLeft:'10%'}}>
                        <TouchableHighlight
                            onPress={this.onPressChangetoAbout}>
                        <Card>
                            <CardContent >
                                <Image
                                    style={styles.card_image}
                                    source={background.about}
                                    resizeMode="cover"
                                />

                                <Text style={styles.card_text}>
                                   About
                                </Text>
                            </CardContent>

                        </Card>
                        </TouchableHighlight>
                    </View>
                </View>
                </ScrollView>
            </View>

        );
    }

    componentDidMount(){
        this.setState({
            message:'i got changed new'
        })
    }


}
const styles = StyleSheet.create({
    container1: {
       flex:1,
    },
    slider_image:{
        width:'30%',
        height:100,
    },
    view_card1234: {
        flexDirection:'row',
         // marginTop:'10%',
         // marginBottom:'2%',
    },
    view2_card1234: {
        flexDirection: 'row',
        marginLeft:40,
    },
    card1234: {
        width: 120,
        height:140,
    },
    card_image: {
        width: 70,
        height:70,
        borderRadius:150/2
    },
    card_text: {
        color: 'rgba(0,0,0,.6)',
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 10,
        marginLeft:10,
        marginTop:10
    },
});