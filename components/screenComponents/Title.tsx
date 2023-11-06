import {StyleSheet, Text, View} from 'react-native';

const Title = ({children}: any): JSX.Element => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});

export default Title;
