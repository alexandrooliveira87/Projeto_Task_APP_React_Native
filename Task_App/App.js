import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Aba from './components/Aba';
import ListaDeTarefas from './components/ListaDeTarefas';
import ModalNovaTarefa from './components/ModalNovaTarefa';
import styles from './styles';
import TarefasIniciais from './components/tarefasIniciais'; // Importando as tarefas iniciais

export default function App() {
  const [tarefas, setTarefas] = useState(TarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('Todas');

  const adicionarTarefa = () => {
    if (novaTarefa.length > 0) {
      setTarefas([...tarefas, { nome: novaTarefa, descricao: "", data: new Date().toLocaleDateString(), status: 'Aberta' }]);
      setNovaTarefa('');
      setModalVisivel(false);
    }
  };

  const completarTarefa = (index) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index].status = 'Concluída';
    setTarefas(tarefasAtualizadas);
  };

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (abaAtiva === 'Todas') return true;
    return tarefa.status === abaAtiva;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>Tarefas de Hoje</Text>
      <Aba abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        completarTarefa={completarTarefa}
      />

      <Button title="+ Nova Tarefa" onPress={() => setModalVisivel(true)} />

      <ModalNovaTarefa
        modalVisivel={modalVisivel}
        setModalVisivel={setModalVisivel}
        novaTarefa={novaTarefa}
        setNovaTarefa={setNovaTarefa}
        adicionarTarefa={adicionarTarefa}
      />
    </View>
  );
}
