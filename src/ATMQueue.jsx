import { useState } from "react";

export default function ATMQueue() {
  const [queue, setQueue] = useState([
    { name: "Carlos Pérez", amount: 50000 },
    { name: "Ana Gómez", amount: 200000 },
  ]);

  const [newPerson, setNewPerson] = useState({ name: "", amount: "" });

  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  const addToQueue = (e) => {
    e.preventDefault();
    if (newPerson.name && newPerson.amount) {
      setQueue([...queue, { ...newPerson, amount: Number(newPerson.amount) }]);
      setNewPerson({ name: "", amount: "" });
    }
  };

  return (
    <div className="container">
      <h2>Cola del Cajero Automático</h2>
      <form onSubmit={addToQueue} className="form">
        <input type="text" name="name" placeholder="Nombre" value={newPerson.name} onChange={handleChange} required />
        <input type="number" name="amount" placeholder="Importe a retirar" value={newPerson.amount} onChange={handleChange} required />
        <button type="submit">Añadir a la cola</button>
      </form>
      <ol className="queue-list">
        {queue.map((person, index) => (
          <li key={index} className="queue-item">
            <strong>{person.name}</strong> - Retiro: ${person.amount.toLocaleString()}
          </li>
        ))}
      </ol>
    </div>
  );
}
