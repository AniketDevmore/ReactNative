import {StyleSheet, Text} from 'react-native';
import Color from '../../constants/color';

const InstructionText = ({children}: any): JSX.Element => {
  return <Text style={styles.instText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instText: {
    color: Color.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
