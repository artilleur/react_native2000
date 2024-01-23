// Clock.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.clockText}>{currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow', // Fond jaune
  },
  clockText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red', // Texte en rouge
  },
});

export default Clock;
