import React from 'react';
import { TouchableOpacity, Text, View , Image, Linking} from 'react-native';
import styled from 'styled-components/native';

const FooterTop = styled.View`
    height:60px;
    border-bottom-width:1px;
    border-bottom-color:#e3e3e3;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`;

const FtButtonsText = styled.Text`
    font-size:12px;
    font-weight:400;
    color: #a1a1a1;
`;

const FooterBottom = styled.View`
    padding:30px 0;
    color:#a1a1a1;
`;

const Fbtxt = styled.Text`
    color:#a1a1a1;
    text-align:center;
    font-size: ${props => props.fontSize || '13px'};
    margin-bottom:10px;
    margin-top: ${props => props.marginTop || '0'};
`;

const FbBotText = styled.View`
    margin: 40px 0;
`;

const FbsnsWrap = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 100px;
`;



const Footers = ({navigation}) => {
    const ftmenu = [
        {
            id: 1,
            text: '회사소개',
            component: 'CompanyInfo'
        },
        {
            id: 2,
            text: '제휴문의',
            component: 'PartnerQa'
        },
        {
            id: 3,
            text: '이용약관',
            component: 'Term'
        },
        {
            id: 4,
            text: '이메일무단수집거부',
            component: 'EmailReject'
        },
        {
            id: 5,
            text: '개인정보처리방침',
            component: 'PrivacyPolicy'
        }
    ]

    const ftmenuList = ftmenu.map(
        menu=>(
            <TouchableOpacity key={menu.id} onPress={()=>navigation.navigate(menu.component)}>
                <FtButtonsText>{menu.text}</FtButtonsText>
            </TouchableOpacity>
        )
    )

    const fbtoptext = ['4400 서울특별시 00구 00로 23 (00동)','대표자 홍길동', 'email1234@gmail.com',
         'Tel : 1234-5678', 'E-mail : test1234@naver.com','사업자등록번호 123-12-12345651', '통신판매 신고번호 2021-서울강남-012345'
    ];
    const fbaddress = fbtoptext.map(
        address=><Fbtxt>{address}</Fbtxt>
    );

    return (
        <View style={{backgroundColor:'#F5F5F5'}}>
            <FooterTop>
                {ftmenuList}
            </FooterTop>
            <FooterBottom>
                <Fbtxt fontSize="16px">
                    훌라후프
                </Fbtxt>
                {fbaddress}
                <FbBotText>
                    <Fbtxt fontSize="12px">
                        CUSTOMER SERVICES
                    </Fbtxt>
                    <Fbtxt fontSize="32px">
                        1234-5678
                    </Fbtxt>
                    <Fbtxt>
                        월-금 : 10:00 ~ 17:00 (점심시간 12:00 ~ 13:00)
                    </Fbtxt>
                    <Fbtxt>
                        휴무일 : 토요일, 일요일, 공휴일
                    </Fbtxt>
                </FbBotText>
                <View>
                    <FbsnsWrap>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
                            <Image source={require('../images/insta_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')}>
                            <Image source={require('../images/fb_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/')}>
                            <Image source={require('../images/youtube_icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.naver.com/')}>
                            <Image source={require('../images/naver_icon.png')} />
                        </TouchableOpacity>
                    </FbsnsWrap>
                    <Fbtxt marginTop="10px" fontSize="12px">COPYRIGHT 2021 훌라후프. ALL RIGHT RESERVED.</Fbtxt>
                </View>
            </FooterBottom>
        </View>
    );
};

export default Footers;