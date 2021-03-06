import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import Icon from '../components/playGameIcon';
import PlayGameItem from '../components/PlayGameItem';
import PlayGameButton from '../components/PlayGameButton';
import Title from '../components/TitleComponent';
import Text from '../components/TextComponent';
import PlayGameText from '../components/PlayGameText';
import dataList from '../data/gameDataList';
import Container from './BackgroundContainer';
import PlayGameItemContainer from './PlayGameItemContainer';
import HttpRequest from '../utils/HttpRequest';

class PlayGameContainer extends Component {
  render () {
    return (
      <Container imgUrl={require('../assets/bg.png')}>
        <PlayGameItemContainer marginTop={5.16}>
          {dataList.map((item, index) => {
            return (
              <PlayGameItem key={index} width={7.4} height={1.4}>
                <Icon size={1.2} top={0.1} left={0.1} src={item.imgUrl} />
                <PlayGameText marginLeft={0.1}>
                  <Title fontSize={0.34} fontWeight={900}>{item.title}</Title>
                  <Text lineClamp={2} fontSize={0.22}>{item.text}</Text>
                </PlayGameText>
                <Link to={`/topics/${index}`} >
                  <PlayGameButton width={2.2} height={0.7} right={0.2}>开始游戏</PlayGameButton>
                </Link>
              </PlayGameItem>);
          })}
        </PlayGameItemContainer>
      </Container>
    );
  }
  componentDidMount () {
    HttpRequest.cs();
  }
}

export default PlayGameContainer;
