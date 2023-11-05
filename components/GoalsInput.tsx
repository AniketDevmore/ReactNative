import {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';
import GoalIteam from './GoalIteams';

const GoalsInput = () => {
  const [goals, setGoals] = useState(String);
  const [allGoals, setAllGoals] = useState<string[]>([]);

  const goalInputHandler = (event: string) => {
    setGoals(event);
  };

  const goalClickHandler = () => {
    setAllGoals(() => [...allGoals, goals]);
  };

  const deleteGoalHandler = (ele: number) => {
    allGoals.splice(ele, 1);
    setAllGoals([...allGoals]);
  };

  return (
    <View>
      <View style={styles.outer}>
        <Image
          style={styles.image}
          source={require('../assets/Images/goal.png')}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={goalInputHandler}
            placeholder="Add Your Goal...."
          />
          <Button title="Add Goal" onPress={goalClickHandler} />
        </View>
        <View style={styles.goalsContainer}>
          <GoalIteam
            allGoals={allGoals}
            deleteGoalHandler={deleteGoalHandler}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    height: 500,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: ' #cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    marginBottom: 20,
  },
  image: {
    alignItems: 'center',
    width: 150,
    height: 150,
    padding: 1,
    marginBottom: 5,
  },
});

export default GoalsInput;
