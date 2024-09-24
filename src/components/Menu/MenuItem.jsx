import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState, useEffect } from "react";
import { menuItems } from "../../constants/constants";

const MenuItem = ({ selectedCategory }) => {
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        const data = menuItems.find(category => category.category === selectedCategory);
        setCategoryData(data);
    }, [selectedCategory]);

    if (!categoryData) return null;

    return (
        <Grid container spacing={2}>
            {categoryData.dishes.map((dish, index) => (
                <Grid
                    item
                    xs={12}
                    md={6}
                    key={index}
                    sx={{
                        transition: 'transform 0.5s ease, opacity 0.5s ease',
                        opacity: categoryData ? 1 : 0,
                        transform: categoryData ? 'translateY(0)' : 'translateY(-20px)',
                        '&:hover': {
                            transform: 'scale(1.05)'
                        }
                    }}
                >
                    <Card sx={{ display: 'flex', boxShadow: "none", alignItems: "center" }}>
                        <CardMedia
                            component="img"
                            height="75"
                            image={dish.imageUrl}
                            alt={dish.name}
                            sx={{ width: "75px", borderRadius: "10rem" }}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontFamily: "'Playfair Display', serif",
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                {dish.name}
                                <Typography
                                    sx={{
                                        flexGrow: 1,
                                        textAlign: 'right',
                                        marginLeft: '1rem',
                                        fontFamily: "'Playfair Display', serif", 
                                        fontSize: "1.25rem"
                                    }}
                                >
                                    ₹{dish.price}
                                </Typography>
                            </Typography>
                            <Typography variant="body1" color="#6c757d" sx={{ fontStyle: "italic" }}>
                                {dish.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default MenuItem;
