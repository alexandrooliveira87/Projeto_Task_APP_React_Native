import React from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';
import styles from '../styles';

export default function ModalNovaTarefa({
  modalVisivel,
  setModalVisivel,
  novaTarefa,
  setNovaTarefa,
  adicionarTarefa,
}) {
  return (
    <Modal visible={modalVisivel} animationType="slide">
      <View style={styles.modalView}>
        <Text style={styles.modalTexto}>Nova Tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição da tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
        <Button title="Cancelar" color="red" onPress={() => setModalVisivel(false)} />
      </View>
    </Modal>
  );
}
