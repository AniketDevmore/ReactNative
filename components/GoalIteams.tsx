import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

const GoalIteam = (props: any): JSX.Element => {
  return (
    <View>
      <FlatList
        data={props.allGoals}
        renderItem={ele => (
          <Pressable
            android_ripple={{color: '#dddddd'}}
            // to add click effect we use android ripple
            onPress={props.deleteGoalHandler.bind(ele, ele.index)}>
            <Text style={styles.goalsIteam} key={ele.index}>
              {ele.item}
            </Text>
          </Pressable>
        )}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsIteam: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'gray',
    color: '#fff',
  },
});

export default GoalIteam;
