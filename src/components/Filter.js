import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import DropdownFilter from './DropDownFilter';
import DateFilter from './DateFilter';
import { changeData } from '../store/slices/propertySlices';

const allData = require('../dummyData.json');

function Filter() {
  const dispatch = useDispatch();
  const {
    location, date, price, propertyType,
  } = useSelector((state) => ({
    location: state.property.location,
    date: state.property.date,
    price: state.property.price,
    propertyType: state.property.propertyType,
    data: state.property.data,
  }));

  const handleOnClick = () => {
    let newData = [...allData];
    if (location.value) {
      newData = newData.filter((obj) => location.value === obj.location);
    }

    if (price.value.max && price.value.min) {
      newData = newData.filter((obj) => (
        obj.ratePerMonth >= price.value.min
          && obj.ratePerMonth <= price.value.max
      ));
    }

    if (date.value) {
      newData = newData.filter((obj) => {
        const selectedDate = new Date(date.value).getTime();
        const from = new Date(obj.availableFrom).getTime();
        const to = new Date(obj.availableTill).getTime();

        return selectedDate >= from && selectedDate < to;
      });
    }

    if (propertyType.value) {
      newData = newData.filter((obj) => propertyType.value === obj.propertyType);
    }

    dispatch(changeData(newData));
  };

  return (
    <div className="max-w px-7 py-4 shadow-lg bg-white sticky top-0 shadow-lg z-10">
      <Grid container alignItems="center" justifyContent="space-around">
        <Grid item xs={3}>
          <DropdownFilter options={allData} label="location" type="Location" />
        </Grid>
        <Grid item xs={2}>
          <DateFilter />
        </Grid>
        <Grid item xs={3}>
          <DropdownFilter options={allData} label="Price" type="Price" />
        </Grid>
        <Grid item xs={3}>
          <DropdownFilter
            options={allData}
            label="propertyType"
            type="Property Type"
          />
        </Grid>
        <Grid item xs={1} className="text-center">
          <Button
            variant="contained"
            style={{ backgroundColor: '#6a5acd' }}
            onClick={handleOnClick}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default Filter;
