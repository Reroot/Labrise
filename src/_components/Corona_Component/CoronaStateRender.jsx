"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, makeStyles, useTheme } from '@material-ui/core';
import CustomTheme from '../../_styles/MUITheme';
import { getThemeProps } from '@material-ui/styles';


const CoronaStateRender = ({ coronaStateData }) => {


    let content = '';

    if(!coronaStateData || coronaStateData.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }
    


    if(coronaStateData && coronaStateData.requestSuccessful){
        const useStyles = makeStyles((theme) => ({
            root: {
                flexGrow: 1,
            },
            good: {
                padding:theme.spacing(1),
                textAlign: 'center',
                background: theme.palette.success,                
            },
            bad: {
                padding:theme.spacing(1),
                textAlign: 'center',
                color: theme.palette.error,
            },
            neutral: {
                padding:theme.spacing(1),
                textAlign: 'center',
                color: theme.palette.warning,
            },
            paper: {
                padding:theme.spacing(1),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }));
        
        const classes  = useStyles(useTheme(CustomTheme));
        
        function DateRow (){
            return (
                <React.Fragment>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Data Current As Of: {coronaStateData.coronaState["date"]}</Paper>
                    </Grid>
                </React.Fragment>
            );
        }

        function DeadOrAliveRow (){
            return (
                <React.Fragment>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Total Death Count: {coronaStateData.coronaState["death"]}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Total Recovery Count: {coronaStateData.coronaState["recovered"]}</Paper>
                    </Grid>
                </React.Fragment>
            );
        }

        function HospitalStatsRow (){
            return (
                <React.Fragment>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Currently Hospitalized: {coronaStateData.coronaState["hospitalizedCurrently"]}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Currently in ICU: {coronaStateData.coronaState["inIcuCurrently"]}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Currently on Ventilator: {coronaStateData.coronaState["onVentilatorCurrently"]}</Paper>
                    </Grid>
                </React.Fragment>
            );
        }

        function TestingStatsRow (){
            return (
                <React.Fragment>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Total Positive Tests: {coronaStateData.coronaState["positive"]}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Total Negative Tests: {coronaStateData.coronaState["negative"]}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Currently Pending Tests: {coronaStateData.coronaState["pending"]}</Paper>
                    </Grid>
                </React.Fragment>
            );
        }

        const masterSpacing = 3;
        content = 
            (<Grid
                container
                spacing={masterSpacing}
                direction="column"
                justify="center">
                    <Grid container item>
                        <DateRow />
                    </Grid>
                    <Grid container item direction="row" spacing={masterSpacing}>
                        <DeadOrAliveRow />
                    </Grid>
                    <Grid container item direction="row" spacing={masterSpacing}>
                        <HospitalStatsRow />
                    </Grid>
                    <Grid container item direction="row" spacing={masterSpacing}>
                        <TestingStatsRow />
                    </Grid>
            </Grid>
        );
    }

    if(coronaStateData && coronaStateData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading corona data!
            </div>
        );
    }
        
    return(
        <div>
            {/* <h1>Corona Data</h1> */}
            {content}
        </div>
    );
}

CoronaStateRender.propTypes = {
    coronaStateData: PropTypes.object
};

export default CoronaStateRender;
