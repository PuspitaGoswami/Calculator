import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './Components/Screen';

export default function App() {
  return (
    <View style={styles.screen}>
        <Screen/>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
  }
});
