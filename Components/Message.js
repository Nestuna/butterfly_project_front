import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet  } from 'react-native'

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.user = '';
    }

    render() {
        const { isUser, username, text } = this.props;
        console.log(this.user);
        const user_style = isUser ? styles.user_message : styles.dest_message;
        return (
            <View style={[styles.message_container, {justifyContent: isUser ? 'flex-end' : 'flex-start'}]}>
                <View style={[styles.message_box, user_style]}>
                    <Text style={[styles.message_text, user_style]}>
                        <Text style={[styles.message_text, user_style, {fontStyle: 'italic', textTransform: 'capitalize'}]}>
                            {username} {'\n'}
                        </Text>
                        {text}
                    </Text>
                </View>
            </View>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    message_container: {
        flexDirection: 'row',
    },
    message_box: {
        flex: 0.7,
        margin: '3%',
        padding: '3%',
        borderRadius: 15
    }
    ,
    message_text: {
        fontSize: 16,
    },
    user_message: {
        backgroundColor: '#737580',
        color: '#FFF',
        justifyContent: 'flex-end',
        borderBottomRightRadius: 0,

    },
    dest_message: {
        backgroundColor: '#E2E6EA',
        color: '#000',
        borderBottomLeftRadius: 0
    }
})
