import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResponseScreen({route}) {
  const { response } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Response</Text>
      <Text style={styles.response}>{response}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5DC'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  response: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%',
    textAlign: 'center',
  },
});
