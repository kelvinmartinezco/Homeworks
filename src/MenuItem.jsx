import { useState } from 'react'

function MenuItem({node, level}) {
    const [childOpen, setChildOpen] = useState(true)
    const hasChildren = node.children && node.children.length > 0

    return (
        <div className="menu-item">
            <div 
                onClick={() => hasChildren && setChildOpen(!childOpen)} 
                className={`menu-link ${hasChildren ? 'expandable' : ''}`}
                style={{ paddingLeft: `${level * 20 + 16}px` }}
            >
                <span className="menu-text">{node.value}</span>
                {hasChildren && (
                    <span className={`arrow ${childOpen ? 'open' : ''}`}>▶</span>
                )}
                {node.link !== "#" && (
                    <span className="link-info">({node.link})</span>
                )}
            </div>
            {childOpen && hasChildren && (
                <div className="submenu">
                    {node.children.map((item, index) => (
                        <MenuItem key={index} node={item} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MenuItem