import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountDetails from '../components/AccountDetails';

const Stack = createNativeStackNavigator();

const AccountDeatlNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Create your account' component = {AccountDetails}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AccountDeatlNavigation;


