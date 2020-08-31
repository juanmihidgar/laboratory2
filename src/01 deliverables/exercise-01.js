console.log("************** DELIVERABLE 01 *********************");

/*
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
*/

const head = ([first]) => first; // Implementation here.

console.log(head(["hola", 2, 3, 4, 5]));

/*
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
*/
const tail = ([frist, ...restParams]) => restParams; // Implementation here.

console.log(tail([1, 2, 3, 4, 5]));

/*
Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
*/
const init = (inputArray) => {
  return inputArray.reduce((acc, element, index, array) => {
    if (index < array.length - 1) {
      acc.push(element);
    }

    return acc;
  }, []);
};

console.log(init([1, "hola", 3, 4, "adios"]));

/*
Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
*/
const last = ([...params]) => params[params.length - 1]; // Implementation here.

console.log(last([1, "hola", 3, 4, "adios"]));
