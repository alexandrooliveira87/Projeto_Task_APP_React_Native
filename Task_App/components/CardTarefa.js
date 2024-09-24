// components/CardTarefa.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardTarefa({ titulo, descricao, horario, concluida, onConcluir }) {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={concluida ? styles.tituloConcluido : styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.horario}>{horario}</Text>
      </View>
      <TouchableOpacity
        style={[styles.botaoConcluir, concluida && { backgroundColor: 'gray' }]}
        onPress={!concluida ? onConcluir : null}
        disabled={concluida}
      >
        <Text style={styles.botaoTexto}>{concluida ? '✔️' : 'Concluir'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tituloConcluido: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  horario: {
    fontSize: 12,
    color: '#999',
  },
  botaoConcluir: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 50,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
