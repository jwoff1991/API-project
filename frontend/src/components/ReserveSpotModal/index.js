import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./reservespot.css";
import { createReservation } from "../../store/bookings";

function ReserveSpotModal(props) {
  const spotId = props.props[0];
  const bookedDates = props.props[1].Bookings

  const { closeModal } = useModal();
  const dispatch = useDispatch()
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const confirmedDates = dates["0"];

  //converts dates to disabled dates
  function convertToDisabledDates(inputArray) {
    inputArray.map(item => {
        item.startDate = new Date(item.startDate)
        item.endDate = new Date(item.endDate)
        item.key = item.spotId
      });
    return inputArray
  }
  convertToDisabledDates(bookedDates)
  
  //converts date to yyyy-mm-dd format
  const convertDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Month is 0-based, so we add 1
    const day = dateObject.getDate();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${year}-${formattedMonth}-${formattedDay}`;
};

const startDate = convertDate(confirmedDates.startDate)
const endDate = convertDate(confirmedDates.endDate)

  const handleSubmit = (e) => {
    let bookingDates = { startDate, endDate, spotId}
    dispatch(createReservation(bookingDates))
    closeModal()
  };

  return (
    <>
      <div className="reserve-date-modal">
        <div className="reserve-dates-title">
          Pick the dates for your royal vacation
        </div>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDates([item.selection])}
          minDate={addDays(new Date(), 0)}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          disabledDates={bookedDates}
        />
        <div className="confirm-cancel-buttons">
          <button
            className="reserve-spot-confirm-button"
            onClick={handleSubmit}
          >
            Confirm
          </button>
          <button className="reserve-spot-cancel-button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default ReserveSpotModal;
