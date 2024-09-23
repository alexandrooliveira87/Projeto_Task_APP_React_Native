// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
  const [filtro, setFiltro] = useState(''); // Estado para o campo de filtro
  const [tarefasFiltradas, setTarefasFiltradas] = useState(tarefas); // Estado para armazenar as tarefas filtradas

  // Função para obter a data no formato "Segunda-feira, 16 setembro"
  const dataAtual = format(new Date(), "eeee, dd 'de' MMMM", { locale: ptBR });

  const adicionarTarefa = () => {
    if (novaTarefa.length > 0) {
      setTarefas([...tarefas, { nome: novaTarefa, descricao: "", data: format(new Date(), 'dd/MM/yyyy'), status: 'Aberta' }]);
      setNovaTarefa('');
      setModalVisivel(false);
    }
  };

  const completarTarefa = (index) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index].status = 'Concluída';
    setTarefas(tarefasAtualizadas);
  };

  // Função de filtragem por título e descrição, além de status da aba
  useEffect(() => {
    const tarefasFiltradas = tarefas.filter(tarefa => {
      const tituloIncluido = tarefa.nome.toLowerCase().includes(filtro.toLowerCase());
      const descricaoIncluida = tarefa.descricao.toLowerCase().includes(filtro.toLowerCase());

      const abaFiltrada = abaAtiva === 'Todas' || tarefa.status === abaAtiva;

      return (tituloIncluido || descricaoIncluida) && abaFiltrada;
    });
    setTarefasFiltradas(tarefasFiltradas);
  }, [filtro, tarefas, abaAtiva]); // Atualiza quando o filtro, tarefas ou aba mudam

  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>Tarefas de Hoje</Text>
      <Text style={styles.dataTexto}>{dataAtual}</Text>

      {/* Campo de filtro */}
      <TextInput
        style={styles.inputFiltro}
        placeholder="Filtrar por título ou descrição"
        value={filtro}
        onChangeText={setFiltro}
      />

      <Aba abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        completarTarefa={completarTarefa}
      />

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
