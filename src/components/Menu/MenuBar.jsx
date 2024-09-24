import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useState } from "react";
import { restaurantDetails } from "../../constants/constants";

const MenuBar = ({ categories, onCategoryClick }) => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        onCategoryClick(category);
    };

    return (
        <AppBar position="static" sx={{ marginY: '1.5rem', backgroundColor: "#ffffff", boxShadow: "none", color: "#0D0D0D" }}>
            <Toolbar sx={{ justifyContent: "center" }}>
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        color="inherit"
                        sx={{
                            marginRight: { xs: '0.5rem', sm: '1rem', md: '1rem' },
                            textTransform: 'capitalize',
                            fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' },
                            fontWeight: activeCategory === category ? 'bold' : 'normal',
                            borderBottom: activeCategory === category ? `2px solid ${restaurantDetails.themeColor}` : 'none',
                            '&:hover': {
                                color: restaurantDetails.themeColor,
                            },
                            textWrap: "nowrap"
                        }}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </Button>
                ))}
            </Toolbar>
        </AppBar >
    );
};

export default MenuBar;
