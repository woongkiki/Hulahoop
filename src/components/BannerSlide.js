import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper'

const MainBannerBox = styled.View`
    width:100%;
    height: 200px;
    background-color: #6055B8;
    border-radius: 10px;
`;

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper 
        dot={
          <View
            style={{
              backgroundColor: '#272727',
              width: 5,
              height: 5,
              borderRadius: 5,
              marginLeft: 7,
              marginRight: 7
              
            }}
          />
        }
        activeDot={
            <View
            style={{
                backgroundColor: '#DF98C1',
                width: 15,
                height: 15,
                borderRadius: 15,
                marginLeft:7,
                marginRight:7
            }}
            />
        }
        loop={true}
        paginationStyle={{
          bottom: 13
        }}
      >
        <MainBannerBox />
        <MainBannerBox />
        <MainBannerBox />
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)