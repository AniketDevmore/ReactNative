import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/screenComponents/PrimaryButton';
import {useState} from 'react';

const StartGameScreen = ({onPickNumber}: any): JSX.Element => {
  const [enterdNumber, setEnteredNumber] = useState(String);

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetFunc = () => {
    setEnteredNumber('');
  };

  const configureInputHandler = () => {
    const choseNumber = parseInt(enterdNumber);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a numbber between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetFunc}],
      );
      return;
    }

    onPickNumber(choseNumber);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enterdNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetFunc}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={configureInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    padding: 0,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
