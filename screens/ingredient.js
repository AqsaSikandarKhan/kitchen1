import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Title, CardItem ,Thumbnail} from 'native-base';
import {View,StyleSheet,Image,ScrollView,TouchableHighlight,Ionicons} from 'react-native'
import { Card,CardMedia,CardActions,CardContent,Menu,MenuItem } from 'material-bread';

export default class ingredient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }


    }
    onPressSugar = () => {

        this.props.navigation.navigate('Sugar')

    };
    render() {
        return (
            <View style={styles.container1}>
                <ScrollView>
                <View>
                    <Header>
                        <Body>
                        <Title>Ingredients</Title>
                        </Body>
                        <Right/>
                    </Header>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:'20%'}}>
                    <View>
                        <TouchableHighlight
                            onPress={this.onPressSugar}
                        >
                        <Card>
                            <CardContent >
                                <Image
                                    style={styles.card_image}
                                    source={{uri: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                                    resizeMode="cover"
                                />
                                <Text style={styles.card_text}>
                                    Sugar
                                </Text>
                            </CardContent>

                        </Card>
                        </TouchableHighlight>
                    </View>
                    <View style={{marginLeft:'10%'}}>
                        <Card>
                            <CardContent >
                                <Image
                                    style={styles.card_image}
                                    source={{uri: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                                    resizeMode="cover"
                                />

                                <Text style={styles.card_text}>
                                    Salt
                                </Text>
                            </CardContent>

                        </Card>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <View>
                        <Card>
                            <CardContent >
                                <Image
                                    style={styles.card_image}
                                    source={{uri: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                                    resizeMode="cover"
                                />

                                <Text style={styles.card_text}>
                                    Pepper
                                </Text>
                            </CardContent>

                        </Card>
                    </View>
                    <View style={{marginLeft:'10%'}}>
                        <Card>
                            <CardContent >
                                <Image
                                    style={styles.card_image}
                                    source={{uri: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}
                                    resizeMode="cover"
                                />

                                <Text style={styles.card_text}>
                                    Masala's
                                </Text>
                            </CardContent>

                        </Card>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container1: {
        flex:1,
    },
    slider_image:{
        width:'100%',
        height:180,
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
        width: 80,
        height:80,
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