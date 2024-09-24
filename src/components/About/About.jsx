import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SvgIcon from "@mui/material/SvgIcon";
import { styled } from '@mui/system';

import { aboutContent, restaurantDetails } from "../../constants/constants";

const PopImage = styled(CardMedia)(({ theme }) => ({
    height: 'auto',
    maxWidth: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        animation: 'pop 0.5s ease-in-out'
    }
}));

const About = () => {
    return (
        <Grid
            container
            spacing={6}
            sx={{
                flexDirection: { xs: "column", md: "row" },
                padding: { xs: "1rem", md: "6rem" },
            }}
        >
            <Grid item xs={12}> <Typography component="div" sx={{
                fontSize: { xs: "1.6rem", md: "3rem" },
                fontWeight: "700",
                fontFamily: "'Playfair Display', serif",
                textAlign: "center",
            }}>
                Learn More{" "}<span style={{
                    color: restaurantDetails.themeColor,
                }}>About Us</span>
            </Typography></Grid>
            <Grid
                item
                xs={12}
                md={7}
            >
                <PopImage
                    component="img"
                    image="https://www1.lovethatdesign.com/wp-content/uploads/2022/05/Love-That-Design-Cala-Restaurant-Scottsdale-01-863x576.jpg"
                    alt="about-img"
                />
            </Grid>
            <Grid item xs={12} md={5} sx={{ alignContent: "center" }}>
                <Stack>
                    <CardContent>
                        {aboutContent.map((content, index) => (
                            <Stack key={index} sx={{ marginBottom: "1rem" }}>
                                <Typography component="div" sx={{
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <SvgIcon sx={{ color: restaurantDetails.themeColor, marginRight: "0.5rem" }}>
                                        <DoneAllIcon />
                                    </SvgIcon>
                                    {content}
                                </Typography>
                            </Stack>
                        ))}
                    </CardContent>
                </Stack>
            </Grid>
            <style>{`
                @keyframes pop {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
            `}</style>
        </Grid>
    );
};

export default About;
