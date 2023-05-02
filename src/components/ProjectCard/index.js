import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";




function ProjectCard(props) {
    const handleVisit = () => {
        window.open(props.link);
    }
    return (
        <Card style={{border:'none',maxWidth: 400 , marginTop:'110px',boxShadow:'none' , borderRadius:'0px'}}>
                <CardMedia
                    component="img"
                    height="200"
                    src={props.img}
                    title={props.title}
                />
                <CardContent style={{ backgroundColor: '#131312', color: 'white'}}>
                    <Typography sx={{fontFamily: 'Raleway, sans-serif',marginTop:'10px',letterSpacing:'1px'}} gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography sx={{fontFamily: 'Raleway, sans-serif',marginTop:'20px' ,letterSpacing:'1px'}} variant="body2" component="p" color="white">
                        {props.description}
                    </Typography>
                </CardContent>
            <CardActions style={{ backgroundColor: '#131312'}}>
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
                    margin: 'left',
                    marginTop: '20px',
                }}
                        onClick={handleVisit}
                >
                    Visit website
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;