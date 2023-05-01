import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Product({ data, addToCart }) {
  return (
    <View style={styles.container}>
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{ data.name }</Text>
            <Text style={styles.price}>{ data.price }</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={addToCart}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 4,
    },
    infoContainer: {
        flex: 1,
        marginRight: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        color: '#00ADEF',
        fontWeight: 'bold',
    },
    buttonContainer: {
      backgroundColor: '#00ADEF',
      borderRadius: 8,
      paddingVertical: 9,
      paddingHorizontal: 11,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    }
})