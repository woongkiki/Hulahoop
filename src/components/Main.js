import { Row } from 'native-base';
import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityComponent, FlatList } from 'react-native';
import styled from 'styled-components/native';
import BannerSlide from './BannerSlide';

const MainContainer = styled.View`
    flex:1;
    background-color: white;
`;

const MainBannerWrap = styled.View`
    width: 100%;
    height: 260px;
    background-color: #F5F5F5;
    align-items:center;
    padding: 20px 20px 0;
`;

const MainBannerBox = styled.View`
    width:90%;
    height: 200px;
    background-color: #6055B8;
    border-radius: 10px;
`;

const TimePopularItemWrap = styled.View`
    width: 100%;
    padding: 35px 20px;
    border-bottom-width:1px;
    border-bottom-color:#707070;
`;

const TitleInner = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-bottom: 30px;
    align-items:center;
`;

const ItemBoxThree = styled.View`
    width: 31%;
    height: 190px;
    background-color:#fcf;
`;

const NowTimeBox = styled.View`
    padding: 5px 15px;
    border-radius: 10px;
    background-color: rgba(223,152,193, 0.09);
    flex-direction:row;
    align-items:center;
`;

const MainTitle = styled.Text`
    font-size:18px;
    color:${props => props.color || '#000'};
    font-weight:bold;
`;

const RecommendWrap = styled.View`
    padding:20px 20px 40px;
`;

const RecommendBtnWrap = styled.View`
    flex-direction: row;
    align-items:center;
`;

const MainItemWrap = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const ItemBoxTwo = styled.View`
    width: 48%;
    height: 360px;
    background-color: blue;
`;


const PopularWrap = styled.View`
    padding: 35px 20px 50px;
    background-color: rgba(223,152,193, 0.11);
`;

const TodayWrap = styled.View`
    padding:10px 20px 30px;
`;

const TodayBox = styled.View`
    border-width:1px;
    border-color:#e3e3e3;
    padding:35px 0;
    text-align:center;
    align-items:center;
    border-radius: 10px;
`;

const NewWorkWrap = styled.View`
   
    padding:0 20px;
`;

const NewWorkContent = styled.View`
    height: 330px;
    background: purple;
`;

const EventWrap = styled.View`
    padding: 0 20px;
    margin: 25px 0;
`;

const NoticeWrap = styled.View`
    padding: 0 20px;
`;

const NoticeContainer = styled.View`
    position:relative;
    height:160px;
    background:#993;
    flex-direction:column;
    justify-content:space-between;
    margin-bottom:20px;
`;


const VoiceWrap = styled.ImageBackground`
    padding:26px 20px;
    height: 400px;
`;
  
const VoiceContents = styled.View`
    width: 100%;
    height : 268px;
    background:#fff;
