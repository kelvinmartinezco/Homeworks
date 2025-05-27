import './App.css'
import React, { useState } from 'react';
import { Graph } from 'react-d3-graph';

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  // graph for people and cities
  const data = {
    nodes: [
      // cities - nuevas ciudades colombianas con colores que combinan con la paleta
      { id: "Cartagena", color: "#764ba2", type: "city" },
      { id: "Barranquilla", color: "#764ba2", type: "city" },
      { id: "Bucaramanga", color: "#764ba2", type: "city" },
      { id: "Pereira", color: "#764ba2", type: "city" },

      // people with age - 2 personas por ciudad con nombres colombianos
      // Cartagena
      { id: "Alejandra", color: "#00f2fe", type: "person", age: 24, city: "Cartagena" },
      { id: "Santiago", color: "#00f2fe", type: "person", age: 29, city: "Cartagena" },
      
      // Barranquilla
      { id: "Valentina", color: "#00f2fe", type: "person", age: 26, city: "Barranquilla" },
      { id: "Andrés", color: "#00f2fe", type: "person", age: 31, city: "Barranquilla" },
      
      // Bucaramanga
      { id: "Isabella", color: "#00f2fe", type: "person", age: 23, city: "Bucaramanga" },
      { id: "Sebastián", color: "#00f2fe", type: "person", age: 27, city: "Bucaramanga" },
      
      // Pereira
      { id: "Camila", color: "#00f2fe", type: "person", age: 25, city: "Pereira" },
      { id: "Nicolás", color: "#00f2fe", type: "person", age: 33, city: "Pereira" },
    ],

    // connections con colores que combinan con la paleta
    links: [
      // cities connections - azul claro del gradiente accent
      { source: "Cartagena", target: "Barranquilla", color: "#4facfe" },
      { source: "Cartagena", target: "Pereira", color: "#4facfe" },
      { source: "Barranquilla", target: "Bucaramanga", color: "#4facfe" },
      { source: "Bucaramanga", target: "Pereira", color: "#4facfe" },

      // location connection, person to city - verde del gradiente success
      { source: "Alejandra", target: "Cartagena", color: "#38f9d7" },
      { source: "Santiago", target: "Cartagena", color: "#38f9d7" },
      { source: "Valentina", target: "Barranquilla", color: "#38f9d7" },
      { source: "Andrés", target: "Barranquilla", color: "#38f9d7" },
      { source: "Isabella", target: "Bucaramanga", color: "#38f9d7" },
      { source: "Sebastián", target: "Bucaramanga", color: "#38f9d7" },
      { source: "Camila", target: "Pereira", color: "#38f9d7" },
      { source: "Nicolás", target: "Pereira", color: "#38f9d7" },

      // friends, person to person - rosa del gradiente secondary
      { source: "Alejandra", target: "Valentina", color: "#f5576c" },
      { source: "Santiago", target: "Andrés", color: "#f5576c" },
      { source: "Isabella", target: "Camila", color: "#f5576c" },
      { source: "Sebastián", target: "Nicolás", color: "#f5576c" },
      { source: "Alejandra", target: "Isabella", color: "#f5576c" },
      { source: "Valentina", target: "Camila", color: "#f5576c" },
    ],
  };

  const config = {
    nodeHighlightBehavior: true,
    node: {
      size: 300,
      fontColor: 'white',
      fontSize: 10,
      strokeWidth: 2,
      strokeColor: '#ffffff',
    },
    link: {
      highlightColor: '#667eea',
      strokeWidth: 3,
      opacity: 0.8,
    },
    directed: false,
    height: 500,
    width: 800,
  };

  // Function to get people living in a specific city
  const getPeopleInCity = (cityName) => {
    return data.nodes.filter(node => 
      node.type === "person" && node.city === cityName
    );
  };

  // Get all cities for the dropdown
  const cities = data.nodes.filter(node => node.type === "city");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h1 className="title-main">Cities and People Graph</h1>
      <p className="subtitle">Interactive network visualization of friends and cities</p>
      
      <div className="graph-container">
        <Graph id="graph-id" data={data} config={config} />
      </div>
      
      <div className="city-selector">
        <h3>🏙️ Find People by City</h3>
        <select 
          value={selectedCity} 
          onChange={handleCityChange}
          className="select-modern"
        >
          <option value="">Select a city...</option>
          {cities.map(city => (
            <option key={city.id} value={city.id}>{city.id}</option>
          ))}
        </select>
        
        {selectedCity && (
          <div className="people-list">
            <h4>👥 People living in {selectedCity}:</h4>
            <ul>
              {getPeopleInCity(selectedCity).map(person => (
                <li key={person.id}>
                  <strong>{person.id}</strong> - Age: {person.age} years old
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;