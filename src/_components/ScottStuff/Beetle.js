/*

Functionality: top component in the hierachy of components that
 are used to create a paginating and data filter. Bettle component 
 specifically makes the first adal call which all calls just the 
 dates which it passes to the shell component
 */ 
"use strict"
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ShellContainer from './ShellContainer';
import { Box, ButtonGroup, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {scottStyles} from '../../_styles/scottStyles'


function compareDates(dataStructure){//used to compare dates and mark dates not to be displayed

    let theDate = new Date();
    let dateString=JSON.stringify(theDate);
    //clones the array
    dataStructure.someOfTheShowDates=dataStructure.someOfTheDates.slice();
    //creates a date to compare to todays date
    let dateValue=dateString.substring(1,5)+dateString.substring(6,8)+dateString.substring(9,11);


    if(dataStructure.someButtonValue=="future"){
        let j=0;
        while(j< dataStructure.someOfTheShowDates.length){

            let dateValue2=dataStructure.someOfTheDates[j].substring(0,4)+dataStructure.someOfTheDates[j].substring(5,7)+dataStructure.someOfTheDates[j].substring(8,10);

            if( Number(dateValue) > Number(dateValue2) ){
                dataStructure.someOfTheShowDates[j]="x";
  
            }
            j++;
        }
    }else if (dataStructure.someButtonValue=="all"){

    }else if(dataStructure.someButtonValue=="past"){
        let j=0;
        while(j< dataStructure.someOfTheShowDates.length){
            let dateValue2=dataStructure.someOfTheDates[j].substring(0,4)+dataStructure.someOfTheDates[j].substring(5,7)+dataStructure.someOfTheDates[j].substring(8,10);
            if( Number(dateValue) < Number(dateValue2) ){
                    dataStructure.someOfTheShowDates[j]="x";
                }
                j++;
            }
    }else{

    }
}



const Beetle = ({ beetleInfoData, action1,number}) => {

    let content='';
    const useStyles = scottStyles();//styles for header

    function buttonPress(dataStructure, buttonStr,aCid){


        dataStructure.someButtonValue=buttonStr;
        compareDates(dataStructure);
        const construedData={//object used to send data to action 
            dates:dataStructure.someOfTheShowDates,
            cid:aCid

        }

        action1(construedData);



    }

    let dataStructure={
        someOfTheDates:[],
        someOfTheShowDates:[],
        someButtonValue:"all"
    }


    if(beetleInfoData && beetleInfoData.requestSucessful){


        let cidInfo=number
        let theDate = new Date();

        for(let i=0;i<beetleInfoData.beetleInfo.value.length;i++){
            dataStructure.someOfTheDates[i]=beetleInfoData.beetleInfo.value[i].sstack_dateofappointment;
        }
        compareDates(dataStructure);
        



        

        content = (<div className="col-lg-8 offset-lg-2" style={{backgroundImage: "linear-gradient(to bottom right, white, rgb(196, 180, 255,.4))",}}>
            <h1 className={useStyles.HeadingText}>Patient Event Services:</h1>
            <br/>
            <br/>
                <Grid 
                    container 
                    alignContent="center"
                    alignItems="center" 
                    direction="column"  
                    justify="flex-start" 
                    spacing={2}
                    >


                    <Grid item >
                        <Paper>
                            <ButtonGroup>
                                <Button onClick={ ()=> buttonPress(dataStructure,"all",cidInfo)}>All</Button>
                                <Button onClick={ ()=> buttonPress(dataStructure,"past",cidInfo)}>Past</Button>
                                <Button onClick={ ()=> buttonPress(dataStructure,"future",cidInfo)}>Future</Button>
                            </ButtonGroup>
                        </Paper>
                    </Grid>

                    <Grid item >

                        <ShellContainer datedData={dataStructure}/>
        
                    </Grid>
                 </Grid></div>
            )
    }

    if(beetleInfoData && beetleInfoData.requestFailed){
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



export default Beetle;
