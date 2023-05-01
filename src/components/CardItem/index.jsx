import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function CardItem({ data, addAmount, removeAmount }){
  const [amount, setAmount] = useState(data?.amount);

  const handleDecrease = () => {
    removeAmount();
    if (amount === 0) {
      setAmount(0);
      return;
    }
    setAmount(item => item - 1);
  };

  const handleIncrease = () => {
    setAmount(item => item + 1);
    addAmount();
  };

  return(
    <View style={styles.container}>
      <View style={styles.infoContainer}>

        <View style={styles.nameContainer}>
          <Text style={styles.title}>{ data.name }</Text>

          <View style={styles.info}>
            <Text style={styles.label}>Quantidade:</Text>
            <TouchableOpacity style={styles.button} onPress={handleDecrease}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.amountValue}>{ amount }</Text>
            <TouchableOpacity style={styles.button} onPress={handleIncrease}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.valorContainer}>
          <View style={styles.info}>
            <Text style={styles.label}>Valor Unitário:</Text>
            <Text style={styles.price}>{ data.price.toFixed(2) }</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Valor Total:</Text>
            <Text style={styles.amountValue}>{ data.total.toFixed(2) }</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flex: 1,
  },
  valorContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#757575',
    marginRight: 8,
  },
  amountValue: {
    fontSize: 16,
    color: '#00ADEF',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#00ADEF',
    fontWeight: 'bold',
  },
  button: {
    width: 24,
    height: 24,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#212121',
    fontWeight: 'bold',
  },
})
