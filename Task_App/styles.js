import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cabecalho: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  abas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  abaAtiva: {
    color: 'blue',
    fontWeight: 'bold',
  },
  abaInativa: {
    color: 'gray',
  },
  listaDeTarefas: {
    flex: 1,
    marginBottom: 20,
  },
  itemDeTarefa: {
    flexDirection: 'row', // Organiza os itens horizontalmente
    justifyContent: 'space-between', // Deixa o texto e o botão com espaço entre eles
    alignItems: 'center', // Alinha verticalmente ao centro
    paddingVertical: 10, // Espaçamento vertical
    paddingHorizontal: 15, // Espaçamento horizontal
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9', // Cor de fundo para destaque
    borderRadius: 8, // Bordas arredondadas para o item
    marginVertical: 5, // Margem vertical entre os itens
  },
  tarefaTexto: {
    fontSize: 16,
    flex: 1, // Faz com que o texto ocupe o máximo de espaço possível
    marginRight: 10, // Espaço entre o texto e o botão
  },
  tarefaConcluida: {
    fontSize: 16,
    flex: 1,
    marginRight: 10, 
    textDecorationLine: 'line-through', // Risca o texto das tarefas concluídas
    color: 'gray',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTexto: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
});
