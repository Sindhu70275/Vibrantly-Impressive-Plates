import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled } from '@mui/system';
import { CardActionArea, IconButton } from '@mui/material';

import { gallery, restaurantDetails } from "../../constants/constants";

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

const Gallery = () => {
    return (
        <Grid
            container
            sx={{
                flexDirection: { xs: "column", md: "row" },
                paddingY: { xs: "1rem", md: "4rem" },
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
                    Check{" "}
                    <span
                        style={{
                            color: restaurantDetails.themeColor,
                        }}
                    >
                        Our Gallery
                    </span>
                </Typography>
            </Grid>
            {gallery.map((gallery) => (
                <Grid item xs={12} md={4} lg={3} key={gallery.label}>
                    <PopCard sx={{ maxHeight: 700 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                maxheight="400"
                                image={gallery.imgUrl}
                                alt={gallery.label}
                                className="cardMedia"
                            />
                        </CardActionArea>
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

export default Gallery;
