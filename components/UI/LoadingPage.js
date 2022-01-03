import React from "react";
import { View,StyleSheet } from 'react-native';

const LoadingPage = (props) => {
    return (
        <View style ={styles.loadingContainer}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
    }
});


export default LoadingPage;