import React from 'react';
import { StyleSheet, View } from 'react-native';

//Components
import Header from './components/Header';
import GameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
