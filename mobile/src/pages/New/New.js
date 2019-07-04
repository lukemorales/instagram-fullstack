import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import api from '../../services/api';
import {
  AvoidingContainer,
  SelectButton,
  SelectText,
  Preview,
  Input,
  ShareButton,
  ShareText,
} from './styles';

export default class Feed extends Component {
  static navigationOptions = {
    headerTitle: 'Criar Post',
  };

  state = {
    preview: null,
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSelectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar Imagem',
        rotation: 360,
      },
      upload => {
        if (upload.error) {
          console.log('Error');
        } else if (upload.didCancel) {
          console.log('User Cancelled');
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');
            ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };
          this.setState({ preview, image });
        }
      }
    );
  };

  handleSubmit = async () => {
    const data = new FormData();

    const { image, author, place, description, hashtags } = this.state;
    const { navigation } = this.props;

    data.append('image', image);
    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);

    await api.post('posts', data);

    this.setState({
      preview: null,
      image: null,
      author: '',
      place: '',
      description: '',
      hashtags: '',
    });

    navigation.navigate('Feed');
  };

  render() {
    const { state } = this;

    return (
      <AvoidingContainer
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <SelectButton onPress={this.handleSelectImage}>
              <SelectText>Selecionar Imagem</SelectText>
            </SelectButton>
            {state.preview && <Preview source={state.preview} />}
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome do Autor"
              placeholderTextColor="#999"
              value={state.author}
              onChangeText={author => this.setState({ author })}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Local"
              placeholderTextColor="#999"
              value={state.place}
              onChangeText={place => this.setState({ place })}
            />
            <Input
              autoCorrect
              autoCapitalize="none"
              placeholder="Descrição"
              placeholderTextColor="#999"
              value={state.description}
              onChangeText={description => this.setState({ description })}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Hashtags"
              placeholderTextColor="#999"
              value={state.hashtags}
              onChangeText={hashtags => this.setState({ hashtags })}
            />
            <ShareButton onPress={this.handleSubmit}>
              <ShareText>Compartilhar</ShareText>
            </ShareButton>
            <View style={{ flex: 1 }} />
          </View>
        </TouchableWithoutFeedback>
      </AvoidingContainer>
    );
  }
}
