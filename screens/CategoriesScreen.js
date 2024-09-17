import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CATEGORIES = [
  { id: '1', title: 'Italian', color: '#f54242' },
  { id: '2', title: 'Quick & Easy', color: '#f5428d' },
  // Thêm các danh mục khác ở đây
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.gridItem, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate('Meals', { categoryId: item.id })}
    >
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList 
      data={CATEGORIES} 
      renderItem={renderCategoryItem} 
      numColumns={2} 
      keyExtractor={item => item.id} 
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
});

export default CategoriesScreen;
