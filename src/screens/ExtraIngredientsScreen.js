import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function ExtraIngredientsScreen({ route, navigation }) {
  const [ingredients, setIngredients] = useState(route.params.ingredients);
  const [meats, setMeats] = useState(route.params.meats);
  const [extraIngredients, setExtraIngredients] = useState("");

  const handleSubmit = async () => {
    // Send ingredients, meats, and extraIngredients to the API and get response
    // and navigate to the new page

    try {
      const response = await fetch(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
          body: JSON.stringify({
            prompt:
              "write a Recipe using only the following Ingredients : " +
              ingredients,
            max_tokens: 500,
          }),
        }
      );

      const data = await response.json();
      setOutput(data.choices[0].text);
    } catch (e) {
      setOutput("error" + e);
    }

    navigation.navigate("ResponseScreen", { response });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Any Extra Ingredients?</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setExtraIngredients(text)}
        value={extraIngredients}
        placeholder="Enter extra ingredients here (comma separated)"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5DC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "80%",
    textAlign: "center",
  },
  submitButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#8B0000",
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
