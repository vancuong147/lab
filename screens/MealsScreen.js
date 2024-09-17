// screens/MealsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MEALS = [
  { id: 'm1', categoryId: '1', title: 'Spaghetti' },
  { id: 'm2', categoryId: '2', title: 'Salad' },
  // Thêm dữ liệu món ăn
];

const MealsScreen = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(meal => meal.categoryId === categoryId);

  return (
    <View>
      <FlatList 
        data={displayedMeals} 
        renderItem={({ item }) => (
          <View style={styles.mealItem}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 10,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 3,
  },
});

export default MealsScreen;
