import React, { Component } from 'react';
import { Dimensions, RefreshControl } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import io from 'socket.io-client';
import DoubleTap from '../../components/DoubleTap';
import api from '../../services/api';
import {
  TouchableOpacity,
  Image,
  Container,
  FlatList,
  Header,
  FeedItem,
  UserInfo,
  Name,
  Place,
  Footer,
  Actions,
  Action,
  Likes,
  Description,
  Hashtags,
} from './styles';

import camera from '../../assets/camera.png';
import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.navigate('New')}
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
      >
        <Image source={camera} />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        onPress={() => {}}
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
      >
        <Image source={send} />
      </TouchableOpacity>
    ),
  });

  state = {
    feed: [],
    refreshing: false,
  };

  componentDidMount() {
    this.registerToSocket();

    this.loadRequest();
  }

  loadRequest = async () => {
    const response = await api.get('posts');

    this.setState({ feed: response.data });
  };

  registerToSocket = () => {
    const socket = io(api.defaults.baseURL);

    const { state } = this;

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...state.feed] });
    });

    socket.on('like', likedPost => {
      this.setState({
        feed: state.feed.map(post =>
          post._id === likedPost._id ? likedPost : post
        ),
      });
    });

    socket.on('delete', deletedPostID => {
      this.setState({
        feed: state.feed.filter(post => post._id !== deletedPostID),
      });
    });
  };

  handleLike = id => {
    api.post(`posts/${id}/like`);
  };

  handleDelete = id => {
    api.post(`posts/${id}/delete`);
  };

  onRefreshHandler = () => {
    // reset pageNo to 1
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.loadRequest();
      this.setState({ refreshing: false });
    }, 300);
  };

  render() {
    const { baseURL } = api.defaults;
    const { state } = this;
    return (
      <Container>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={state.refreshing}
              onRefresh={this.onRefreshHandler}
            />
          }
          data={state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <FeedItem>
              <Header>
                <UserInfo>
                  <Name>{item.author}</Name>
                  <Place>{item.place}</Place>
                </UserInfo>
                <Image source={more} />
              </Header>
              <DoubleTap onDoubleTap={() => this.handleLike(item._id)}>
                <AutoHeightImage
                  width={Dimensions.get('window').width}
                  source={{ uri: `${baseURL}/files/${item.image}` }}
                />
              </DoubleTap>
              <Footer>
                <Actions>
                  <Action onPress={() => this.handleLike(item._id)}>
                    <Image source={like} />
                  </Action>
                  <Action onPress={() => {}}>
                    <Image source={comment} />
                  </Action>
                  <Action onPress={() => {}}>
                    <Image source={send} />
                  </Action>
                </Actions>

                <Likes>{item.likes} curtidas</Likes>
                <Description>{item.description}</Description>
                <Hashtags>{item.hashtags}</Hashtags>
              </Footer>
            </FeedItem>
          )}
        />
      </Container>
    );
  }
}
