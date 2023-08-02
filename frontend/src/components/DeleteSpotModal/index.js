import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteSpot } from "../../store/spots";


function DeleteSpotModal(props) {
    const id = props.props
    const { closeModal } = useModal();
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        dispatch(deleteSpot(id));
        closeModal()
    }

    return (
        <>
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this spot from the listings?</p>
            <button className='delete-modal-delete-spot' onClick={handleDelete}>Yes (Delete Spot)</button>
            <button className='delete-modal-keep-spot' onClick={closeModal}>No (Keep Spot)</button>


        </>
    )
}

export default DeleteSpotModal
