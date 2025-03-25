import { useState } from "react";

export default function BookStack() {
  const [books, setBooks] = useState([
    { name: "Clean Code", isbn: "9780132350884", author: "Robert C. Martin", publisher: "Prentice Hall" },
    { name: "The Pragmatic Programmer", isbn: "9780201616224", author: "Andrew Hunt & David Thomas", publisher: "Addison-Wesley" },
  ]);

  const [newBook, setNewBook] = useState({ name: "", isbn: "", author: "", publisher: "" });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = (e) => {
    e.preventDefault();
    if (newBook.name && newBook.isbn && newBook.author && newBook.publisher) {
      setBooks([newBook, ...books]);
      setNewBook({ name: "", isbn: "", author: "", publisher: "" });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Gestión de Pila de Libros</h2>
      <form onSubmit={addBook} className="mb-4 space-y-2">
        <input className="w-full p-2 border rounded" type="text" name="name" placeholder="Nombre del libro" value={newBook.name} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="isbn" placeholder="ISBN" value={newBook.isbn} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="author" placeholder="Autor" value={newBook.author} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="publisher" placeholder="Editorial" value={newBook.publisher} onChange={handleChange} required />
        <button className="w-full p-2 bg-blue-500 text-white rounded" type="submit">Añadir Libro</button>
      </form>
      <ul className="space-y-2">
        {books.map((book, index) => (
          <li key={index} className="p-2 border rounded">
            <strong>{book.name}</strong> - {book.author} ({book.publisher}) - ISBN: {book.isbn}
          </li>
        ))}
      </ul>
    </div>
  );
}
