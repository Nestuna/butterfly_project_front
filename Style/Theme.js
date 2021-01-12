// ./Style/Theme

import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const theme = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: '#9299A3',
      alignItems: 'center',
      // paddingTop: '5%',
      width: windowWidth
    },
    text : {
      color: '#eee'
    },
    title : {
      fontFamily: 'Verdana',
      textAlign: 'center'
    },
    big_title : {
      fontFamily: 'Verdana',
      textAlign: 'center'
    },

    text_input : {
      backgroundColor: '#eee',
      width: windowWidth * 0.8,
      height: windowHeight * 0.1,
      marginTop: '5%' ,
      padding: '5%',
      fontSize: 16
    },
    button : {
      backgroundColor: '#737580',
      margin: '10%',
      padding: '5%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
