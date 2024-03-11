import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items:</Text>
      {cartItems.map(item => (
        <View key={item.id} style={styles.cartItem}>
          <View style={styles.itemInfoContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>Price: ${item.price}</Text>
          </View>
          <Button
            title="Remove"
            onPress={() => handleRemoveFromCart(item)}
            color="#e63946"
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    textAlign: 'center',
  },
  itemPrice:{
    fontSize: 18,
    textAlign: 'center',
  },
  itemInfoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  
});
export default CartScreen;
