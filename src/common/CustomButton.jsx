import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { restaurantDetails } from "../constants/constants";

const CustomButton = ({ label, variant, onClick, href, target, width, type }) => {

    const { themeColor } = restaurantDetails;

    return (
        <Button
            sx={{
                backgroundColor: variant === "Contained" ? themeColor : "#f0f0f0",
                color: variant === "Contained" ? "white" : themeColor,
                border: variant === "Contained" ? "none" : `2px solid ${themeColor}`,
                borderRadius: "3rem",
                padding: "0.5rem 1rem",
                "&.MuiButtonBase-root:hover": {
                    backgroundColor: variant === "Contained" ? themeColor : "",
                    color: variant === "Contained" ? "white" : themeColor,
                    border: variant === "Contained" ? "none" : `2px solid ${themeColor}`,
                },
                width: { width },
            }}
            onClick={onClick}
            target={target}
            href={href}
            type={type}
        >
            <Typography sx={{ textTransform: "none" }}>{label}</Typography>
        </Button>
    );
};

export default CustomButton;
