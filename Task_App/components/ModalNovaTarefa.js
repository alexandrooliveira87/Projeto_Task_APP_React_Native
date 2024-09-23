import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function ModalNovaTarefa({
  modalVisivel,
  setModalVisivel,
  novaTarefa,
  setNovaTarefa,
  adicionarTarefa,
}) {
  return (
    <Modal visible={modalVisivel} animationType="slide" transparent={true}>
      <View style={styles.modalView}>
        <Text style={styles.modalTexto}>Nova Tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição da tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        {/* Botão para adicionar a tarefa */}
        <TouchableOpacity style={styles.modalBotaoAdicionar} onPress={adicionarTarefa}>
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
