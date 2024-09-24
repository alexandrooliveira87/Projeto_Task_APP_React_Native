import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Estilo geral do container principal
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Fundo suave e claro
  },
  scrollContainer: {
    flex: 1,  // Certifica-se de que o ScrollView ocupe todo o espaço disponível
  },

  // Estilo do cabeçalho
  cabecalho: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },

  // Estilo para exibir a data atual no cabeçalho
  dataTexto: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },

  // Estilos para as abas (Todas, Abertas, Concluídas)
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

  // Estilos da lista de tarefas
  listaDeTarefas: {
   
    paddingBottom: 20, // Espaço no fim da lista
  },

  // Estilo dos itens de tarefa
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

  // Texto das tarefas
  tarefaTexto: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
    color: '#333',
  },

  // Estilo para tarefas concluídas (texto riscado)
  tarefaConcluida: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
    textDecorationLine: 'line-through',
    color: 'gray',
  },

  // Botão para adicionar nova tarefa (flutuante)
  botaoNovaTarefa: {
    position: 'absolute', // Botão flutuante
    right: 20,
    bottom: 30,
    backgroundColor: '#20B2AA', // Cor verde para destaque
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Texto dos botões (Adicionar Tarefa, Cancelar, etc.)
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Estilo do modal (fundo escurecido)
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo escurecido para o modal
  },
  modalView: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitulo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },

  // Estilos dos inputs (campo de texto)
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

  inputModerno: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },

  // Botões dentro do modal (Adicionar e Cancelar)
  botaoAdicionar: {
    backgroundColor: '#20B2AA',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  botaoCancelar: {
    backgroundColor: '#A52A2A',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },

  // Campo de filtro de tarefas
  inputFiltro: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    fontSize: 16,
  },
});
