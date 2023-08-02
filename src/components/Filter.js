import DropdownFilter from "./DropDownFilter";
import DateFilter from "./DateFilter";
import Button from "@mui/material/Button";

const json = require("../dummyData.json");

function Filter() {
  return (
    <div className="pr-5 pl-5 pt-5">
      <div>Filter</div>
      <div class="max-w mt-4 rounded overflow-hidden shadow-lg bg-white ">
        <div class="px-6 py-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <DropdownFilter options={json} label="location" />
            <DateFilter />
            <DropdownFilter options={json} label="Price" />
            <DropdownFilter options={json} label="propertyType" />
            <div className="flex flex-col justify-center items-center">
              <Button variant="contained" color="secondary">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
