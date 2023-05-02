import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Container} from "@mui/material";
import {makeStyles} from "@mui/styles";
import logo from "./logoReact.png";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const useStyles = makeStyles({
    logoStyle: {
        position: 'absolute',
        width: '4%',
        marginTop: '2.5rem'
    },
});
const handleResume = () => {
    window.open("https://drive.google.com/file/d/1vnCjFS5gLChSJB38nhDchxf88IEhxjqf/view?usp=sharing");
}

export default function NavBar() {
    const classes = useStyles()
    return (
        <Box sx={{flexGrow: 1, position: 'sticky', top: 0}}>
            <AppBar sx={{background: '#131312'}} position="static" elevation={0}>
                <Container component="main" maxWidth="xl">
                    <Toolbar disableGutters>
                        <img alt="React logo" src={logo} className={classes.logoStyle} draggable="false"/>
                        <Box sx={{flexGrow: 0, marginLeft: 'auto', marginTop: '2.5rem',display:'flex'}}>
                            <Link to="/">
                                <motion.button whileHover={{scale: 1.2, transformOrigin: "center"}}
                                               whileTap={{scale: 0.9, transformOrigin: "center"}}
                                               style={{
                                                   fontFamily: 'Raleway, sans-serif',
                                                   backgroundColor: 'transparent',
                                                   color: 'white',
                                                   fontSize: '1rem',
                                                   padding: '10px 20px',
                                                   border: 'none',
                                                   fontWeight:'bold'

                                               }}
                                >
                                        HOME
                                </motion.button>
                            </Link>
                            <Link to="/projects">
                                <motion.button whileHover={{scale: 1.2, transformOrigin: "center"}}
                                               whileTap={{scale: 0.9, transformOrigin: "center"}}
                                               style={{
                                                   fontFamily: 'Raleway, sans-serif',
                                                   backgroundColor: 'transparent',
                                                   color: 'white',
                                                   fontSize: '1rem',
                                                   padding: '10px 20px',
                                                   border: 'none',
                                                   fontWeight:'bold'
                                               }}
                                >
                                    PROJECTS
                                </motion.button>
                            </Link>
                            <Link to="/about">
                                <motion.button whileHover={{scale: 1.2, transformOrigin: "center"}}
                                               whileTap={{scale: 0.9, transformOrigin: "center"}}
                                               style={{
                                                   fontFamily: 'Raleway, sans-serif',
                                                   backgroundColor: 'transparent',
                                                   color: 'white',
                                                   fontSize: '1rem',
                                                   padding: '10px 20px',
                                                   border: 'none',
                                                   fontWeight:'bold'
                                               }}
                                >
                                    ABOUT
                                </motion.button>
                            </Link>
                            <Link to="/contact">
                                <motion.button whileHover={{scale: 1.2, transformOrigin: "center"}}
                                               whileTap={{scale: 0.9, transformOrigin: "center"}}
                                               style={{
                                                   fontFamily: 'Raleway, sans-serif',
                                                   backgroundColor: 'transparent',
                                                   color: 'white',
                                                   fontSize: '1rem',
                                                   padding: '10px 20px',
                                                   border: 'none',
                                                   fontWeight:'bold'
                                               }}
                                >
                                    CONTACT
                                </motion.button>
                            </Link>
                            <motion.button whileHover={{scale: 1.2, transformOrigin: "center"}}
                                           whileTap={{scale: 0.9, transformOrigin: "center"}}
                                           style={{
                                               fontFamily: 'Raleway, sans-serif',
                                               backgroundColor: 'initial',
                                               border: '2px solid',
                                               borderColor: 'white',
                                               color: "white",
                                               letterSpacing: '2px',
                                               width: '150px',
                                               display: 'block',
                                               marginLeft:'100px',
                                               fontWeight:'bold',
                                               fontSize: '1rem',
                                           }}
                                           onClick={handleResume}
                            >
                                RESUME
                            </motion.button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}