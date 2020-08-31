console.log("************** DELIVERABLE 02 *********************");
/*
2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
*/
let concat = (a, b) => [...a, ...b];

console.log(
  concat([1, 2, 3, 5, 4], ["john", "smith", "doe", "peter", "Ipsum"])
);

/*
Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
*/
let concat = (...params) => {
  return params.reduce((acc, element) => {
    return [...acc, ...element];
  }, []);
};

console.log(
  concat(
    [1, 2, 3, 5, 4],
    ["john", "smith", "doe", "peter", "Ipsum"],
    ["thing 1", "thing 2", "thing 3", "thing 4"]
  )
);
