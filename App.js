/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingPage from './components/UI/LoadingPage';
import AccountDetails from './components/AccountDetails';

import userReducer from './store/reducer/user';

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {

  const [isBiometryTpe, setIsBiometryTpe] = useState(false);
  const [isFaceId, setIsFaceId] = useState(false);
  const [isAuthenticated, setsAuthenticated] = useState(false);

  const getBiometryTpe = useCallback(async () => {
    const { available, biometryType } = await ReactNativeBiometrics.isSensorAvailable();
      if (available) {
        if (biometryType === ReactNativeBiometrics.FaceID) {
          setIsFaceId(true);
        }
        setIsFaceId(fa)
        setIsBiometryTpe(true);
      } else {
        setIsBiometryTpe(false);
      }
  });

  useEffect(() => {
    getBiometryTpe();
  }, []);

  return (
    <Provider store={store}>
      <View style ={styles.appContainer}>
          <LoadingPage>
              <View style ={styles.containerTop}>
                <Image  source={require('./assets/image/onWhite.png')} />
              </View>
      <View style = {styles.containerBottom}>
       {isBiometryTpe ? (
             <View style = {styles.biometryTpeContainer}>
               {isFaceId ? (
                 <View style = {styles.biometryTpeContent}>
                    <Image style = {styles.fingerPrintImage} source={require('./assets/image/faceId.png')} />
                    <Text style = {styles.textTop}>Unloack with your face</Text>
                 </View>
               ): (
                  <View style = {styles.biometryTpeContent}>
                    <Image style = {styles.fingerPrintImage} source={require('./assets/image/fingerprint.png')} />
                     <Text style = {styles.textTop}>Unloack with your fingerprint</Text>
                  </View>
               )}
             <Text style = {styles.textBottom}>USE PIN CODE INSTEAD</Text>
            </View>
        ):
        <View>
         <Text style = {styles.textBottom}>USE PIN CODE INSTEAD</Text>
        </View>
       }
     </View>
    </LoadingPage>
  </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#00A36C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBottom: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
},
textTop: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10
},
textBottom: {
    color: '#00A36C',
    fontSize: 14
},
fingerPrintImage: {
    marginBottom: 10
},
biometryTpeContainer: {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
},
biometryTpeContent: {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
}
});

export default App;
