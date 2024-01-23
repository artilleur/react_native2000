import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonPress = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleEvaluate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.expressionText}>{expression}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        {/* Ajoutez d'autres rangées et boutons en fonction de vos besoins */}
        {/* Exemple de deuxième rangée */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        {/* ... Ajoutez d'autres rangées en fonction de vos besoins */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleClear()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleEvaluate()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// ...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
  },
  display: {
    backgroundColor: '#eee',
    padding: 10,
    alignItems: 'flex-end',
  },
  expressionText: {
    fontSize: 24,
  },
  buttonsContainer: {
    backgroundColor: '#fff',
    width: '80%', // Ajuster la largeur de la calculatrice selon vos besoins
    maxWidth: 400, // Limiter la largeur maximale de la calculatrice
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 20,
  },
});
// ...


export default Calculator;
