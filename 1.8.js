function conditionalRemove(array) {
    if (array.length > 3) {
      let removed = array.pop();
      console.log("Último número removido:", removed);
    } else {
      let removed = array.shift();
      console.log("Primeiro número removido:", removed);
    }
    console.log("Array atualizado:", array);
  }
  