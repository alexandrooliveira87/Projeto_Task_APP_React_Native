// components/ListaDeTarefas.js

import React from 'react';
import { ScrollView } from 'react-native';
import CardTarefa from './CardTarefa';
import styles from '../styles';

export default function ListaDeTarefas({ tarefas, completarTarefa }) {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.listaDeTarefas}>
      {tarefas.map((tarefa) => (
        <CardTarefa
          key={tarefa.id || tarefa.nome + tarefa.data} // Certifique-se de que a chave seja única
          titulo={tarefa.nome}
          descricao={tarefa.descricao}
          horario={`Previsão da Conclusão, ${tarefa.data}`}
          concluida={tarefa.status === 'Concluída'}
          dataConclusao={tarefa.dataConclusao}
          onConcluir={() => completarTarefa(tarefa.id)}
        />
      ))}
    </ScrollView>
  );
}
