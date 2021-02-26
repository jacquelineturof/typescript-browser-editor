import React from 'react'
import { useActions } from '../hooks/use-actions'

import './ActionBar.css'

interface ActionBarProps {
    id: string
}

interface ActionIconProps {
    action(): void,
    icon: string
}

const ActionIcon: React.FC<ActionIconProps> = ({ action, icon }) => {
    return (
        <button 
            className = "button is-primary is-small" 
            onClick = { action }>
            <span className = "icon">
                <i className = { `fas ${ icon }` }/>
            </span>
        </button>
    )
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions()

    return (
        <div className = "action-bar">
            <ActionIcon 
                action = { () => moveCell(id, 'up') } 
                icon = "fa-arrow-up" />
            <ActionIcon 
                action = { () => moveCell(id, 'down') }
                icon = "fa-arrow-down" />
            <ActionIcon 
                action = { () => deleteCell(id) }
                icon = "fas fa-times" />
        </div>
    )
}

export default ActionBar