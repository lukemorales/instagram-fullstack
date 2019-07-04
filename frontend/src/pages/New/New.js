import React, { useState } from 'react';
import api from '../../services/API';
import { FormNewPost } from './styles';

const New = props => {
  const [postInfo, setPostInfo] = useState({
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  });

  const handleImageChange = e => {
    setPostInfo({
      ...postInfo,
      image: e.target.files[0],
    });
  };

  const handleChange = e => {
    setPostInfo({
      ...postInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append('image', postInfo.image);
    data.append('author', postInfo.author);
    data.append('place', postInfo.place);
    data.append('description', postInfo.description);
    data.append('hashtags', postInfo.hashtags);

    await api.post('posts', data);

    props.history.push('/');
  };

  return (
    <FormNewPost onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <input
        type="text"
        name="author"
        placeholder="Autor do Post"
        onChange={handleChange}
        value={postInfo.author}
      />
      <input
        type="text"
        name="place"
        placeholder="Local"
        onChange={handleChange}
        value={postInfo.place}
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição"
        onChange={handleChange}
        value={postInfo.description}
      />
      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags"
        onChange={handleChange}
        value={postInfo.hashtags}
      />
      <button type="submit">Enviar</button>
    </FormNewPost>
  );
};

export default New;
