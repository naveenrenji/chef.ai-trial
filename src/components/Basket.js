import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Basket = ({ selectedIngredients }) => {
  return (
    <View style={styles.basketContainer}>
      <Text style={styles.basketTitle}>Selected Ingredients:</Text>
      {selectedIngredients.length > 0 ? (
        <View style={styles.ingredientList}>
          {selectedIngredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={styles.emptyBasketText}>No ingredients selected</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  basketContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    marginVertical: 10,
  },
  basketTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  ingredientList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ingredient: {
    backgroundColor: '#eee',
    padding: 5,
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  emptyBasketText: {
    fontStyle: 'italic',
    color: '#aaa',
  },
});

export default Basket;
