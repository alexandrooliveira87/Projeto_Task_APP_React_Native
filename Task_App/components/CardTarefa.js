// components/CardTarefa.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardTarefa({ titulo, descricao, horario, concluida, dataConclusao, onConcluir }) {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={concluida ? styles.tituloConcluido : styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.horario}>{horario}</Text>

        {/* Exibir a data de conclusão se a tarefa estiver concluída */}
        {concluida && (
          <Text style={styles.dataConclusao}>Concluída em: {dataConclusao}</Text>
        )}
      </View>

      {!concluida && (
        <TouchableOpacity
          style={styles.botaoConcluir}
          onPress={onConcluir}
        >
          <Text style={styles.botaoTexto}>Concluir</Text>
        </TouchableOpacity>
      )}

      {concluida && (
        <Text style={styles.botaoTextoConcluido}>✔️</Text>
      )}
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
  dataConclusao: {
    fontSize: 12,
    color: '#28a745',
    marginTop: 5,
    fontStyle: 'italic',
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
  botaoTextoConcluido: {
    color: '#28a745',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
