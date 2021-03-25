import React from 'react';
import { SafeAreaView, View, Text, Button, ScrollView } from 'react-native';
import Headers from '../components/Headers';
import Main from '../components/Main';
import Footer from '../components/Footers';



const Home = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
            <Headers navigation={navigation} />
            <ScrollView>
                <Main navigation={navigation} />
                <Footer navigation={navigation} />
            </ScrollView>
       </SafeAreaView>
    );
};


export default Home;