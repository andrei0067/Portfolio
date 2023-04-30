import * as React from 'react';
import {useEffect, useState} from "react";
import {Bars} from "react-loader-spinner";
import FrontPage from "../../views/FrontPage";
import NavBar from "../NavBar";
import {makeStyles} from "@mui/styles";
import {motion} from "framer-motion"

const useStyles = makeStyles({
    spinner: {
        display: 'block',
        position: 'absolute',
        left: 0,
        right: 0,
        margin: 'auto',
        top: 0,
        bottom: 0,
        width: '100px',
        height: '50px',
        transition: 'opacity 1.5s ease'
    },
    divBackground: {
        backgroundColor: 'gray'
    }
});
export default function Loader() {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);

    return (

        <motion.div
            className={classes.spinner}
            initial={{opacity: 0, y: 'center', scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1.5}}
            exit={{opacity: 0, transition: {duration: 0}}}
        >
            <Bars color="white"></Bars>
        </motion.div>
    );
}