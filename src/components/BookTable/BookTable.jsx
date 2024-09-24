import  { useState, forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import {
  TextField,
  MenuItem,
  Typography,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import { restaurantDetails } from '../../constants/constants';
import CustomButton from '../../common/CustomButton';

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    numberOfPeople: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
        <Grid
            container
            sx={{
              flexDirection: { xs: "column", md: "row" },
              padding: { xs: "1rem", md: "6rem" },
          }}
        >
      <Grid item xs={12}>
                <Typography
                    component="div"
                    sx={{
                        fontSize: { xs: "1.6rem", md: "3rem" },
                        fontWeight: "700",
                        fontFamily: "'Playfair Display', serif",
                        textAlign: "center",
                        paddingBottom: "1rem",
                    }}
                >
                    Book Your{" "}
                    <span
                        style={{
                            color: restaurantDetails.themeColor,
                        }}
                    >
                        Stay With Us
                    </span>
                </Typography>
            </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Number of People"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
                label="Book a Table"
                variant="Contained"
                type="submit"
            />
          </Grid>
        </Grid>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Table booked successfully!
        </Alert>
      </Snackbar>
  </Grid>
  );
};

export default BookTable;
