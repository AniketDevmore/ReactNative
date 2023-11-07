/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import GoalsInput from './components/GoalsInput';
import StartGameScreen from './screens/StartGameScree';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = (): JSX.Element => {
  const [userNumber, setUnserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  const startGameHandler = (pickNumber: any) => {
    setUnserNumber(pickNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={startGameHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <View style={styles.rootScreen}>
      {/* <GoalsInput /> */}
      <ImageBackground
        source={require('./assets/Images/dice.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.safeAreaView}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: 'red',
  },
  imageStyle: {
    opacity: 0.6,
  },
  safeAreaView: {
    flex: 1,
  },
});

export default App;
