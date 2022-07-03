import * as React from 'react';
import { TextInput } from 'react-native-paper';

const InputText = ({FieldName,IconName,onChangeText, value,Style}) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      style={Style}
      label= {FieldName}
      right={<TextInput.Icon name={IconName} />}
      onChangeText={onChangeText}
      value={value}
      
    />
  );
};

export default InputText;