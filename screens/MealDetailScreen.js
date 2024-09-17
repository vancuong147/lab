// Màn hình hiển thị chi tiết một món ăn

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Dữ liệu giả định về món ăn
const MEALS = [
  { id: 'm1', title: 'Spaghetti', description: 'Delicious Italian pasta' },
  { id: 'm2', title: 'Salad', description: 'Fresh and healthy salad' },
  // Thêm nhiều món ăn khác tại đây
];

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;  // Nhận mealId từ route params

  // Tìm chi tiết món ăn dựa trên mealId
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>  {/* Hiển thị tên món ăn */}
      <Text>{selectedMeal.description}</Text>  {/* Hiển thị mô tả món ăn */}
    </View>
  );
};

// Style cho màn hình MealDetail
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;  // Xuất hàm để sử dụng trong App.js
