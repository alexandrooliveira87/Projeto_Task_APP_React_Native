import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Aba from './components/Aba';
import ListaDeTarefas from './components/ListaDeTarefas';
import ModalNovaTarefa from './components/ModalNovaTarefa';
import styles from './styles';
import TarefasIniciais from './components/tarefasIniciais';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function App() {
  const [tarefas, setTarefas] = useState(TarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('Todas');

  // Função para obter a data no formato "Segunda-feira, 16 setembro"
  const dataAtual = format(new Date(), "eeee, dd 'de' MMMM", { locale: ptBR });

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
      <Text style={styles.dataTexto}>{dataAtual}</Text>

      <Aba abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        completarTarefa={completarTarefa}
      />

      {/* Certifique-se de que o texto do botão está dentro de um componente <Text> */}
      <TouchableOpacity style={styles.botaoNovaTarefa} onPress={() => setModalVisivel(true)}>
        <Text style={styles.botaoTexto}>+ NOVA TAREFA</Text>
      </TouchableOpacity>

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
