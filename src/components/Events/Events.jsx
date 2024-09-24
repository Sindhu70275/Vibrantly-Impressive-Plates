import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SvgIcon from "@mui/material/SvgIcon";
import { autoPlay } from 'react-swipeable-views-utils';

import { events, restaurantDetails } from '../../constants/constants';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Events = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = events.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Stack
            sx={{
                flexDirection: { xs: "column", md: "row" },
                padding: { xs: "1rem", md: "6rem" },
            }}
        >
            <Grid container spacing={2}
                sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Grid item xs={12}> <Typography component="div" sx={{
                    fontSize: { xs: "1.6rem", md: "3rem" },
                    fontWeight: "700",
                    fontFamily: "'Playfair Display', serif",
                    textAlign: "center",
                }}>
                    Explore{" "}<span style={{
                        color: restaurantDetails.themeColor,
                    }}>Events</span>
                </Typography></Grid>
                <Grid item xs={12} md={7}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {events.map((step, index) => (
                            <div key={step.title}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: { xs: "200px", sm: "450px" },
                                            display: 'block',
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={step.imageUrl}
                                        alt={step.title}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews></Grid>
                <Grid item xs={12} md={5}><Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>{events[activeStep].title}</Typography>
                    <Typography sx={{ marginY: "0.5rem", fontSize: "1.1rem", fontWeight: "500", color: restaurantDetails.themeColor }}>{events[activeStep].price}</Typography>
                    <Stack sx={{ flexDirection: "column" }}>{events[activeStep].description.map((content, index) => (
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
                    ))}</Stack>
                </Paper></Grid>
                <Grid item
                    xs={12}
                    sx={{ flexDirection: "column" }}>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{
                            '& .MuiMobileStepper-dotActive': {
                                backgroundColor: `${restaurantDetails.themeColor} !important`,
                            },
                            '& .MuiButton-root': {
                                color: `${restaurantDetails.themeColor} !important`
                            },
                            '& .MuiButton-root.Mui-disabled': {
                                color: 'grey !important',
                            },
                        }}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Grid>
            </Grid>
        </Stack>
    );
}

export default Events;
