import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Text, Header } from 'react-native-elements'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import { getMessagesFromApi, postMessageToApi } from '../API/ApiData'
import { theme } from '../Style/Theme'

import Message from './Message';

export default class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            access_id: ''
        }

        this.messageToSend = {
            username : '',
            text : '',
            access_id: this.state.access_id
        }

    }

    componentDidMount() {
        this._getMessages();
    }

    _getMessages = () => {
        getMessagesFromApi(this.state.access_id).then((data) => {
            console.log(data);
            this.setState({messages: data});
        });
    }
    _sendMessage = () => {
        postMessageToApi(this.messageToSend);
        this._getMessages();
    }


    render() {
        return (
            <View style={theme.main_container}>
                <View style={styles.chat_body}>
                    <FlatList
                        data={this.state.messages}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem = {({item}) => {
                            return(
                              <Message
                                isUser={this.messageToSend.username === item.username}
                                username={item.username}
                                text={item.text} />
                            );
                          }
                        }

                    />
                </View>
                <KeyboardAvoidingView
                    style={styles.chat_send}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TextInput style= {styles.message_input}
                        multiline={true}
                        onChangeText={text => this.messageToSend.text = text}
                    />
                    <TouchableOpacity style={styles.send_button} onPress= {() => this._sendMessage()}>
                        <Text style={theme.text}>Envoyer</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles= StyleSheet.create({
    header: {
        paddingTop: '5%',
        width: windowWidth * 0.9
    },
    chat_body: {
        flex : 5,
        backgroundColor: '#FFF',
        margin: '1%',
        minWidth: windowWidth * 0.97,
        height: windowHeight
    },
    chat_send: {
        backgroundColor: '#9299A3',
        padding: '1%',
        flexDirection: 'row',
        margin: '1%',
        alignItems: 'center',
        // minHeight: windowHeight * 0.05
    },
    message_input: {
        flex: 4,
        backgroundColor: '#FFF',
        margin: '0.5%',
        minHeight: windowHeight * 0.08,
        marginHorizontal: '1%',
        padding: '5%',
        fontSize: 16
    },
    send_button: {
        backgroundColor: '#737580',
        height: windowHeight * 0.05,
        padding: '1%',
        margin: '1%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    }
})
