// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, removeFromCart } from '../redux/actions/cartActions';

// const ProductListScreen = () => {
//   const products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//     { id: 4, name: 'Product 4', price: 40 },
//     { id: 5, name: 'Product 5', price: 50 },
//     { id: 6, name: 'Product 6', price: 60 },
//     { id: 7, name: 'Product 7', price: 70 },
//     { id: 8, name: 'Product 8', price: 20 },
//     { id: 9, name: 'Product 9', price: 30 },
//     { id: 10, name: 'Product 10', price: 60 },
//     { id: 11, name: 'Product 11', price: 50 },
//     { id: 12, name: 'Product 12', price: 20 },
//   ];

//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);

//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item));
//   };

//   const handleRemoveFromCart = (item) => {
//     dispatch(removeFromCart(item));
//   };

//   const isItemInCart = (itemId) => {
//     return cartItems.some(item => item.id === itemId);
//   };

//   const renderProductItem = (item) => (
//     <View key={item.id} style={[styles.productItem, { backgroundColor: isItemInCart(item.id) ? '#f8d7da' : '#d4edda' }]}>
//       <Text style={styles.productName}>{item.name}</Text>
//       <Text style={styles.productPrice}>${item.price}</Text>
//       <TouchableOpacity
//         style={[styles.actionButton, isItemInCart(item.id) ? styles.removeFromCart : styles.addToCart]}
//         onPress={() => isItemInCart(item.id) ? handleRemoveFromCart(item) : handleAddToCart(item)}>
//         <Text style={styles.actionButtonText}>
//           {isItemInCart(item.id) ? 'Remove from Cart' : 'Add to Cart'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Product List</Text>
//       {products.map(renderProductItem)}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   productItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginBottom: 10,
//     borderRadius: 8,
//     width: '100%',
//   },
//   productName: {
//     fontSize: 16,
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   actionButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//   },
//   addToCart: {
//     backgroundColor: 'green',
//   },
//   removeFromCart: {
//     backgroundColor: 'red',
//   },
//   actionButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default ProductListScreen;





import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const isItemInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  const renderProductItem = (item) => (
    <View key={item.id} style={[styles.productItem, { backgroundColor: isItemInCart(item.id) ? '#f8d7da' : '#d4edda' }]}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity
        style={[styles.actionButton, isItemInCart(item.id) ? styles.removeFromCart : styles.addToCart]}
        onPress={() => isItemInCart(item.id) ? handleRemoveFromCart(item) : handleAddToCart(item)}>
        <Text style={styles.actionButtonText}>
          {isItemInCart(item.id) ? 'Remove from Cart' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Product List</Text>
      {products.map(renderProductItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addToCart: {
    backgroundColor: 'green',
  },
  removeFromCart: {
    backgroundColor: 'red',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProductListScreen;
