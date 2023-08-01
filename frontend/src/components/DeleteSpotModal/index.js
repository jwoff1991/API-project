import { useModal } from "../../context/Modal";



function DeleteSpotModal(id) {
    const { closeModal } = useModal();
    return (
        <>
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to remove this spot from the lsitings?</p>
            <button>Yes (Delete Spot)</button>
            <button>No (Keep Spot)</button>


        </>
    )
}

export default DeleteSpotModal
