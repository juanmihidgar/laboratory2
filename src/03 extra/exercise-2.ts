export {};
console.log("************** EXTRA 02 WITH TYPESCRIPT *********************");
/*Curry Setter
En un formulario tenemos un objeto con los campos name, surname y age que representan un usuario. Crea una función set que reciba un objeto con los campos de usuario, el nombre de una propiedad y su valor y actualice la propiedad del objeto con el valor pasado como argumento.

El ejercicio debe cumplir la siguiente norma: la función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.
*/

interface Person {
  name: string;
  surname: string;
  age: number;
}

const set = (
  person: Person,
  attribute: string,
  value: string | number
): Person => {
  return { ...person, ...{ [attribute]: value } };
};

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

/*
Opcional
Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad esté configurado previamente. Es decir, modifica la función set para poder crear setName, setSurname y setAge que reciban sólo el objeto y el valor y sepan qué propiedad actualizar.

TypeScript: Además, si quieres, puedes extraer la firma de la interfaz sin ponerla en línea con la implementación.
*/

const curriedSet = (person: Person) => (attribute: string) => (
  value: string | number
): Person => {
  return { ...person, ...{ [attribute]: value } };
};

const setName = (person: Person, value: string | number): Person => {
  return curriedSet(person)("name")(value);
};

const setSurname = (person: Person, value: string | number): Person => {
  return curriedSet(person)("surname")(value);
};

const setAge = (person: Person, value: string | number): Person => {
  return curriedSet(person)("age")(value);
};

const john = { name: "John", surname: "Doe", age: 19 };

console.log(setName(john, "Juan")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(john, "Smith")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(john, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
