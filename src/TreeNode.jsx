import './App.css'

export const TreeNode = ({node, onInsert}) => {
  
  
  if(!node) return null
  
  return (
    <div className='node-container'>
      <div className='node'>
        {node.valor}
        <div>
          <button onClick={() => onInsert(node, 'izquierda')}>left</button>
          <button onClick={() => onInsert(node, 'derecha')}>right</button>
        </div>
      </div>
      <div className='children'>
        <TreeNode node={node.izquierda} onInsert={onInsert} />
        <TreeNode node={node.derecha} onInsert={onInsert} />
      </div>
    </div>
  )
}
