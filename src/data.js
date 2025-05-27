// default data
export const tree = {
  valor: 50,
  izquierda: {
    valor: 25,
    izquierda: {
      valor: 12,
      izquierda: null,
      derecha: null
    },
    derecha: {
      valor: 37,
      izquierda: null,
      derecha: null
    }
  },
  derecha: {
    valor: 75,
    izquierda: {
      valor: 62,
      izquierda: null,
      derecha: null
    },
    derecha: {
      valor: 87,
      izquierda: null,
      derecha: null
    }
  }
}

// react d3 tree data
export const arbol = [
  {
    name: "50",
    children: [
      {
        name: "25",
        children: [
          { name: "12" },
          { name: "37" }
        ]
      },
      {
        name: "75",
        children: [
          { name: "62" },
          { name: "87" }
        ]
      }
    ]
  }
];