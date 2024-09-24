// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Aba from './components/Aba';
import ListaDeTarefas from './components/ListaDeTarefas';
import ModalNovaTarefa from './components/ModalNovaTarefa';
import styles from './styles';
import TarefasIniciais from './components/tarefasIniciais';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para gerar um ID único sem usar uuid
const gerarIDUnico = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

export default function App() {
  const [tarefas, setTarefas] = useState(TarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('Todas');
  const [filtro, setFiltro] = useState('');
  const [tarefasFiltradas, setTarefasFiltradas] = useState(tarefas);

  // Função para obter a data no formato "Segunda-feira, 16 setembro"
  const dataAtual = format(new Date(), "eeee, dd 'de' MMMM", { locale: ptBR });

  // Função para salvar tarefas no AsyncStorage
  const salvarTarefas = async (tarefas) => {
    try {
      await AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
    } catch (error) {
      console.error('Erro ao salvar as tarefas:', error);
    }
  };

  // Função para carregar tarefas do AsyncStorage
  const carregarTarefas = async () => {
    try {
      const tarefasSalvas = await AsyncStorage.getItem('tarefas');
      if (tarefasSalvas !== null) {
        setTarefas(JSON.parse(tarefasSalvas));
      }
    } catch (error) {
      console.error('Erro ao carregar as tarefas:', error);
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  useEffect(() => {
    salvarTarefas(tarefas);
  }, [tarefas]);

  const adicionarTarefa = (novaTarefaObj) => {
    if (novaTarefaObj.titulo && novaTarefaObj.descricao) {
      const nova = {
        id: gerarIDUnico(), // Gerando um ID único
        nome: novaTarefaObj.titulo,
        descricao: novaTarefaObj.descricao,
        data: novaTarefaObj.dataConclusao,
        status: 'Aberta'
      };
      setTarefas([...tarefas, nova]);
      setModalVisivel(false);
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  const completarTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, status: 'Concluída' };
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas); // Atualizando o array original de tarefas
  };

  // Filtrar tarefas pelo título, descrição e aba ativa
  useEffect(() => {
    const tarefasFiltradas = tarefas.filter(tarefa => {
      const tituloIncluido = tarefa.nome.toLowerCase().includes(filtro.toLowerCase());
      const descricaoIncluida = tarefa.descricao.toLowerCase().includes(filtro.toLowerCase());
      const abaFiltrada = abaAtiva === 'Todas' || tarefa.status === abaAtiva;
      return (tituloIncluido || descricaoIncluida) && abaFiltrada;
    });
    setTarefasFiltradas(tarefasFiltradas);
  }, [filtro, tarefas, abaAtiva]);

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
        adicionarTarefa={adicionarTarefa}
      />
    </View>
  );
}
