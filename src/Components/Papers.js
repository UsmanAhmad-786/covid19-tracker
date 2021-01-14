import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        margin: '0 auto',
        marginTop: 30
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'white',
        margin:'0px 15px 0px 5px'
        
        
    },
    title: {
        color: '#3f51b5',
        textTransform: 'uppercase'
    },
}));

 const Papers = ({ data: {confirmed, recovered, deaths}})=> {

    const classes = useStyles();
    if(!confirmed){
        return 'Please Wait...'
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                    
                        <Grid item xs={12} sm={4} md={4} >
                            <Paper className={classes.paper} 
                                elevation={3} >

                                  <h3 className={classes.title}>
                                   Confirmed <br/> 
                                   <CountUp start = {0} end={confirmed.value} duration = {1}  separator = "," />
                                </h3> 
                              
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} >
                            <Paper className={classes.paper}
                                elevation={3} >

                                  <h3 className={classes.title}>
                                    Recoverd <br/> 
                                    <CountUp start = {0} end={recovered.value} duration = {1}  separator = "," />
                                </h3> 
                              
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} >
                            <Paper className={classes.paper}
                                elevation={3} >

                                  <h3 className={classes.title}>
                                    Deaths <br/> 
                                    <CountUp start = {0} end={deaths.value} duration = {1}  separator = "," />
                                </h3> 
                              
                            </Paper>
                        </Grid>
                
                 </Grid>
        </div>
    );
}
export default Papers;