import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Icon, Left, Body, Right, Switch, Title, CardItem ,Thumbnail, Item, Input} from 'native-base';
import {Image,ScrollView,StyleSheet, Button, View, SafeAreaView, Alert} from 'react-native'
import { Card,CardMedia,CardActions,CardContent, } from 'material-bread';
import * as firebase from 'firebase';
var sugarvariable=0;

export default class Sugar extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: 'hello world',
        } // this is our initial data
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    {/*<Text>*/}
                        {/*Enter the required amount in KG*/}
                    {/*</Text>*/}

                    <Item rounded>

                        <Input placeholder='Rounded Textbox'/>

                    </Item>
                    <View>
                        <Button
                            title="Add value"
                            color="#f194ff"
                            onPress={() => Alert.alert('Button with adjusted color pressed')}
                        />

                        <Text>
                            {
                                sugarvariable
                            }
                        </Text>
                    </View>
                </Content>
            </Container>

        );
    }
    readUserData() {
        console.log("hello")
        firebase.database().ref('ingredients').on('value', function (snapshot) {
            console.log("data is",snapshot.val())
            sugarvariable = (snapshot.val() && snapshot.val().sugar) || 'Anonymous';
        });
    }
    componentDidMount() {
        this.readUserData()
    }
}
