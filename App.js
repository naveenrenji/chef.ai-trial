//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open me up to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import Constants from 'expo-constants';


// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: "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",
// });

export default function App() {
  const [ingredients, setIngredients] = useState('');
  const [output, setOutput] = useState('');

  async function handleSubmit() {
    try{
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        prompt: 'write a Recipe using only the following Ingredients : ' + ingredients,
        max_tokens: 500
      })
    });

    const data = await response.json();
    setOutput(data.choices[0].text);
    }
    catch(e){
      setOutput("error"+e);
    }
  }

  return (
    <View style={{ padding: 24 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setIngredients(text)}
        value={ingredients}
        placeholder="Ingredients"
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Text>{output}</Text>
    </View>
  );
}