import React from 'react';
import { Typography, AppBar, CssBaseline, Card, CardMedia, CardContent, CardActions, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './style';


function MaterialComponent() {
    const classes = useStyles();
    return(
        <div>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h5">
                        Photo Album
                    </Typography>
                        
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            These are the memories you have created through the journey
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        see my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        delete my photos
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                            <Grid item>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                image="https://source.unsplash.com/random"  
                                title= "Image"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom varient="h5">
                                        Camera
                                    </Typography>
                                    <Typography>
                                        January 2021
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" size="small">View</Button>
                                    <Button color="primary" size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid> 
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default MaterialComponent