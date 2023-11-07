import {Alert, StyleSheet, Text, View} from 'react-native';
import Title from '../components/screenComponents/Title';
import {useEffect, useState} from 'react';
import NumberContainer from '../components/screenComponents/game/NumberContainer';
import PrimaryButton from '../components/screenComponents/PrimaryButton';
import InstructionText from '../components/screenComponents/InstructionText';
import Card from '../components/screenComponents/Card';

const generateRandomNumber: any = (min: any, max: any, exclude: any) => {
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return random;
  }
};

let minBoundery = 1;
let maxBoundery = 100;

const GameScreen = ({userNum, onGameOver}: any): JSX.Element => {
  const initialGuess = generateRandomNumber(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNum) {
      onGameOver();
    }
  }, [currentGuess, userNum, onGameOver]);

  const nextGuessHandler = (direction: any) => {
    if (
      (direction === 'lower' && currentGuess < userNum) ||
      (direction === 'higher' && currentGuess > userNum)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundery = currentGuess - 1;
    } else {
      minBoundery = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumber(
      minBoundery,
      maxBoundery,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
