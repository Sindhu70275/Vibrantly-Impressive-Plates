import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

import { restaurantDetails } from "../../constants/constants"
import CustomButton from "../../common/CustomButton";

const pages = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Menu", href: "#menu" },
    { text: "Events", href: "#events" },
    { text: "Chefs", href: "#chefs" },
    { text: "Gallery", href: "#gallery" },
    { text: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Grid container spacing={4} sx={{ justifyContent: "center", marginBottom: "5rem" }}>
            <Grid item xs={12}>
                <AppBar
                    position="fixed"
                    sx={{
                        width: "100%", paddingX: { md: "5rem" }, display: "flex",
                        justifyContent: "center",
                        backgroundColor: "white",
                        boxShadow: "none",
                        fontSize: "1.25rem",
                        color: "#0d0d0d",
                        height: "80px",
                    }}
                >
                    <Container maxWidth="none">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                    fontFamily: "Poppins",
                                    fontWeight: 700,
                                    letterSpacing: ".1rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                <Tooltip title={restaurantDetails.fullName} arrow>
                                    <span>{restaurantDetails.name}<span style={{ color: restaurantDetails.color }}>.</span></span>
                                </Tooltip>
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                    keepMounted
                                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ display: { xs: "block", md: "none" } }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page.href} onClick={handleCloseNavMenu}>
                                            <a
                                                href={page.href}
                                                style={{ textDecoration: "none", color: "inherit" }}
                                            >
                                                <Typography textAlign="center">{page.text}</Typography>
                                            </a>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: "flex", md: "none" },
                                    flexGrow: 1,
                                    fontFamily: "Poppins",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    letterSpacing: ".1rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                {restaurantDetails.name}
                            </Typography>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
                                    justifyContent: "center",
                                }}
                            >
                                {pages.map((page) => (
                                    <a
                                        key={page.href}
                                        href={page.href}
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        <Button
                                            sx={{
                                                marginRight: '1rem',
                                                textTransform: 'capitalize',
                                                fontSize: '1rem',
                                                border: 'none',
                                                my: 2, color: "inherit", display: "block"
                                            }}
                                        >
                                            {page.text}
                                        </Button>
                                    </a>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0, p: 0 }}>
                                <CustomButton label="Book a Table" variant="Contained" href="#booktable"/>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Grid>
        </Grid>
    );
};

export default Navbar;
