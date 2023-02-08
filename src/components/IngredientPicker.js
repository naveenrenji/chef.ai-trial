import React, { useState } from "react";
import {
  View,
  Text,
  Picker,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { ingredientsData } from "../constants/categories";

const IngredientPicker = ({ ingredients, setIngredients }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Baking");

  const handleChange = (ingredient) => {
    if (ingredients.includes(ingredient)) {
      setIngredients(ingredients.filter((i) => i !== ingredient));
    } else {
      setIngredients([...ingredients, ingredient]);
    }
  };

  const filteredIngredients = ingredientsData[selectedCategory].filter(
    (ingredient) => {
      return ingredient.toLowerCase().includes(searchTerm.toLowerCase());
    }
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for ingredients"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          {Object.keys(ingredientsData).map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={ingredients}
          onValueChange={(itemValue) => handleChange(itemValue)}
        >
          {filteredIngredients.map((ingredient) => (
            <Picker.Item
              key={ingredient}
              label={ingredient}
              value={ingredient}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.basketContainer}>
        <Text style={styles.basketTitle}>Selected Ingredients:</Text>
        {ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.basketIngredient}>
            {ingredient}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    width: "80%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: "100%",
    height: "50%",
  },
  searchBar: {
    marginVertical: 10,
    width: "90%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  basketContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  basketTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  basketItem: {
    marginVertical: 5,
  },
});

export default IngredientPicker;
