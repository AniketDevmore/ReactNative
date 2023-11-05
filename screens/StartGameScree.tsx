import {Button, StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/screenComponents/PrimaryButton';

const StartGameScreen = (): JSX.Element => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
  },
});

export default StartGameScreen;
