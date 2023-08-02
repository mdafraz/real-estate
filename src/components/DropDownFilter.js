import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function DropDownFilter({ options, label }) {
  const priceRange = [
    { Price: "$500 - $2500" },
    { Price: "$2500 - $5000" },
    { Price: "$5000 - $7500" },
    { Price: "$7500 - $10000" },
  ];
  const propertyTypes = [
    { propertyType: "House" },
    { propertyType: "Apartment" },
    { propertyType: "Townhouse" },
    { propertyType: "Villa" },
    { propertyType: "Condo" },
  ];
  if (label === "Price") {
    options = priceRange;
  } else if (label === "propertyType") {
    options = propertyTypes;
  }
  return (
    <div className="flex flex-col bg-white p-2 ">
      <label className="p-1">{label}</label>
      <Autocomplete
        disablePortal
        options={options}
        getOptionLabel={(op) => op[label]}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}
export default DropDownFilter;

// rounded-xl shadow-lg
