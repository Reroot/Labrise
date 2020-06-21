"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, makeStyles, useTheme } from '@material-ui/core';
import CustomTheme from '../../MUITheme';
// import DefaultTheme from '@material-ui/styles/defaultTheme';
import { getThemeProps } from '@material-ui/styles';


const CoronaRender = ({ coronaData }) => {

    // function createCoronaRow(corona){
    //     return (
    //         <tr key={corona.date}>
    //             <td> {corona.date} </td>
    //             <td> {corona.death} </td>
    //             <td> {corona.recovered} </td>
    //             <td> {corona.hospitalizedCurrently} </td>
    //             <td> {corona.inIcuCurrently} </td>
    //             <td> {corona.onVentilatorCurrently} </td>
    //             <td> {corona.positive} </td>
    //             <td> {corona.negative} </td>
    //             <td> {corona.pending} </td>
    //         </tr>
    //     );
    // }

    let content = '';

    if(!coronaData || coronaData.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }
    

    // if(coronaData && coronaData.requestSucessful){
    //     content = 
    //         (<table className="table">
    //             <thead>
    //                 <tr>
    //                     <th>Date</th>
    //                     <th>Total Dead</th>
    //                     <th>Total Recovered</th>
    //                     <th>Currently Hospitalized</th>
    //                     <th>Currently in ICU</th>
    //                     <th>Currently on Ventilator</th>
    //                     <th>Tested Positive</th>
    //                     <th>Tested Negative</th>
    //                     <th>Total Tests Pending</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {createCoronaRow(CoronaData.corona)}
    //             </tbody>    
    //         </table>)
    // }

    if(coronaData && coronaData.requestSucessful){
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
                        <Paper className={classes.paper}>Data Current As Of: {coronaData.corona[0]["date"]}</Paper>
                    </Grid>
                </React.Fragment>
            );
        }

        function DeadOrAliveRow (){
            return (
                <React.Fragment>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Total Death Count: {coronaData.corona[0]["death"]}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Total Recovery Count: {coronaData.corona[0]["recovered"]}</Paper>
                    </Grid>
                </React.Fragment>
            );
        }

        function HospitalStatsRow (){
            return (
                <React.Fragment>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Currently Hospitalized: {coronaData.corona[0]["hospitalizedCurrently"]}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Currently in ICU: {coronaData.corona[0]["inIcuCurrently"]}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Currently on Ventilator: {coronaData.corona[0]["onVentilatorCurrently"]}</Paper>
                    </Grid>
                </React.Fragment>
            );
        }

        function TestingStatsRow (){
            return (
                <React.Fragment>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Total Positive Tests: {coronaData.corona[0]["positive"]}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Total Negative Tests: {coronaData.corona[0]["negative"]}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Currently Pending Tests: {coronaData.corona[0]["pending"]}</Paper>
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

    if(coronaData && coronaData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading corona data!
            </div>
        )
    }
        
    return(
        <div>
            {/* <h1>Corona Data</h1> */}
            {content}
        </div>
    );
}

CoronaRender.propTypes = {
    coronaData: PropTypes.object
};

export default CoronaRender;
