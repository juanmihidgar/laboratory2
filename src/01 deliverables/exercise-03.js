console.log("************** DELIVERABLE 03 *********************");
/*
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source :
*/

const clone = (source) => { return { ...source } };

console.log(clone({ name: "hola", greet: "saludos" }));
/*
Merge
Implementa una función merge que, dados dos objetos de entrada source y target , devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso de propiedades con el mismo nombre, source sobreescribe a target.
Por ejemplo, dados estos 2 objetos:

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

el resultado de mezclar a sobre b sería:
merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", c
TIP: Puedes usar la función “clone” del apartado A.
*/
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

const merge = (source, target) => { return { ...target, ...source } };

console.log(merge(a, b));