import {
  Box, Card, CardContent, Chip, Grid, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { MdOutlineBed, MdBathroom } from 'react-icons/md';
import Divider from '@mui/material/Divider';

function PropertyList() {
  const data = useSelector((state) => state.property.data);

  const renderCard = data.map((obj) => (
    <Grid item xs={3} className="pb-0">
      <Card>
        <Box
          className="relative card-img"
          sx={{
            backgroundImage: `url(${obj.img})`,
          }}
        >
          <Typography
            className="absolute bottom-0 right-0 px-1"
            variant="caption"
            letterSpacing={1.25}
            color="InfoBackground"
          >
            {obj.streetName}
          </Typography>
        </Box>

        <CardContent sx={{ '&:last-child': { pb: 1 } }}>
          <Box className="relative">
            <Chip
              className="absolute right-0"
              style={{ backgroundColor: '#6a5acd', color: 'white' }}
              label={obj.propertyType}
            />
            <Typography
              display="inline"
              fontWeight="bold"
              variant="h5"
              style={{ color: '#6a5acd' }}
            >
              $
              {obj.ratePerMonth}
            </Typography>
            <Typography
              display="inline"
              color="GrayText"
              fontSize={14}
              fontWeight={400}
            >
              /month
            </Typography>
          </Box>

          <Typography mt={1} fontWeight="bold" variant="h6">
            {obj.name}
          </Typography>
          <Typography variant="body2" color="GrayText">
            {`${dayjs(obj.availableFrom).format('DD MMM YYYY')} - ${dayjs(
              obj.availableTill,
            ).format('DD MMM YYYY')}`}
          </Typography>

          <Divider className="pt-3 " variant="fullWidth" />

          <Grid container className="pt-2 gap-y-0">
            <Grid item xs={4}>
              <Chip
                sx={{
                  '& .MuiChip-icon': {
                    fontSize: '20px',
                  },
                  color: 'GrayText',
                  backgroundColor: 'white',
                }}
                icon={<MdOutlineBed style={{ color: '#6a5acd' }} />}
                label={`${obj.beds} Beds`}
              />
            </Grid>

            <Grid item xs={8}>
              <Chip
                sx={{
                  '& .MuiChip-icon': {
                    fontSize: '20px',
                  },
                  backgroundColor: 'white',
                  color: 'GrayText',
                }}
                icon={<MdBathroom style={{ color: '#6a5acd' }} />}
                label={`${obj.bathRooms} Bathrooms`}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={4}>
      {renderCard}
    </Grid>
  );
}

export default PropertyList;
