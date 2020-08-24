/*Functionality: the shell component takes the string of dates passed
 to it by bettle component, counts these and passes it on to patEvent,
 with the value of the pagination button, giving patEvent the range of 
 values to call and display
 */ 


"use strict"

import React from 'react';
import PropTypes from 'prop-types';

import PatEventContainer from './PatEventContainer';

import Button from '@material-ui/core/Button';
import {  ButtonGroup, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';



const Shell = ({ shellInfoData, action1}) => {

    
    let content = '';

    let theDates=[];
    const perLoad=6;




    function buttonPress(buttonValueX,data,cidStuff){

        if(buttonValueX<1){
            data.buttonValue=1;
        }
        else if (buttonValueX>data.pages){
            data.buttonValue=buttonValueX-1;
        }else{
            data.buttonValue=buttonValueX;
        } 
        let construedData={
            dateData:data,
            cid:cidStuff
        }
        action1(construedData);
    }

    if(!shellInfoData || shellInfoData.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }

    if(shellInfoData && shellInfoData.requestSucessful){
        let info = useSelector((state) => state.profileReducer.profileData);
        let cidInfo=info.pData.value[0].contactid;
    
        let buttonContent=[];

        for(let i=0;i<shellInfoData.shellInfo.value.length;i++){
            theDates[i]=shellInfoData.shellInfo.value[i].sstack_dateofappointment;

        }

        let numberOfPages= (theDates.length)/perLoad;
        if ((theDates.length%perLoad)!=0){
            numberOfPages++;
        }

        let importantData={
            perLoad:perLoad,
            pages:numberOfPages,
            dates:theDates,
            buttonValue:1
        }

        for (let i=1;i<=numberOfPages;i++){
            buttonContent[i]=<Button
            key={"PNB"+i}
            onClick={()=>buttonPress(i,importantData,cidInfo)}>{i}
            </Button>
        }

        content = (
            <Grid                    
                container 
                item 
                alignItems="center" 
                alignContent="center"
                direction="column"  
                justify="center" 
                spacing={2}> 

                <Grid item>
                    <PatEventContainer someData={importantData}/>
                </Grid>

                <Grid item>
                    <ButtonGroup>
                        <Paper>
                            <Button onClick={()=>buttonPress(importantData.buttonValue-1,importantData,cidInfo)}>-</Button>
                            {buttonContent}
                            <Button onClick={()=>buttonPress(importantData.buttonValue+1,importantData,cidInfo)}>+</Button>
                        </Paper>
                    </ButtonGroup>
                </Grid>
            </Grid> 
                )
    }

    if(shellInfoData && shellInfoData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading patinfo!
            </div>
        )
    }
        
    return(
        <div>
            {content}
        </div>
    );
}

Shell.propTypes = {
    ShellInfoData: PropTypes.object
};

export default Shell;


