import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteSpot } from "../../store/spots";


function DeleteSpotModal(props) {
    const id = props.props
    const { closeModal } = useModal();
    const dispatch = useDispatch()
    console.log(id)

    const handleDelete = async (e) => {
        dispatch(deleteSpot(id));
        closeModal()
    }

    return (
        <>
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this spot from the lsitings?</p>
            <button className='delete-modal-delete-spot' onClick={handleDelete}>Yes (Delete Spot)</button>
            <button className='delete-modal-keep-spot' onClick={closeModal}k>No (Keep Spot)</button>


        </>
    )
}

export default DeleteSpotModal
