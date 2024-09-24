import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { contactDetails, restaurantDetails } from "../../constants/constants";

const Contact = () => {

    const getIcon = (type) => {
        const iconStyles = {
            fontSize: "2rem",
            color: "white",
            borderRadius: "50%",
            padding: "0.7rem",
            backgroundColor: restaurantDetails.themeColor,
            border: "2px solid white",
            marginX: "1.5rem",
        };

        switch (type) {
            case "Address":
                return <LocationOnOutlinedIcon sx={iconStyles} />;
            case "Phone":
                return <PhoneOutlinedIcon sx={iconStyles} />;
            case "Email":
                return <EmailOutlinedIcon sx={iconStyles} />;
            case "Opening Hours":
                return <AccessTimeOutlinedIcon sx={iconStyles} />;
            default:
                return null;
        }
    };

    return (
        <Grid container spacing={4} sx={{ padding: { xs: "1rem", md: "6rem" } }}>
            <Grid item xs={12}>
                <Typography component="div" sx={{
                    fontSize: { xs: "1.6rem", md: "3rem" },
                    fontWeight: "700",
                    fontFamily: "'Playfair Display', serif",
                    textAlign: "center",
                }}>
                    Need Help?{" "}
                    <span style={{ color: restaurantDetails.themeColor }}>
                        Contact Us
                    </span>
                </Typography>
            </Grid>
            {contactDetails.map((detail, index) => (
                <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
                <Card sx={{ display: 'flex', alignItems: "center", flexGrow: 1, overflow: 'hidden' }}>
                    {getIcon(detail.type)}
                    <CardContent sx={{ flex: 1 }}>
                        <Typography
                            sx={{
                                fontFamily: "'Playfair Display', serif",
                                marginBottom: '0.5rem',
                                fontWeight: "bolder",
                                fontSize: "1.5rem",
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: 'block',
                            }}
                        >
                            {detail.type}
                        </Typography>
                        <Typography variant="body1" sx={{
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word',
                            maxWidth: '300px',
                        }}>
                            {detail.value}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
            ))}
        </Grid>
    );
};

export default Contact;
