// components/ModalNovaTarefa.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles';

export default function ModalNovaTarefa({ modalVisivel, setModalVisivel, adicionarTarefa }) {
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
    if (titulo.trim() && descricao.trim()) {
      adicionarTarefa({
        titulo,
        descricao,
        dataConclusao: dataConclusao.toLocaleDateString(),
      });
      setTitulo('');
      setDescricao('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <Modal visible={modalVisivel} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitulo}>Nova Tarefa</Text>

          <TextInput
            style={styles.inputModerno}
            placeholder="Título da tarefa"
            value={titulo}
            onChangeText={setTitulo}
          />

          <TextInput
            style={styles.inputModerno}
            placeholder="Descrição da tarefa"
            value={descricao}
            onChangeText={setDescricao}
          />

          <TouchableOpacity onPress={() => setMostrandoCalendario(true)}>
            <Text style={styles.inputModerno}>
              {dataConclusao ? `Previsão de Conclusão: ${dataConclusao.toLocaleDateString()}` : 'Selecione a Data de Conclusão'}
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

          <TouchableOpacity style={styles.botaoAdicionar} onPress={handleAdicionarTarefa}>
            <Text style={styles.botaoTexto}>Adicionar Tarefa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoCancelar} onPress={() => setModalVisivel(false)}>
            <Text style={styles.botaoTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
