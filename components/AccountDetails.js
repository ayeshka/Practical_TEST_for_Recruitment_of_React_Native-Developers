import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const AccountDetails = (props) => {
    return (
        <View style = {styles.acountDetailsContainer}>
            <Text>Hello there!</Text>
            <Text>Lest get Started</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    acountDetailsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default AccountDetails;