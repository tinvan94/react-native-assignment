import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TripsList from './screens/tripslist';
import Header from './components/header';
import Navigator from './routes/triplist'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Navigator />
      <View style={styles.content}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 40,
    
  },
});
