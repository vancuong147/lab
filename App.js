// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen'; // Đảm bảo đường dẫn đúng
import FavoritesScreen from './screens/FavoritesScreen'; // Đảm bảo đường dẫn đúng
import SettingsScreen from './screens/SettingsScreen'; // Đảm bảo đường dẫn đúng

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
