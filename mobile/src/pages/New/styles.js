import styled from 'styled-components';

export const AvoidingContainer = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 30px 20px 0;
`;

export const SelectButton = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  border-style: dashed;
  height: 42px;

  justify-content: center;
  align-items: center;
`;

export const SelectText = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const Preview = styled.Image`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  align-self: center;
  border-radius: 4px;
`;

export const Input = styled.TextInput`
  border-radius: 4px;
  border-width: 1px;
  border-color: #ddd;
  padding: 15px;
  margin-top: 10px;
  font-size: 16px;
`;

export const ShareButton = styled.TouchableOpacity`
  background-color: #7159c1;
  border-radius: 4px;
  height: 42px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const ShareText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;
