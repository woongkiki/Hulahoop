import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Mywork from '../screens/Mywork';
import CompanyInfo from '../screens/CompanyInfo';
import Term from '../screens/Term';
import EmailReject from '../screens/EmailReject';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"
                component={Home} 
                options={{headerShown:false}}
            />
            <Stack.Screen name="Mywork" component={Mywork} options={{headerShown:false}}/>
            <Stack.Screen name="CompanyInfo" component={CompanyInfo} options={{headerShown:false}} />
            <Stack.Screen name="Term" component={Term} options={{headerShown:false}} />
            <Stack.Screen name="EmailReject" component={EmailReject} options={{headerShown:false}} />

        </Stack.Navigator>
    );
};

export default StackNavigation;