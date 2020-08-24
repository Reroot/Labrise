/*Functionality: the patEventRender takes a data structure
 containing pagination information and giving explicit 
 details on which items to present within the table
 */

"use strict"
import React from 'react';
import PropTypes from 'prop-types';
import RModalContainer from './RModalContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';


const PatEventRender = ({ patInfoData,action2,action3, num, number1}) => {


    function call2(iValue){//called on presses, changes the adal call changing the state of 
        const construedData={
            date:iValue,
            cid:number1
        }
        console.log("the fuckign data: "+JSON.stringify(construedData));
        action2(construedData)
        action3();

    }

    function createPatRow(patsInfo,key){//creates the rows for report table
        let date= patsInfo.sstack_dateofappointment
        let dateCode= date.substring(5,7)+"/"+date.substring(8,10)+"/"+date.substring(0,4)
        return (
            <TableRow key={"0."+key} >
                <TableCell key ={"1."+key}> <Button onClick={()=>call2(JSON.stringify(patsInfo["sstack_dateofappointment"]))}>{dateCode}</Button> </TableCell>
                <TableCell key ={"2."+key}> {patsInfo.opportunityid} </TableCell>
                <TableCell key ={"3."+key}> {patsInfo.sstack_reasonfortesting} </TableCell>
            </TableRow>
        );
    }

    let content = '';

    if(!patInfoData || patInfoData.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }

    if(patInfoData && patInfoData.requestSucessful){
        content = 
        (
                
            <Grid                 
                container 
                item 
                alignItems="center" 
                alignContent="center"
                direction="column" 
                justify="center" >
                    <Grid item>
                    <Paper>Page: {num}</Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <TableContainer >
                                <Table >
                                    <TableHead >
                                        <TableRow>
                                            <TableCell key ={"DOA"}>Date of Appointment</TableCell>
                                            <TableCell key ={"ID"}>ID</TableCell>
                                            <TableCell key ={"R"}>Given Reason</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {patInfoData.patInfo.value.map((patsInfo,i) => createPatRow(patsInfo,i))}
                                    </TableBody>    
                                </Table>
                            </TableContainer>
                            
                    </Paper>
                    </Grid>


            </Grid>


        )
    }

    if(patInfoData && patInfoData.requestFailed){
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
            <RModalContainer/>
            
        </div>
    );
}

PatEventRender.propTypes = {
    PatInfoData: PropTypes.object 
};

export default PatEventRender;
