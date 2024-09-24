import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

import { restaurantDetails } from "../../constants/constants";
import CustomButton from "../../common/CustomButton";

const Home = () => {
    return (
        <Grid
            container
            spacing={6}
            sx={{
                flexDirection: { xs: "column-reverse", md: "row" },
                backgroundColor: "#f0f0f0",
                padding: { xs: "1rem", md: "2rem 6rem" },
            }}
        >
            <Grid item xs={12} md={7} sx={{ alignContent: "center" }}>
                <Stack>
                    <CardContent>
                        <Typography component="div" sx={{
                            fontSize: "3.5rem",
                            fontWeight: "700",
                            fontFamily: "'Playfair Display', serif",
                            marginTop:"0.5rem"
                        }}>
                            Welcome to{" "}<span style={{
                                color: restaurantDetails.themeColor,
                            }}>{restaurantDetails.name}</span>
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "2rem", fontWeight: "900", marginY: "0.3rem", fontFamily: "'Parisienne', cursive"

                        }}>
                            {restaurantDetails.fullName}
                        </Typography>
                        <Typography sx={{ fontSize: "1.2rem", fontFamily: "'Poppins', sans-serif" }}>Delivering great food for more than 5 years! Enjoy your healthy delicious food.</Typography>
                    </CardContent>
                </Stack>
                <CardActions>
                    <CustomButton
                        label="Our Menu"
                        variant="Contained"
                        href={"#menu"}
                    />
                    <CustomButton
                        label="Watch Video"
                        variant="Outlined"
                        target="display"
                        href={""}
                    />
                </CardActions>
            </Grid>
            <Grid
                item
                xs={12}
                md={5}
                sx={{ marginTop: "4rem" }}
            >
                <CardMedia
                    component="img"
                    image="https://www.ishqveg.com/assets/img/ishq-head-main.png"
                    alt="vip-img"
                    sx={{
                        "@keyframes moveUpDown": {
                            "0%": { transform: "translateY(0)" },
                            "100%": { transform: "translateY(-20px)" },
                        },
                        animation: "moveUpDown 2s ease-in-out infinite alternate-reverse both",
                        height: "auto",
                        maxWidth: "100%",
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Home;