"use strict"
//this spits out record table with buttons
import React from 'react';
import PropTypes from 'prop-types';
//import RModalContainer from './RModalContainer';
import PatEventContainer from './PatEventContainer';
//import ModalButtonContainer from './ModalButtonContainer';
//var ModalDataToBeDisplayed;
import Button from '@material-ui/core/Button';
import { Box, ThemeProvider } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';



const Shell = ({ shellInfoData, action1, penis }) => {

    
    let content = '';

    let theDates=[];
    const perLoad=2;




    function buttonPress(buttonValueX,data){
        if(buttonValueX<1){
            data.buttonValue=1;
        }
        else if (buttonValueX>data.pages){
            data.buttonValue=buttonValueX-1;
        }else{
            data.buttonValue=buttonValueX;
        } 
        action1(data);
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

        let buttonContent=[];

        for(let i=0;i<shellInfoData.shellInfo.value.length;i++){
            theDates[i]=shellInfoData.shellInfo.value[i].wc_appointmentdate;

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
            onClick={()=>buttonPress(i,importantData)}>{i}
            </Button>
        }

        content = (<div>

            <Box pl={"40%"}pt={5}>Patient Event Services</Box>
            <PatEventContainer someData={importantData}/>
            <Box  pt={5} pl={"35%"} >
                <Button onClick={()=>buttonPress(importantData.buttonValue-1,importantData)}>-</Button>
                {buttonContent}
                <Button onClick={()=>buttonPress(importantData.buttonValue+1,importantData)}>+</Button>
            </Box>
            </div>)
    }

    if(shellInfoData && shellInfoData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading patinfo!
            </div>
        )
    }
        //let dataToPass=ModalDataToBeDisplayed;
        //console.log(dataToPass+"datatopass")//this seems like a bad way to do this because if it fails i cant display
    return(//<PatEventContainer someDates={theDates} perLoad={perLoad}/>
        <div>
            {content}
        </div>
    );
}

Shell.propTypes = {
    ShellInfoData: PropTypes.object//data={modalStuff} <button onClick={call1} >Butt1</button>//<button onClick={call2} >Butt2</button> 
};

export default Shell;

/*three buttons, default is all, future, past, this will work just like pagination
//take dates make date object that makes a value out of a date
*/ 
