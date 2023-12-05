function calcular() {
    // Obtém as avaliações do usuário
    const ao1 = parseFloat(prompt("Trabalho 1:"));
    const ao2 = parseFloat(prompt("Trabalho 2:"));
    const a = parseFloat(prompt("Avaliação 2:"));
    const b = parseFloat(prompt("Avaliação 3:"));
  
    // Calcula as avaliações A1 e A2
    const a1 = (ao1 + ao2) * 0.4;
    const a2 = a * 0.6;
    const a3 = b * 0.6;
  
    // Determina a avaliação A3
    const maiorAvaliacao = a3 > a2 ? a3 : a2;
  
    // Calcula a nota final
    const nf = a1 + maiorAvaliacao;
  
    // Determina a aprovação ou reprovação
    const resultado = nf > 6 ? "Aprovado" : "Reprovado";
  
    // Exibe o resultado na tela
    alert(resultado);
  }
  
  calcular();