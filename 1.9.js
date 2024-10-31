function checkArrayLength(array) {
    if (array.length > 5) {
      console.log("O array tem mais de 5 elementos.");
    } else {
      console.log("O array tem 5 ou menos elementos.");
    }
  }
  
  const myArray = [1, 2, 3, 4, 5, 6];
  checkArrayLength(myArray);