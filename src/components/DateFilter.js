import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { changeDate } from "../store/slices/propertySlices";

function DateFilter() {
  const dispatch = useDispatch();
  const handleOnChange = (val) => {
    dispatch(changeDate(new Date(val.valueOf())));
  };

  return (
    <div className="flex flex-col p-2">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker onChange={handleOnChange} label="Move-in Date" />
      </LocalizationProvider>
    </div>
  );
}
export default DateFilter;
