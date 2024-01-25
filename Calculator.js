import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonPress = (value) => {
    setExpression((prevExpression) => {
      const lastChar = prevExpression.slice(-1);
  
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '(') {
        // Si le dernier caractère est un opérateur, ajoutez le nombre directement
        return prevExpression + value;
      } else if (!isNaN(lastChar) || lastChar === ')') {
        const lastNumberMatch = prevExpression.match(/(\d*\.?\d+)$/);
        if (lastNumberMatch) {
          const lastNumber = lastNumberMatch[0];
          const updatedExpression =
            prevExpression.slice(0, -lastNumber.length) + lastNumber + value;
          return updatedExpression.endsWith('-') ? updatedExpression.slice(0, -1) : updatedExpression;
        }
      }
  
      // Ajouter l'opérateur seulement si la dernière expression n'est pas un opérateur
      if (!isNaN(lastChar) || lastChar === '.') {
        return prevExpression + value;
      }
  
      return prevExpression;
    });
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleEvaluate = () => {
    try {
      // Utilisez la fonction eval uniquement si nécessaire
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleDelete = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.expressionText}>{expression}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
         
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
            <Text style={styles.buttonText3}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
            <Text style={styles.buttonText3}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
            <Text style={styles.buttonText3}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('(')}>
            <Text style={styles.buttonText3}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(')')}>
            <Text style={styles.buttonText3}>)</Text>
          </TouchableOpacity>
        </View>
        {/* ... Ajoutez d'autres rangées en fonction de vos besoins */}
        <View style={styles.row}>
          
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          
          
        </View>
        {/* ... Ajoutez d'autres rangées en fonction de vos besoins */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          
          
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleClear()}>
            <Text style={styles.buttonText2}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleDelete()}>
            <Text style={styles.buttonText2}>del</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
            <Text style={styles.buttonText3}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
            <Text style={styles.buttonText3}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleEvaluate()}>
            <Text style={styles.buttonText3}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    backgroundColor: 'yellows',
    padding: 20,
    alignItems: 'flex-end',
  },
  expressionText: {
    fontSize: 24,
  },
  buttonsContainer: {
    backgroundColor: '#ffdead',
    width: '80%',
    maxWidth: 400,
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
    color: 'black',
  },
  buttonText2: {
    fontSize: 15,
    color: 'red',
  },
  buttonText3: {
    fontSize: 30,
    color: '#ff8c00',
  },
});

export default Calculator;
