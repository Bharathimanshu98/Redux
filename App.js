import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ProductListScreen from './src/components/ProductListScreen';
import CartScreen from './src/components/CartScreen';
import LoginScreen from './src/screens/LoginScreen';

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Products" component={ProductListScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;



