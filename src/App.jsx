import './App.css'
import { arbol, tree } from './data'
import Tree from 'react-d3-tree';

function App() {

  // print tree functions
  const preorden = (node) => {
    if(!node) return
    console.log(node.valor)
    preorden(node.izquierda)
    preorden(node.derecha)
  }

  const inorden = (node) => {
    if(!node) return
    
    inorden(node.izquierda)
    console.log(node.valor)
    inorden(node.derecha)
  }

  const postorden = (node) => {
    if(!node) return
    postorden(node.izquierda)
    postorden(node.derecha) 
    console.log(node.valor)
  }

  // function to verify if a value is in the tree
  const check = (node, valor) => {
    if(!node) return
    if(node.valor === valor) return true
    return check(node.izquierda, valor) || check(node.derecha, valor)
  }

  console.log(check(tree, 400))

  console.log("------ PREORDEN ------")
  preorden(tree)

  console.log("------ INORDEN ------")
  inorden(tree)
  
  console.log("------ POSTORDEN ------")
  postorden(tree)

  return (
    <div className='container'>
      <h1>binary tree</h1>
      <Tree data={arbol} />
    </div>
  )
}

export default App
