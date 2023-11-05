/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import GoalsInput from './components/GoalsInput';
import StartGameScreen from './screens/StartGameScree';

const App = (): JSX.Element => {
  return (
    <View>
      {/* <GoalsInput /> */}
      <StartGameScreen />
    </View>
  );
};

export default App;
