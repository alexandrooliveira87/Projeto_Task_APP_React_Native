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

// Função para gerar um ID único para cada tarefa
const gerarIDUnico = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

// Componente principal do app
export default function App() {
  // Definindo o estado das tarefas e do filtro
  const [tarefas, setTarefas] = useState(TarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false); // Controle de visibilidade do modal
  const [abaAtiva, setAbaAtiva] = useState('Todas'); // Aba ativa: Todas, Abertas, Concluídas
  const [filtro, setFiltro] = useState('');
  const [tarefasFiltradas, setTarefasFiltradas] = useState(tarefas); // Tarefas filtradas com base na pesquisa

  // Obtendo a data atual formatada
  const dataAtual = format(new Date(), "eeee, dd 'de' MMMM", { locale: ptBR });

  // Função para salvar tarefas no armazenamento local do dispositivo
  const salvarTarefas = async (tarefas) => {
    try {
      await AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
    } catch (error) {
      console.error('Erro ao salvar as tarefas:', error);
    }
  };

  // Função para carregar tarefas salvas do armazenamento local
  const carregarTarefas = async () => {
    try {
      const tarefasSalvas = await AsyncStorage.getItem('tarefas');
      if (tarefasSalvas !== null) {
        setTarefas(JSON.parse(tarefasSalvas)); // Se houver tarefas salvas, carregue-as
      }
    } catch (error) {
      console.error('Erro ao carregar as tarefas:', error);
    }
  };

  // Carrega as tarefas salvas quando o app inicia
  useEffect(() => {
    carregarTarefas();
  }, []);

  // Sempre que a lista de tarefas é alterada, ela é salva
  useEffect(() => {
    salvarTarefas(tarefas);
  }, [tarefas]);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = (novaTarefaObj) => {
    if (novaTarefaObj.titulo && novaTarefaObj.descricao) {
      const nova = {
        id: gerarIDUnico(),
        nome: novaTarefaObj.titulo,
        descricao: novaTarefaObj.descricao,
        data: novaTarefaObj.dataConclusao,
        status: 'Aberta', // Toda nova tarefa começa com o status 'Aberta'
        dataConclusao: null // Data de conclusão fica como 'null' até ser concluída
      };
      setTarefas([...tarefas, nova]); // Adiciona a nova tarefa à lista
      setModalVisivel(false); // Fecha o modal
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.'); // Mostra alerta se os campos estiverem vazios
    }
  };

  // Função para marcar uma tarefa como concluída
  const completarTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { 
          ...tarefa, 
          status: 'Concluída', 
          dataConclusao: format(new Date(), 'yyyy-MM-dd HH:mm:ss') // Adiciona data de conclusão
        };
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
  };

  // Filtra as tarefas com base no texto de busca e na aba ativa
  useEffect(() => {
    const tarefasFiltradas = tarefas.filter(tarefa => {
      const tituloIncluido = tarefa.nome.toLowerCase().includes(filtro.toLowerCase());
      const descricaoIncluida = tarefa.descricao.toLowerCase().includes(filtro.toLowerCase());
      const abaFiltrada = abaAtiva === 'Todas' || tarefa.status === abaAtiva;
      return (tituloIncluido || descricaoIncluida) && abaFiltrada;
    });

    // Se a aba ativa for 'Concluída', ordena pela data de conclusão
    if (abaAtiva === 'Concluída') {
      tarefasFiltradas.sort((a, b) => new Date(b.dataConclusao) - new Date(a.dataConclusao));
    }

    setTarefasFiltradas(tarefasFiltradas); // Atualiza a lista de tarefas filtradas
  }, [filtro, tarefas, abaAtiva]);

  return (
    <View style={styles.container}>
      {/* Cabeçalho do aplicativo */}
      <Text style={styles.cabecalho}>Lista de Tarefas</Text>
      <Text style={styles.dataTexto}>{dataAtual}</Text>

      {/* Campo de filtro de tarefas */}
      <TextInput
        style={styles.inputFiltro}
        placeholder="Filtrar por título ou descrição"
        value={filtro}
        onChangeText={setFiltro}
      />

      {/* Componente de abas */}
      <Aba abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

      {/* Lista de tarefas */}
      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        completarTarefa={completarTarefa}
      />

      {/* Botão para adicionar nova tarefa */}
      <TouchableOpacity style={styles.botaoNovaTarefa} onPress={() => setModalVisivel(true)}>
        <Text style={styles.botaoTexto}>+ NOVA TAREFA</Text>
      </TouchableOpacity>

      {/* Modal para adicionar nova tarefa */}
      <ModalNovaTarefa
        modalVisivel={modalVisivel}
        setModalVisivel={setModalVisivel}
        adicionarTarefa={adicionarTarefa}
      />
    </View>
  );
}
