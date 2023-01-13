import React, { useState } from 'react';
import { View, Text, Picker, TouchableOpacity,StyleSheet } from 'react-native';

export default function MeatScreen({route, navigation}) {
  const [ingredients, setIngredients] = useState(route.params.ingredients);
  const [meats, setMeats] = useState([]);

  const handleChange = (meat) => {
    if (meats.includes(meat)) {
      setMeats(meats.filter((i) => i !== meat));
    } else {
      setMeats([...meats, meat]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Meats</Text>
      <Picker
        selectedValue={meats}
        onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}
      >
        <Picker.Item label="Chicken" value="Chicken" />
        <Picker.Item label="Egg" value="Egg" />
        <Picker.Item label="Paneer" value="Paneer" />
        <Picker.Item label="Beef" value="Beef" />
        <Picker.Item label="Mutton" value="Mutton" />
      </Picker>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('ExtraIngredientsScreen', { ingredients, meats })}
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
