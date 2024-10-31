let guilherme = {
    marcasapato: ['Nike', 'Adidas'],
    comidas: ['macarrão', 'arroz', 'feijão'],
    anos: 38,
    
    // funcao
    exibirInfo: function() {
        console.log('Comidas: ' + this.comidas[0] + ' ' + this.comidas[1]);
        console.log('Idade: ' + this.anos);
    }
};

// Acessar os primeiros itens do array comidas
console.log(guilherme.comidas[0] + ' ' + guilherme.comidas[1]);

// Exibindo a idade
console.log(guilherme.anos);

// Chamar a função para exibir as informações
guilherme.exibirInfo();
