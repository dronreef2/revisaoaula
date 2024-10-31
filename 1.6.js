function addOrRemoveNumber(array, number) {
    if (number > 50) {
      let removed = array.pop();
      console.log("Número removido:", removed);
    } else {
      array.push(number);
      console.log("Número adicionado:", number);
    }
    console.log("Array atualizado:", array);
  }
  