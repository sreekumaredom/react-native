import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
} from 'react-native';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [courseGoals, setcourseGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoalInput(text);
  };

  const addGoalHandler = () => {
    setcourseGoals([
      ...courseGoals,
      { uid: Math.random().toString(), value: goalInput },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      {/* Pre-renders everything down the list - use only for a small list 
      <ScrollView >
        {courseGoals.map((goal, i) => (
          <View key={i} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

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

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
