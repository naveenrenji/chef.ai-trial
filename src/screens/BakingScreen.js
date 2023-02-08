import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IngredientPicker from '../components/IngredientPicker';
import { ingredientsData } from '../constants/categories';

const BakingScreen = ({ navigation }) => {
    const [ingredients, setIngredients] = useState([]);

    const handleSubmit = () => {
        navigation.navigate('Response', {ingredients});
    }

    return (
        <View>
            <IngredientPicker 
                ingredients={ingredients}
                setIngredients={setIngredients}
                category = "Baking"
                ingredientsData={ingredientsData}
            />
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BakingScreen;
