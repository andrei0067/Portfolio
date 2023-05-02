import * as React from 'react';
import NavBar from "../../components/NavBar";
import ProjectCard from "../../components/ProjectCard";
import {Container, Grid} from "@mui/material";
import photo from "./asdfadsf21.png"
import question from "./question-marks.jpg"
import {motion} from "framer-motion";

export default function Projects() {
    return (
        <>
            <NavBar/>
            <Container component="main" maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2.5}}
                        >
                            <ProjectCard
                                title="Le petit bique"
                                description="E-commerce website created with ReactJs , MaterialUI , React Redux and Firebase. Users can see the entire E-shop catalogue and order some products while admins can modify the products. The entire website is based on Firebase login auth"
                                img={photo}
                                link="https://le-petit-bique.web.app/home"
                            />
                        </motion.div>
                    </Grid>
                    <Grid item xs={4}>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2.5 , delay:1}}
                        >
                            <ProjectCard
                                title="Comming soon"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eiusmod tempor incididunt ut labore"
                                img={question}
                            />
                        </motion.div>
                    </Grid>

                    <Grid item xs={4}>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2.5,delay:2}}
                        >
                            <ProjectCard
                                title="Comming soon"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eiusmod tempor incididunt ut labore"
                                img={question}
                            />
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}