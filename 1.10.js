
function addOrRemoveFruit(array, fruit) {
    if (fruit === "Morango") {
      let removed = array.shift();
      console.log("Morango encontrado, primeiro item removido:", removed);
    } else {
      array.push(fruit);
      console.log("Fruta adicionada:", fruit);
    }
    console.log("Array atualizado:", array);
  }

  const fruits = ["Maçã", "Banana", "Pêra"];
  addOrRemoveFruit(fruits, "Morango"); // Isso deve remover
  addOrRemoveFruit(fruits, "Uva");     // Isso deve adicionar "Uva" ao array
  console.log("Array final:", fruits);
  