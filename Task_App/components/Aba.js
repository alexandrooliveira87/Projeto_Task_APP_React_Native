import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

export default function Aba({ abaAtiva, setAbaAtiva }) {
  return (
    <View style={styles.abas}>
      <TouchableOpacity onPress={() => setAbaAtiva('Todas')}>
        <Text style={abaAtiva === 'Todas' ? styles.abaAtiva : styles.abaInativa}>Todas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setAbaAtiva('Aberta')}>
        <Text style={abaAtiva === 'Aberta' ? styles.abaAtiva : styles.abaInativa}>Abertas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setAbaAtiva('Concluída')}>
        <Text style={abaAtiva === 'Concluída' ? styles.abaAtiva : styles.abaInativa}>Concluídas</Text>
      </TouchableOpacity>
    </View>
  );
}
