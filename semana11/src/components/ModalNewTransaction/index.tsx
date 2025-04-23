import { Dialog } from '@mui/material'
import styles from './styles.module.css'

type ModalNewTransactionProps = {
    open: boolean;
    handleClose: (value: boolean) => void
}



export default function ModalNewTransaction({ open, handleClose }: ModalNewTransactionProps) {

    return (
        <Dialog open={open} onClose={handleClose} >
            <h1>MODAL NEW TRANSACTION</h1>
        </Dialog>
    )
}