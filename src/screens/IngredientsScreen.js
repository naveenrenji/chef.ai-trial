import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity,StyleSheet } from 'react-native';

export default function IngredientsScreen({navigation}) {
  const [ingredients, setIngredients] = useState([]);

  const handleChange = (ingredient) => {
    if (ingredients.includes(ingredient)) {
      setIngredients(ingredients.filter((i) => i !== ingredient));
    } else {
      setIngredients([...ingredients, ingredient]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Ingredients</Text>
      <Picker
        selectedValue={ingredients}
        onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
      >
        <Picker.Item label="Rice" value="Rice" />
        <Picker.Item label="Bread" value="Bread" />
        <Picker.Item label="Flour" value="Flour" />
        <Picker.Item label="Chapati" value="Chapati" />
        <Picker.Item label="Tortilla" value="Tortilla" />
        <Picker.Item label="Roti" value="Roti" />
        <Picker.Item label="Barley" value="Barley" />
        <Picker.Item label="Quinoa" value="Quinoa" />
      </Picker>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('MeatScreen', { ingredients })}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
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
  nextButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#8B0000',
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
