import React, { useState } from 'react'
import { TreeNode } from './TreeNode'
import './App.css'

export const BinaryTree = ({initialRoot}) => {
  const [tree, setTree] = useState(initialRoot)

  const insertNode = (current, side) => {
    if(!current[side]){
      current[side] = {
        valor: Math.floor(Math.random() * 100),
        izquierda: null, 
        derecha: null
      }
      setTree({...tree})
    }
  }

  return (
    <div className='tree'>
      <TreeNode node={tree} onInsert={insertNode} />
    </div>
  )
}
