import {StyleSheet, Text, View} from 'react-native';
import Title from '../components/screenComponents/Title';

const GameScreen = (): JSX.Element => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
});

export default GameScreen;
