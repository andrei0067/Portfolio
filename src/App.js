import './App.css';
import AnimatedCursor from "react-animated-cursor";
import Loader from "./components/Loader";
import {makeStyles, ThemeProvider} from "@mui/styles";
import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import FrontPage from "./views/FrontPage";
import Projects from "./views/Projects";
import {motion} from "framer-motion";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import {RemoveScrollBar} from "react-remove-scroll-bar";

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
        backgroundColor: '#131312',
        position: 'absolute',
        width: '100%',
        height: '100vh'
    }
});

function App() {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const location = useLocation()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);

    return (
        <>
            <RemoveScrollBar/>
            <AnimatedCursor
                color="255,255,255"
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    border: '3px solid #fff'
                }}
            />
            <div className={classes.divBackground}>
                <motion.div>
                    {
                        loading?
                           <Loader/>

                            :

                            <Routes>
                                <Route path="/" element={<FrontPage/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>

                    }
                </motion.div>
            </div>
        </>
    )
}

export default App;
