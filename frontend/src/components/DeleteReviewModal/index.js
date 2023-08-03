import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteReview } from "../../store/reviews";


function DeleteReviewModal(props) {
    const id = props.props
    const { closeModal } = useModal();
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        dispatch(deleteReview(id));
        closeModal()
    }

    return (
        <>
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this Review from the listings?</p>
            <button className='delete-modal-delete-Review' onClick={handleDelete}>Yes (Delete Review)</button>
            <button className='delete-modal-keep-Review' onClick={closeModal}>No (Keep Review)</button>


        </>
    )
}

export default DeleteReviewModal
