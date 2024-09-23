import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Fundo suave
  },
  cabecalho: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  dataTexto: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  abas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  abaAtiva: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  abaInativa: {
    color: '#666',
  },
  listaDeTarefas: {
    flex: 1,
    marginBottom: 20,
  },
  itemDeTarefa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  tarefaTexto: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
    color: '#333',
  },
  tarefaConcluida: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  botaoNovaTarefa: {
    position: 'absolute', // Botão flutuante
    right: 20,
    bottom: 30,
    backgroundColor: '#28a745', // Cor verde para destaque
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',  // Sombra para destaque
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTexto: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '80%',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  modalBotaoAdicionar: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  modalBotaoCancelar: {
    backgroundColor: '#FF4D4D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  botaoTextoModal: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,  // Faz o scroll ocupar o espaço da tela
  },
  listaDeTarefas: {
    paddingBottom: 20, // Adiciona espaço no fim da lista
  }
});
