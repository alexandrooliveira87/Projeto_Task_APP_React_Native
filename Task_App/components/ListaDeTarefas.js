import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

export default function ListaDeTarefas({ tarefas, completarTarefa }) {
  return (
    <View style={styles.listaDeTarefas}>
      {tarefas.map((tarefa, index) => (
        <View key={index} style={styles.itemDeTarefa}>
          <Text style={tarefa.status === 'Concluída' ? styles.tarefaConcluida : styles.tarefaTexto}>
            {tarefa.nome} - {tarefa.descricao} ({tarefa.data})
          </Text>
          {tarefa.status === 'Aberta' && (
            <Button title="Concluir" onPress={() => completarTarefa(index)} />
          )}
        </View>
      ))}
    </View>
  );
}
