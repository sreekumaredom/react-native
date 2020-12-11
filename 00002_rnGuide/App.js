import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

//Components
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);

  const addGoalHandler = (goalInput) => {
    setcourseGoals([
      ...courseGoals,
      { uid: Math.random().toString(), value: goalInput },
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
