import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from '@mui/system';
import { CardActionArea, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { chefs, restaurantDetails } from "../../constants/constants";

const PopCard = styled(CardMedia)(({ theme }) => ({
    height: 'auto',
    maxWidth: '100%',
    position: 'relative',
    overflow: 'hidden',
    '&:hover .speedDialActions': {
        opacity: 1,
        visibility: 'visible',
    },
    transform: 'scale(0.9)',
    '&:hover': {
        transform: 'scale(1)',
    },
}));

const Chefs = () => {
    return (
        <Grid
            container
            spacing={2}
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
                    }}
                >
                    Our{" "}
                    <span
                        style={{
                            color: restaurantDetails.themeColor,
                        }}
                    >
                        Professional Chefs
                    </span>
                </Typography>
            </Grid>

            {chefs.map((chef) => (
                <Grid item xs={12} md={4} key={chef.name}>
                    <PopCard sx={{ maxHeight: 700 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="470"
                                image={chef.imageUrl}
                                alt={chef.name}
                                className="cardMedia"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {chef.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {chef.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Stack
                            direction="column"
                            spacing={1}
                            className="speedDialActions"
                            sx={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                opacity: 0,
                                visibility: "hidden",
                                transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                                zIndex: 1,
                                backgroundColor: "rgba(255, 255, 255, 0.8)",
                                padding: "5px",
                                borderRadius: "8px",
                            }}
                        >
                            <IconButton
                                aria-label="Facebook"
                                href={chef.fbHandle}
                                sx={{ color: restaurantDetails.themeColor }}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Twitter"
                                href={chef.twitterHandle}
                                sx={{ color: restaurantDetails.themeColor }}
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Instagram"
                                href={chef.instaHandle}
                                sx={{ color: restaurantDetails.themeColor }}
                            >
                                <InstagramIcon />
                            </IconButton>
                        </Stack>
                    </PopCard>
                </Grid>
            ))}
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

export default Chefs;
