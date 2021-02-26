import './AddCell.css'
import { useActions } from '../hooks/use-actions'

interface AddCellProps {
    nextCellId: string
}

const AddCell: React.FC <AddCellProps> = ({ nextCellId }) => {
    const { insertCellBefore } = useActions()

    return (
        <div>
            <button onClick = { () => insertCellBefore(nextCellId, 'code') }>
                Code
            </button>
            <button onClick = { () => insertCellBefore(nextCellId, 'text') }>
                Test
            </button>
        </div>
    )
}

export default AddCell