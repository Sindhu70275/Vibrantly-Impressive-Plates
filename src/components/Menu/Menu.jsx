import { useState } from "react";
import MenuBar from "./MenuBar";
import MenuItem from "./MenuItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { menuItems, restaurantDetails } from "../../constants/constants";

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('Starters');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const categories = menuItems.map(category => category.category);

    return (
        <Grid sx={{ padding: { xs: "1rem", md: "6rem" }, }}>
            <Typography component="div" sx={{
                fontSize: { xs: "1.6rem", md: "3rem" },
                fontWeight: "700",
                fontFamily: "'Playfair Display', serif",
                textAlign: "center",
            }}>
                Check Our{" "}<span style={{
                    color: restaurantDetails.themeColor,
                }}>Tasty Menu</span>
            </Typography>
            <MenuBar categories={categories} onCategoryClick={handleCategoryClick} />
            <MenuItem selectedCategory={selectedCategory} />
        </Grid>
    );
};

export default Menu;