`;


const Main = () => {



    return (
        <MainContainer>
            <MainBannerWrap>
                <BannerSlide />
            </MainBannerWrap>
            <TimePopularItemWrap>
                <TitleInner>
                    <MainTitle>
                        실시간 인기작품
                    </MainTitle>
                    <NowTimeBox>
                        <Image source={require('../images/nowtime_icon.png')} style={{marginRight:10}} />
                        <Text style={{fontSize:12,color:'#DF98C1'}}>오전 09시 15분 기준</Text>
                    </NowTimeBox>
                    
                </TitleInner>
                <MainItemWrap>
                    <ItemBoxThree></ItemBoxThree>
                    <ItemBoxThree></ItemBoxThree>
                    <ItemBoxThree></ItemBoxThree>
                </MainItemWrap>
            </TimePopularItemWrap>
            <RecommendWrap>
                <TitleInner>
                    <MainTitle>
                        추천작품
                    </MainTitle>
                    <RecommendBtnWrap>
                        <View style={{flexDirection:'row', marginRight:10}}>
                            <TouchableOpacity><Image source={require('../images/left_btn.png')} /></TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:-1}}><Image source={require('../images/right_btn.png')} /></TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity><Image source={require('../images/plus_btn.png')} /></TouchableOpacity>
                        </View>
                    </RecommendBtnWrap>
                </TitleInner>
                <MainItemWrap>
                    <ItemBoxTwo />
                    <ItemBoxTwo />
                </MainItemWrap>
            </RecommendWrap>
            <PopularWrap>
                <TitleInner>
                    <MainTitle>
                        인기작품
                    </MainTitle>
                    <RecommendBtnWrap>
                        <View style={{flexDirection:'row', marginRight:10}}>
                            <TouchableOpacity><Image source={require('../images/left_btn.png')} /></TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:-1}}><Image source={require('../images/right_btn.png')} /></TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity><Image source={require('../images/plus_btn.png')} /></TouchableOpacity>
                        </View>
                    </RecommendBtnWrap>
                </TitleInner>
                <MainItemWrap>
                    <ItemBoxTwo />
                    <ItemBoxTwo />
                </MainItemWrap>
            </PopularWrap>
            <TodayWrap>
                <TodayBox>
                    <View>
                        <Image source={require('../images/today_book_tit.png')} />
                    </View>
                    <View style={{marginTop:20}}>
                        <Image source={require('../images/today_thumb.png')} />
                    </View>
                    <View style={{alignItems:'center', marginTop: 15}}>
                        <Text style={{fontSize:22, fontWeight: 'bold', letterSpacing: -0.03, lineHeight: 32}}>레인보우 시티(Rainbow City)</Text>
                        <Text style={{fontSize:13, fontWeight: '300', color: '#262626', marginTop:5}}>원작 채팔이</Text>
                        <Text style={{fontSize:14, marginTop:10, lineHeight: 20}}>이다은, 황찬영, 김은애, 최승훈, 홍벅기, 박노식</Text>
                        <Text style={{fontSize:13, color:'#DF98C1', marginTop:10}}>#로맨스 #프로성우 #시대물</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:20}}>
                        <TouchableOpacity><Image source={require('../images/left_btn.png')} /></TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:-1}}><Image source={require('../images/right_btn.png')} /></TouchableOpacity>
                    </View>
                </TodayBox>
            </TodayWrap>
            <NewWorkWrap>
                <TitleInner>
                    <MainTitle>
                        신규작품
                    </MainTitle>
                    <RecommendBtnWrap>
                        <View style={{flexDirection:'row', marginRight:10}}>
                            <TouchableOpacity><Image source={require('../images/left_btn.png')} /></TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:-1}}><Image source={require('../images/right_btn.png')} /></TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity><Image source={require('../images/plus_btn.png')} /></TouchableOpacity>
                        </View>
                    </RecommendBtnWrap>
                </TitleInner>
                <NewWorkContent />
            </NewWorkWrap>
            <EventWrap>
                <TouchableOpacity>
                    <Image source={require('../images/eventbanner.png')} style={{width:'100%'}} />
                </TouchableOpacity>
            </EventWrap>
            <NoticeWrap>
                <TitleInner>
                    <MainTitle>
                        공지사항
                    </MainTitle>
                    <RecommendBtnWrap>
                       
                        <View>
                            <TouchableOpacity><Image source={require('../images/plus_btn.png')} /></TouchableOpacity>
                        </View>
                    </RecommendBtnWrap>
                </TitleInner>
                <NoticeContainer>
                    
                </NoticeContainer>
            </NoticeWrap>
            <VoiceWrap source={require('../images/voice_actor_bg.png')}>
                <TitleInner>
                    <MainTitle color="#fff">
                        성우보기
                    </MainTitle>
                    <RecommendBtnWrap>
                       
                        <View>
                            <TouchableOpacity><Image source={require('../images/plus_btn.png')} /></TouchableOpacity>
                        </View>
                    </RecommendBtnWrap>
                </TitleInner>
                <VoiceContents></VoiceContents>
            </VoiceWrap>
        </MainContainer>
    );
};


export default Main;