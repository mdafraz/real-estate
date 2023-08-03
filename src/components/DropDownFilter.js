import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import {
  changeLocation,
  changePropertyType,
  changePrice,
} from '../store/slices/propertySlices';

function DropDownFilter({ options, label, type }) {
  const dispatch = useDispatch();

  const handleonChange = (_, v) => {
    switch (label) {
      case 'location':
        dispatch(changeLocation(v?.location));
        break;
      case 'Price':
        dispatch(changePrice({ min: v?.min, max: v?.max }));
        break;
      case 'propertyType':
        dispatch(changePropertyType(v?.propertyType));
        break;
      default:
        console.log('error');
    }
  };

  const priceRange = [
    { Price: '$500 - $2500', min: 500, max: 2500 },
    { Price: '$2500 - $5000', min: 2500, max: 5000 },
    { Price: '$5000 - $7500', min: 5000, max: 7500 },
    { Price: '$7500 - $10000', min: 7500, max: 10000 },
  ];

  const propertyTypes = [
    { propertyType: 'House' },
    { propertyType: 'Apartment' },
    { propertyType: 'Townhouse' },
    { propertyType: 'Villa' },
    { propertyType: 'Condo' },
  ];

  if (label === 'Price') {
    options = priceRange;
  } else if (label === 'propertyType') {
    options = propertyTypes;
  }

  return (
    <div className="flex flex-col p-2">
      <Autocomplete
        disablePortal
        onChange={handleonChange}
        options={options}
        getOptionLabel={(op) => op[label]}
        renderInput={(params) => <TextField label={type} {...params} />}
      />
    </div>
  );
}
export default DropDownFilter;

// rounded-xl shadow-lg
