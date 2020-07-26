import { Modal } from 'antd';
import AddForm from './AddForm';

export default ({ visible, setVisible, onSubmit }) => {
    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Modal
                title="Add Asset"
                visible={visible}
                onCancel={handleCancel}
                footer = {null}
            >
                <AddForm onSubmit = {onSubmit} setVisible = {setVisible}/>
            </Modal>
        </>
    )
}