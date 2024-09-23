export const formatarDataCompleta = () => {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  
    const dataAtual = new Date();
    const diaSemana = diasSemana[dataAtual.getDay()];
    const diaMes = dataAtual.getDate();
    const mes = mesesAno[dataAtual.getMonth()];
  
    return `${diaSemana}, ${diaMes} de ${mes}`;
  };
  