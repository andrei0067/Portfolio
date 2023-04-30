import * as React from 'react';
import Typography from "@mui/material/Typography";
import NavBar from "../../components/NavBar";
import Box from "@mui/material/Box";
import {makeStyles} from "@mui/styles";
import {Button, Container, Divider} from "@mui/material";
import {motion} from "framer-motion";
import {RemoveScrollBar} from "react-remove-scroll-bar";

const useStyles = makeStyles({
    getintouchStyle: {
        fontSize: '3em !important',
        color: 'white !important',
        fontWeight: 'normal !important',
        letterSpacing: '1px !important',
        fontFamily: 'Raleway, sans-serif',
        marginTop: '110px',
        display: 'flex',
        justifyContent: 'center'
    },
    pStyle: {
        fontSize: '16px',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: 'white !important',
        fontFamily: 'Raleway, sans-serif',
        letterSpacing: '1px',
        marginLeft:'5px',
        textAlign:'center'
    },
});

const handleWhatsapp = () => {
    window.open("https://api.whatsapp.com/send/?phone=%2B40745222593&text&type=phone_number&app_absent=0");
}
export default function Contact() {
    const classes = useStyles()
    return (
        <>
            <NavBar/>
            <Box>
                <Container component="main" maxWidth="sm">
                        <h2 className={classes.getintouchStyle}>
                            Get In Touch
                        </h2>
                    <p className={classes.pStyle}>
                        I am actively seeking a front-end developer position and am open to any available opportunities.
                        If you have any
                        <br/>
                        queries or would like to get in touch, please feel
                        <br/>
                        free to contact me via my inbox,
                        and I will
                        <br/>
                        reply at my earliest convenience.
                    </p>
                    <motion.div
                        initial={{x: 1200}}
                        animate={{x: 0}}
                        transition={{type: "spring", bounce: 0.4, duration: 5}}
                    >
                        <Button sx={{
                            fontFamily: 'Raleway, sans-serif',
                            backgroundColor: 'initial',
                            border: '2px solid',
                            borderColor: 'white',
                            color: "white",
                            height: '50px',
                            letterSpacing: '2px',
                            width: '150px',
                            display: 'block',
                            margin: 'auto',
                            marginTop: '50px',
                        }}
                                onClick={handleWhatsapp}
                        >
                            Say Hello
                        </Button>
                    </motion.div>
                </Container>
                <Container maxWidth='xl'>
                    <Divider sx={{borderColor: 'white', marginTop: '11rem', opacity: '.50'}}/>
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: '12px', marginTop: '10px'}}>©
                        Copyright 2023.</Typography>
                    <Typography sx={{textAlign: 'center', color: 'white', fontSize: '12px', marginTop: '10px'}}>
                        Designed & Built by Andrei Sirbu</Typography>
                </Container>
            </Box>


        </>
    )
}