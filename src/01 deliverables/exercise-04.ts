console.log("************** DELIVERABLE 04 WITH TYPESCRIPT ****************");

/*
Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se ha leído o no dicho libro.
Un libro es un objeto con title como string y isRead como booleano.En caso de no existir el libro devolver false
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
*/

interface Books {
  title: string;
  isRead: boolean;
}

const isBookRead = (books: Books[], titleToSearch: string): boolean => {
  let isRead = false;

  books.map((element) => {
    if (element.title === titleToSearch) {
      isRead = element.isRead;
    }
  });

  return isRead;
};

/*
Ejemplo
*/
const books: Books[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
