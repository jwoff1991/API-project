import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteBooking } from "../../store/bookings";
import './bookingdelete.css'



function DeleteBookingModal(props) {
    const id = props.props
    const { closeModal } = useModal();
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        dispatch(deleteBooking(id));
        closeModal()
    }

    return (
        <div className="confirm-delete-modal">
            <h1 className="confirm-delete-modal-heading">Confirm Delete</h1>
            <p className="confirm-delete-modal-text">Are you sure you want to remove this spot from the listings?</p>
            <button className='delete-modal-delete-spot' onClick={handleDelete}>Yes (Delete Booking)</button>
            <button className='delete-modal-keep-spot' onClick={closeModal}>No (Keep Booking)</button>


        </div>
    )
}

export default DeleteBookingModal
