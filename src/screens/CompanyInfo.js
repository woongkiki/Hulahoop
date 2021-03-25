import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Button } from 'react-native';
import Header from '../components/Headers';
import Footer from '../components/Footers';


const ComponayInfo = ({navigation}) => {
    return (
        <>
            <SafeAreaView>
                <Header navigation={navigation} />
            </SafeAreaView>
            <ScrollView>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
                    <Text style={{fontSize:20}}>회사소개</Text>
                </View>
                <Footer navigation={navigation} />
            </ScrollView>
        </>
    );
};

export default ComponayInfo;