import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Clase para la Lista Enlazada de Canciones
class SongNode {
  constructor(song, next = null) {
    this.song = song;
    this.next = next;
  }
}

class SongLinkedList {
  constructor() {
    this.head = null;
    this.current = null;
  }

  addSong(song) {
    const newNode = new SongNode(song);
    if (!this.head) {
      this.head = newNode;
      this.current = this.head;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  nextSong() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }
}

// Clase para la Lista Doblemente Enlazada de Páginas
class PageNode {
  constructor(page, prev = null, next = null) {
    this.page = page;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addPage(page) {
    const newNode = new PageNode(page, this.tail);
    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }

  nextPage() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }

  prevPage() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
  }
}

function SongsPage() {
  const [songsList] = useState(() => {
    const list = new SongLinkedList();
    ["Song 1", "Song 2", "Song 3"].forEach(song => list.addSong(song));
    return list;
  });

  const [, updateState] = useState();
  const forceUpdate = () => updateState({});

  return (
    <div className="container">
      <h2>Lista Enlazada - Reproducción de Canciones</h2>
      <p>Reproduciendo: {songsList.current ? songsList.current.song : "Ninguna"}</p>
      <button onClick={() => { songsList.nextSong(); forceUpdate(); }}>Siguiente Canción</button>
      <br /><Link to="/">Volver al menú</Link>
    </div>
  );
}

function PagesPage() {
  const [pagesList] = useState(() => {
    const list = new DoublyLinkedList();
    ["Home", "About", "Contact"].forEach(page => list.addPage(page));
    return list;
  });

  const [, updateState] = useState();
  const forceUpdate = () => updateState({});

  return (
    <div className="container">
      <h2>Lista Doblemente Enlazada - Navegación</h2>
      <p>Página Actual: {pagesList.current ? pagesList.current.page : "Ninguna"}</p>
      <button onClick={() => { pagesList.prevPage(); forceUpdate(); }}>Anterior</button>
      <button onClick={() => { pagesList.nextPage(); forceUpdate(); }}>Siguiente</button>
      <br /><Link to="/">Volver al menú</Link>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <h2>Menú Principal</h2>
      <Link to="/songs">Ir a Lista Enlazada - Canciones</Link><br />
      <Link to="/pages">Ir a Lista Doblemente Enlazada - Navegación</Link>
    </div>
  );
}

export default function List() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/pages" element={<PagesPage />} />
      </Routes>
    </Router>
  );
}