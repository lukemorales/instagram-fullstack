import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {
  PostList,
  Post,
  Header,
  UserInfo,
  UserName,
  UserPlace,
  Footer,
  Actions,
  PostDescription,
  Hashtags,
} from './styles';
import api from '../../services/API';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  const loadRequest = async () => {
    const response = await api.get('posts');
    setFeed(response.data);
  };

  useEffect(() => {
    const socket = io(api.defaults.baseURL);

    socket.on('post', newPost => {
      setFeed(currentFeed => [newPost, ...currentFeed]);
    });

    socket.on('like', likedPost => {
      setFeed(currentFeed =>
        currentFeed.map(post => (post._id === likedPost._id ? likedPost : post))
      );
    });

    loadRequest();
  }, [feed]);

  const handleLike = id => {
    api.post(`/posts/${id}/like`);
  };

  return (
    <PostList>
      {feed.map(post => (
        <Post key={post._id}>
          <Header>
            <UserInfo>
              <UserName>{post.author}</UserName>
              <UserPlace>{post.place}</UserPlace>
            </UserInfo>
            <img src={more} alt="Mais..." />
          </Header>
          <img src={`http://localhost:3333/files/${post.image}`} alt="" />
          <Footer>
            <Actions>
              <button type="button" onClick={() => handleLike(post._id)}>
                <img src={like} alt="Likes" />
              </button>
              <img src={comment} alt="Comentários" />
              <img src={send} alt="Compartilhar" />
            </Actions>
            <strong>{post.likes} curtidas</strong>
            <PostDescription>
              {post.description}
              <Hashtags>{post.hashtags}</Hashtags>
            </PostDescription>
          </Footer>
        </Post>
      ))}
    </PostList>
  );
};

export default Feed;
