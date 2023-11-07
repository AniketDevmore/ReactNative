import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/screenComponents/PrimaryButton';
import {useState} from 'react';
import Color from '../constants/color';
import Title from '../components/screenComponents/Title';
import Card from '../components/screenComponents/Card';
import InstructionText from '../components/screenComponents/InstructionText';

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
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
            <PrimaryButton onPress={configureInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    padding: 0,
    borderBottomColor: Color.accent500,
    borderBottomWidth: 2,
    color: Color.accent500,
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
