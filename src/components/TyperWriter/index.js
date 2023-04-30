import React from 'react'
import Typewriter from "typewriter-effect";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    typewriterText: {
        fontSize: '2.4em !important',
        color: 'white !important',
        fontWeight: 'normal !important',
        letterSpacing: '1px !important',
        fontFamily: 'Raleway, sans-serif'
    }
});

export default function Text() {
    const classes = useStyles()
    return (

        <h1 className={classes.typewriterText}>
            <Typewriter
                options={{
                    strings: [
                        "React Js Developer",
                        "Front End Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    color: '#FFFFFF'
                }}
            />
        </h1>
    )
}