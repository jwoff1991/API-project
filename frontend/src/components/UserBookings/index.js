import { useDispatch, useSelector } from "react-redux";
import { getUserBookings } from "../../store/bookings";
import { useEffect } from "react";
import DeleteBookingModal from "../UserBookingsDeleteModal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import "./userBookings.css";
import EditReservationModal from "../EditReservationModal";

function UserBookings() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.userBookings);

  let bookingList = Object.values(bookings);

  useEffect(() => {
    dispatch(getUserBookings());
  }, [dispatch]);
  if (!bookingList[0]) {
    return (
      <div>
        <h1>You current do not have any bookings </h1>
      </div>
    );
  }

  const convertDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <h1>USER BOOKINGS</h1>
      <div className="all-user-bookings-container">
        <div className="user-booking-container">
          {bookingList.map(({ Spot, startDate, endDate, id }) => (
            <div key={id}>
              <div className="booking-spot-image-container">
                <img
                  src={
                    Spot.previewImage ||
                    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                  alt="house you may want to rent"
                />
              </div>
              <div className="booking-name-date-buttons">
                <div className="booking-spot-name">{Spot.name}</div>
                <div className="bookings-start-end-dates">
                  <div className="booking-start-date">
                    Start date: {convertDate(startDate)}
                  </div>
                  <div className="booking-end-date">
                    End Date: {convertDate(endDate)}
                  </div>
                </div>
                <div className="booking-update-delete-buttons">
                  <button>                    <OpenModalMenuItem
                      itemText="Update"
                      modalComponent={<EditReservationModal props={id} />}
                    /></button>
                  <button>
                    {" "}
                    <OpenModalMenuItem
                      itemText="Delete"
                      modalComponent={<DeleteBookingModal props={id} />}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserBookings;
