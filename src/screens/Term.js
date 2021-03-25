import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Button } from 'react-native';
import Header from '../components/Headers';
import Footer from '../components/Footers';


const Term = ({navigation}) => {
    return (
        <>
            <SafeAreaView>
                <Header navigation={navigation} />
            </SafeAreaView>
            <ScrollView>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
                    <Text style={{fontSize:20}}>이용약관</Text>
                </View>
                <Footer navigation={navigation} />
            </ScrollView>
        </>
    );
};

export default Term;