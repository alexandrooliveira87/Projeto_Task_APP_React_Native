// components/ModalNovaTarefa.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
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

  const onChangeData = (event, selectedDate) => {
    const currentDate = selectedDate || dataConclusao;
    setMostrandoCalendario(false);
    setDataConclusao(currentDate);
  };

  const handleAdicionarTarefa = () => {
    if (titulo.length > 0 && descricao.length > 0) {
      adicionarTarefa({
        titulo,
        descricao,
        dataConclusao: dataConclusao.toLocaleDateString(),
        status: 'Aberta',
      });
      setTitulo('');
      setDescricao('');
      setModalVisivel(false);
    }
  };

  return (
    <Modal visible={modalVisivel} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitulo}>Nova Tarefa</Text>

          {/* Input para o Título */}
          <TextInput
            style={styles.inputModerno}
            placeholder="Título da tarefa"
            value={titulo}
            onChangeText={setTitulo}
          />

          {/* Input para a Descrição */}
          <TextInput
            style={styles.inputModerno}
            placeholder="Descrição da tarefa"
            value={descricao}
            onChangeText={setDescricao}
          />

          {/* Botão para exibir o calendário */}
          <TouchableOpacity onPress={() => setMostrandoCalendario(true)}>
            <Text style={styles.inputModerno}>
              {dataConclusao ? `Data de Conclusão: ${dataConclusao.toLocaleDateString()}` : 'Selecione a Data de Conclusão'}
            </Text>
          </TouchableOpacity>

          {mostrandoCalendario && (
            <DateTimePicker
              value={dataConclusao}
              mode="date"
              display="default"
              onChange={onChangeData}
            />
          )}

          {/* Botão para adicionar a tarefa */}
          <TouchableOpacity style={styles.botaoAdicionar} onPress={handleAdicionarTarefa}>
            <Text style={styles.botaoTexto}>Adicionar Tarefa</Text>
          </TouchableOpacity>

          {/* Botão para cancelar e fechar o modal */}
          <TouchableOpacity style={styles.botaoCancelar} onPress={() => setModalVisivel(false)}>
            <Text style={styles.botaoTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
