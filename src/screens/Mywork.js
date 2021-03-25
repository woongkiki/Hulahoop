import React from 'react';
import { SafeAreaView, View, Text, Button} from 'react-native';
import Header from '../components/Headers';
import Footer from '../components/Footers';
import { ScrollView } from 'react-native-gesture-handler';

const Mywork = ({navigation}) => {
    return (
        <>
            <SafeAreaView>
                <Header navigation={navigation} />
            </SafeAreaView>
            <ScrollView>
                <View style={{height:500, justifyContent:'center', alignItems:'center', backgroundColor:'#fcf'}}>
                
                    <Text style={{fontSize:20}}>나의 소장작품</Text>
                    <Button title='Home go' onPress={()=>navigation.navigate('Home')} />
                </View>
                <Footer />
            </ScrollView>
        </>
    );
};

export default Mywork;