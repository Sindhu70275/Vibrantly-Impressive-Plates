import { Grid, Typography, Box } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { restaurantDetails } from "../../constants/constants";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#333", color: "white", padding: { xs: "1rem", md: "2rem 6rem" } }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                        Address
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <LocationOnOutlinedIcon sx={{ marginRight: "0.5rem" }} />
                        <Typography>{restaurantDetails.address.street}</Typography>
                    </Box>
                    <Typography>{restaurantDetails.address.city}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                        Contact
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <PhoneOutlinedIcon sx={{ marginRight: "0.5rem" }} />
                        <Typography>{restaurantDetails.contact.phone}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <EmailOutlinedIcon sx={{ marginRight: "0.5rem" }} />
                        <Typography>{restaurantDetails.contact.email}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                        Opening Hours
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <AccessTimeOutlinedIcon sx={{ marginRight: "0.5rem" }} />
                        <Typography>{restaurantDetails.hours.mondayToSaturday}</Typography>
                    </Box>
                    <Typography>Sunday: Closed</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                        Follow Us
                    </Typography>
                    <Box sx={{ display: "flex", gap: "1rem" }}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
