import Stack from "@mui/material/Stack";

import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Events from "../Events/Events";
import Chefs from "../Chefs/Chefs";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import BookTable from "../BookTable/BookTable";

const Vip = () => {

    return (
        <Stack>
            <Navbar />
            <Stack id="home">
                <Home />
            </Stack>
            <Stack id="about">
                <About />
            </Stack>
            <Stack id="menu">
                <Menu />
            </Stack>
            <Stack id="events">
                <Events />
            </Stack>
            <Stack id="chefs">
                <Chefs />
            </Stack>
            <Stack id="gallery">
                <Gallery />
            </Stack>
            <Stack id="contact">
                <Contact />
            </Stack>
            <Stack id="booktable">
                <BookTable />
            </Stack>
            <Footer />
        </Stack>
    );
};

export default Vip;