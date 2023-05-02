import * as React from 'react';
import Typography from "@mui/material/Typography";
import NavBar from "../../components/NavBar";
import {Container, Grid, List, ListItem, ListItemIcon} from "@mui/material";
import Box from "@mui/material/Box";
import {motion} from "framer-motion";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function About() {
    return (
        <>
            <NavBar/>
            <Container component="main" maxWidth="lg">
                <Box sx={{
                    p: 2,
                    borderRadius: '15px',
                }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 2.5}}
                            >
                                <Typography sx={{
                                    fontFamily: 'Raleway, sans-serif',
                                    color: 'white',
                                    fontSize: '3rem',
                                    marginTop: '110px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }} variant="h5" gutterBottom>
                                    About Me
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{x: -1400}}
                                animate={{x: 0}}
                                transition={{type: "spring", bounce: 0.1, duration: 5}}
                            >
                                <Typography sx={{
                                    fontFamily: 'Raleway, sans-serif',
                                    color: 'white',
                                    textIndent: '40px',
                                    marginTop: '50px',
                                    letterSpacing:'1px'
                                }} variant="body1">
                                    I'm a recent graduate with a degree in Computer Science and a passion for creating
                                    innovative web applications. Throughout my studies, I have honed my skills in React
                                    and
                                    have completed several projects using this technology.
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{x: -1400}}
                                animate={{x: 0}}
                                transition={{type: "spring", bounce: 0.1, duration: 5, delay: 0.5}}
                            >
                                <Typography sx={{
                                    fontFamily: 'Raleway, sans-serif',
                                    color: 'white',
                                    textIndent: '40px',
                                    marginTop: '25px',
                                    letterSpacing:'1px'
                                }} variant="body1">
                                    I am particularly interested in developing user-friendly and responsive web
                                    applications, and I believe that React is the perfect tool for achieving this goal.
                                    I am
                                    constantly
                                    seeking out new challenges and am eager to apply my skills to real-world projects.
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{x: -1400}}
                                animate={{x: 0}}
                                transition={{type: "spring", bounce: 0.1, duration: 5, delay: 1}}
                            >
                                <Typography sx={{
                                    fontFamily: 'Raleway, sans-serif',
                                    color: 'white',
                                    textIndent: '40px',
                                    marginTop: '25px',
                                    letterSpacing:'1px'
                                }} variant="body1">
                                    As a developer, I am a quick learner, detail-oriented, and committed to writing
                                    clean
                                    and maintainable code. I enjoy collaborating with others and believe that teamwork
                                    is
                                    essential for building successful applications.
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid xs={6}>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 2.5}}
                            >
                                <Typography sx={{
                                    marginLeft:'40px',
                                    fontFamily: 'Raleway, sans-serif',
                                    color: 'white',
                                    fontSize: '3rem',
                                    marginTop: '110px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }} variant="h5" gutterBottom>
                                    Skills
                                </Typography>
                            </motion.div>
                            <List>
                                <motion.div
                                    initial={{x: 1200}}
                                    animate={{x: 0}}
                                    transition={{type: "spring", bounce: 0.05, duration: 5}}>
                                    <ListItem sx={{display: 'flex', justifyContent: 'left',marginLeft:'14rem',marginTop:'2rem'}}>
                                        <ListItemIcon>
                                            <DoubleArrowIcon sx={{color: 'white'}}/>
                                            <Typography sx={{fontFamily: 'Raleway, sans-serif', color: 'white',marginLeft:'0.5rem',letterSpacing:'1px'}}
                                                        variant="body1">ReactJS</Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{x: 1200}}
                                    animate={{x: 0}}
                                    transition={{type: "spring", bounce: 0.05, duration: 5 , delay:0.2}}>
                                    <ListItem sx={{display: 'flex',  justifyContent: 'left' , marginLeft:'14rem'}}>
                                        <ListItemIcon>
                                            <DoubleArrowIcon sx={{color: 'white'}}/>
                                            <Typography sx={{fontFamily: 'Raleway, sans-serif', color: 'white',marginLeft:'0.5rem',letterSpacing:'1px'}}
                                                        variant="body1">HTML5/CSS3</Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{x: 1200}}
                                    animate={{x: 0}}
                                    transition={{type: "spring", bounce: 0.05, duration: 5, delay:0.4}}>
                                    <ListItem sx={{display: 'flex', justifyContent: 'left', marginLeft:'14rem'}}>
                                        <ListItemIcon>
                                            <DoubleArrowIcon sx={{color: 'white'}}/>
                                            <Typography sx={{fontFamily: 'Raleway, sans-serif', color: 'white',marginLeft:'0.5rem',letterSpacing:'1px'}}
                                                        variant="body1">JavaScript</Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{x: 1200}}
                                    animate={{x: 0}}
                                    transition={{type: "spring", bounce: 0.05, duration: 5, delay: 0.6}}>
                                    <ListItem sx={{display: 'flex', justifyContent: 'left', marginLeft:'14rem'}}>
                                        <ListItemIcon>
                                            <DoubleArrowIcon sx={{color: 'white'}}/>
                                            <Typography sx={{fontFamily: 'Raleway, sans-serif', color: 'white',marginLeft:'0.5rem',letterSpacing:'1px'}}
                                                        variant="body1">MaterialUI</Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{x: 1200}}
                                    animate={{x: 0}}
                                    transition={{type: "spring", bounce: 0.05, duration: 5, delay: 0.8}}>
                                    <ListItem sx={{display: 'flex', justifyContent: 'left', marginLeft:'14rem'}}>
                                        <ListItemIcon>
                                            <DoubleArrowIcon sx={{color: 'white'}}/>
                                            <Typography sx={{fontFamily: 'Raleway, sans-serif', color: 'white',marginLeft:'0.5rem',letterSpacing:'1px'}}
                                                        variant="body1">ReduxJS</Typography>
                                        </ListItemIcon>

                                    </ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{x: 1200}}
                                    animate={{x: 0}}
                                    transition={{type: "spring", bounce: 0.05, duration: 5, delay: 1}}>
                                    <ListItem sx={{display: 'flex', justifyContent: 'left', marginLeft:'14rem'}}>
                                        <ListItemIcon>
                                            <DoubleArrowIcon sx={{color: 'white'}}/>
                                            <Typography sx={{fontFamily: 'Raleway, sans-serif', color: 'white',marginLeft:'0.5rem',letterSpacing:'1px'}}
                                                        variant="body1">Git/Github</Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{x: 1200}}
                                    animate={{x: 0}}
                                    transition={{type: "spring", bounce: 0.05, duration: 5, delay: 1.2}}>
                                    <ListItem sx={{display: 'flex', justifyContent: 'left', marginLeft:'14rem'}}>
                                        <ListItemIcon>
                                            <DoubleArrowIcon sx={{color: 'white'}}/>
                                            <Typography sx={{fontFamily: 'Raleway, sans-serif', color: 'white',marginLeft:'0.5rem',letterSpacing:'1px'}}
                                                        variant="body1">Framer Motion</Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{x: 1200}}
                                    animate={{x: 0}}
                                    transition={{type: "spring", bounce: 0.05, duration: 5, delay: 1.4}}>
                                    <ListItem sx={{display: 'flex', justifyContent: 'left', marginLeft:'14rem'}}>
                                        <ListItemIcon>
                                            <DoubleArrowIcon sx={{color: 'white'}}/>
                                            <Typography sx={{fontFamily: 'Raleway, sans-serif', color: 'white',marginLeft:'0.5rem' ,letterSpacing:'1px'}}
                                                        variant="body1">React Context</Typography>
                                        </ListItemIcon>
                                    </ListItem>
                                </motion.div>
                            </List>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </>
    )
}