import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        backgroundColor: 'yellow',
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2,
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 3,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
