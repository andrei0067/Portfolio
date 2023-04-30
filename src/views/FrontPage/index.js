import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TyperWriter from "../../components/TyperWriter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Container, createTheme, Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {makeStyles} from "@mui/styles";
import face4 from "./face4.png"
import NavBar from "../../components/NavBar";

const useStyles = makeStyles({
    headText: {
        fontFamily: 'Raleway, sans-serif',
        paddingTop: '220px',
        fontSize: '2.4em !important',
        color: 'white !important',
        fontWeight: '600 !important',
        letterSpacing: '1px !important',
    },
    nameText: {
        fontSize: '2.0em !important',
        color: 'white !important',
        fontWeight: 'normal !important',
        letterSpacing: '1px !important',
        fontFamily: 'Raleway, sans-serif'
    },
    faceStyle: {
        position: 'absolute',
        width: '17%',
        marginTop: '7rem',
        marginLeft: '14.5rem'

    },
    faceStyle2: {
        position: 'absolute',
        width: '40%',
        marginTop: '5.5rem',

    }
});
const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/andrei-sirbu/");
}
const handleGithub = () => {
    window.open("https://github.com/andrei0067");
}
const handleInstagram = () => {
    window.open("https://www.instagram.com/sherban_berban/");
}
const handleFacebook = () => {
    window.open("https://www.facebook.com/berbanu/");
}


export default function FrontPage() {
    const classes = useStyles();
    return (
        <>
            <NavBar/>
            <Box sx={{background: '#131312'}}>
                <Container component="main" maxWidth="lg">
                    <Grid container spacing={1}>
                        <Grid item xs={5}>
                            <h1 className={classes.headText}>Hello,</h1>
                            <h1 className={classes.nameText}>I'm Andrei Sîrbu</h1>
                            <TyperWriter/>
                            <IconButton>
                                <LinkedInIcon sx={{fontSize: '50px', color: 'white', paddingTop: '10px'}}
                                              onClick={handleLinkedIn}></LinkedInIcon>
                            </IconButton>
                            <IconButton>
                                <GitHubIcon sx={{fontSize: '50px', color: 'white', paddingTop: '10px'}}
                                            onClick={handleGithub}>></GitHubIcon>
                            </IconButton>
                            <IconButton>
                                <InstagramIcon sx={{fontSize: '50px', color: 'white', paddingTop: '10px'}}
                                               onClick={handleInstagram}>></InstagramIcon>
                            </IconButton>
                            <IconButton>
                                <FacebookIcon sx={{fontSize: '50px', color: 'white', paddingTop: '10px'}}
                                              onClick={handleFacebook}>></FacebookIcon>
                            </IconButton>

                        </Grid>
                        <Grid item xs={7}>
                            <img src={face4} className={classes.faceStyle2} draggable="false"/>

                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
    );
}