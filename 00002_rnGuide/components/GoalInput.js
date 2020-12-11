import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = ({ addGoalHandler }) => {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (text) => {
    setGoalInput(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={goalInput}
      />
      <Button title="ADD" onPress={addGoalHandler.bind(this, goalInput)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;

/* Pre-renders everything down the list - use only for a small list 
      <ScrollView >
        {courseGoals.map((goal, i) => (
          <View key={i} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */
