// components/ModalNovaTarefa.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Biblioteca para selecionar a data
import styles from '../styles';

export default function ModalNovaTarefa({
  modalVisivel,
  setModalVisivel,
  adicionarTarefa
}) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataConclusao, setDataConclusao] = useState(new Date());
  const [mostrandoCalendario, setMostrandoCalendario] = useState(false);

  // Função para lidar com a mudança da data de conclusão
  const onChangeData = (event, selectedDate) => {
    const currentDate = selectedDate || dataConclusao;
    setMostrandoCalendario(false); // Fecha o calendário após a seleção
    setDataConclusao(currentDate); // Atualiza o estado com a data selecionada
  };

  const handleAdicionarTarefa = () => {
    if (titulo.length > 0 && descricao.length > 0) {
      adicionarTarefa({
        titulo,
        descricao,
        dataConclusao: dataConclusao.toLocaleDateString(), // Formata a data de conclusão
        status: 'Aberta'
      });
      setTitulo('');
      setDescricao('');
      setModalVisivel(false);
    }
  };

  return (
    <Modal visible={modalVisivel} animationType="slide" transparent={true}>
      <View style={styles.modalView}>
        <Text style={styles.modalTexto}>Nova Tarefa</Text>

        {/* Input para o Título */}
        <TextInput
          style={styles.input}
          placeholder="Título da tarefa"
          value={titulo}
          onChangeText={setTitulo}
        />

        {/* Input para a Descrição */}
        <TextInput
          style={styles.input}
          placeholder="Descrição da tarefa"
          value={descricao}
          onChangeText={setDescricao}
        />

        {/* Botão para exibir o calendário */}
        <TouchableOpacity onPress={() => setMostrandoCalendario(true)}>
          <Text style={styles.input}>
            {dataConclusao ? `Data de Conclusão: ${dataConclusao.toLocaleDateString()}` : 'Selecione a Data de Conclusão'}
          </Text>
        </TouchableOpacity>

        {/* Exibe o DateTimePicker para selecionar a data */}
        {mostrandoCalendario && (
          <DateTimePicker
            value={dataConclusao}
            mode="date"
            display="default"
            onChange={onChangeData}
          />
        )}

        {/* Botão para adicionar a tarefa */}
        <TouchableOpacity style={styles.modalBotaoAdicionar} onPress={handleAdicionarTarefa}>
          <Text style={styles.botaoTextoModal}>Adicionar Tarefa</Text>
        </TouchableOpacity>

        {/* Botão para cancelar e fechar o modal */}
        <TouchableOpacity style={styles.modalBotaoCancelar} onPress={() => setModalVisivel(false)}>
          <Text style={styles.botaoTextoModal}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
