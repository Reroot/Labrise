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

// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         main: purple[500],
//       },
//       secondary: {
//         main: green[500],
//       },
//     },
//   });

const Shell = ({ shellInfoData, action1, penis }) => {
    //console.log("iuwensdnuqencouncdoicnadocn "+JSON.stringify(shellInfoData))
    
    let content = '';
    console.log("poopies"+penis);
    let theDates=[];
    const perLoad=2;
    //let buttonValue=1;
    const buttonStyle={

            "background-color": "#4CAF50", /* Green background */
            "border": "1px solid green", /* Green border */
            "color": "white", /* White text */
            "padding": "1000px 240px", /* Some padding 10px 24px */
            "cursor": "pointer", /* Pointer/hand icon */
            "float": "left" /* Float the buttons side by side */
    }


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
    //console.log("debugxxxx67"+JSON.stringify(patInfoData));

    if(shellInfoData && shellInfoData.requestSucessful){//pData.value[0]["firstname"]
        //console.log(JSON.stringify(shellInfoData));

        let buttonContent=[];

 

        for(let i=0;i<shellInfoData.shellInfo.value.length;i++){
            theDates[i]=shellInfoData.shellInfo.value[i].wc_appointmentdate;

        }
        //theDates=penis;

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
            buttonContent[i]=<Button onClick={()=>buttonPress(i,importantData)}>{i}</Button>
        }

        content = (<div>
{/* 
             <div >
                <Button>All</Button>
                <Button>Past</Button>
                <Button>Future</Button>
            </div>  */}
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
