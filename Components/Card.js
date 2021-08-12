import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
    <View style={{...styles.card, ...props.styles}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex:1,
        elevation:4,
        alignItems:'center',
        backgroundColor:'white',
        padding:30,
        borderRadius:10,

      },

});

export default Card;