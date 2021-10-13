const Calendar = ({ data, handleChange }) => {
  return (
    <div>
      <input
        type="date"
        name="date"
        value={data.date}
        onChange={handleChange}
      />
    </div>
  );
};

export default Calendar;
