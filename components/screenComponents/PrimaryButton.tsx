import {Children} from 'react';
import {Text, View} from 'react-native';

const PrimaryButton = ({children}: any): JSX.Element => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
