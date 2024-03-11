import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'kminchelle',
                    password: '0lelplR',
                }),
            });

            if (response.ok) {
                navigation.navigate('Cart');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={text => setUsername(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                    <Button title="Login" onPress={handleLogin} />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
        borderRadius: 16,
        width: '80%',
        maxWidth: 400,
        backgroundColor: 'aqua'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
});

export default LoginScreen;
