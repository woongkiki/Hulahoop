import React from 'react';
import {SafeAreaView, View, Text, Button ,Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';


const HeaderTopContainer = styled.View`
    
    height:50px;
    padding:5px 0;
    background-color:#fff;
`;

const HeaderTopInner = styled.View`
    flex-direction: row;
    justify-content: space-around;
    height:50px;
`;

const Leftbox = styled.View`
    flex-direction: row;
    align-items:center;
    justify-content:space-around;
    flex:1;
    /*background-color:#fcf;*/

`;

const CenterBox = styled.View`
    justify-content: center;
    align-items: center;
    flex:2;
    /* background-color:#fcc; */
`;

const Rightbox = styled.View`
    justify-content: flex-end;
    align-items:center;
    flex-direction: row;
    justify-content:space-around;
    flex: 1;
    /* background-color:#ccf; */
`;

const HeaderBottomContainer = styled.View`
    height:50px;
`;

const HeaderBottomInner = styled.View`
    background-color:#fff;
    justify-content:space-around;
    flex-direction:row;
    align-items:center;
    height:50px;
`;

const CustomButton = styled.TouchableOpacity`
    border:none;
    
`;

const CustomButtonText = styled.Text`
    font-size:15px;
    font-weight:500;
    color:#191919;

`;


const Headers = ({navigation}) => {
    return (
        <View>
            <HeaderTopContainer>
                <HeaderTopInner>
                    <Leftbox>
                        <CustomButton>
                            <Image source={require('../images/top_menu.png')} />
                        </CustomButton>
                        <CustomButton>
                            <Image source={require('../images/mob_search.png')} />
                        </CustomButton>
                    </Leftbox>
                    <CenterBox>
                        <CustomButton onPress={()=>navigation.navigate('Home')}>
                            <Image source={require('../images/main_logo.png')} />
                        </CustomButton>
                    </CenterBox>
                    <Rightbox>
                        <CustomButton>
                            <Image source={require('../images/top_bell.png')} />
                        </CustomButton>
                        <CustomButton>
                            <Image source={require('../images/top_use.png')} />
                        </CustomButton>
                    </Rightbox>
                </HeaderTopInner>
            </HeaderTopContainer>

            <HeaderBottomContainer>
                <HeaderBottomInner>
                    <CustomButton onPress={()=>navigation.navigate('Mywork')}><CustomButtonText>연재</CustomButtonText></CustomButton>
                    <CustomButton><CustomButtonText>완결</CustomButtonText></CustomButton>
                    <CustomButton><CustomButtonText>이벤트</CustomButtonText></CustomButton>
                    <CustomButton><CustomButtonText>Shop</CustomButtonText></CustomButton>
                </HeaderBottomInner>
            </HeaderBottomContainer>
        </View>
    );
};

export default Headers;