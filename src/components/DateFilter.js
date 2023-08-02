import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DateFilter() {
  return (
    <div className="flex flex-col bg-white p-2 ">
      <label className="p-1">When</label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Select Move-in Date" />
      </LocalizationProvider>
    </div>
  );
}
export default DateFilter;
