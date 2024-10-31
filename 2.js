
// valor de entrada saque


function saque(valorSaque) {
    const saldo = 300;
    if (valorSaque <= saldo) {
      console.log("saque disponivel");
    } else {
      console.log("sem dinheiro disponivel");
    }
  }
  
  // Exemplo de uso:
  saque(200);