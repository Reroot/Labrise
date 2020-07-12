"use strict"
//this spits out record table with buttons
import React from 'react';
import PropTypes from 'prop-types';
import RModalContainer from './RModalContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';


const PatEventRender = ({ patInfoData,action2,action3}) => {

    function call2(iValue){
        action2(iValue)
        action3();

    }

    function createPatRow(patsInfo,key){
        let date= patsInfo.wc_appointmentdate
        let dateCode= date.substring(5,7)+"/"+date.substring(8,10)+"/"+date.substring(0,4)
        return (
            <TableRow key={"0."+key} >
                <TableCell key ={"1."+key}> <Button onClick={()=>call2(JSON.stringify(patsInfo["wc_appointmentdate"]))}>{dateCode}</Button> </TableCell>
                <TableCell key ={"2."+key}> {patsInfo.wc_name} </TableCell>
                <TableCell key ={"3."+key}> {patsInfo.firstname} </TableCell>
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
    //console.log("debugxxxx67"+JSON.stringify(patInfoData));

    if(patInfoData && patInfoData.requestSucessful){//pData.value[0]["firstname"]
    //console.log("this is the pull"+patInfoData.value[0])
        //const dataToPass=patInfoData;
        content = 
        (<div>
            <Box pl={"25%"} pt={5}>
                <Paper style={{width:600}}>
                    <TableContainer >
                        <Table >
                            <TableHead >
                                <TableRow>
                                    <TableCell key ={"DOA"}>Date of Appointment</TableCell>
                                    <TableCell key ={"ID"}>ID</TableCell>
                                    <TableCell key ={"R"}>Result</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {patInfoData.patInfo.value.map((patsInfo,i) => createPatRow(patsInfo,i))}
                            </TableBody>    
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </div>)
    }

    if(patInfoData && patInfoData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading patinfo!
            </div>
        )
    }
        //let dataToPass=ModalDataToBeDisplayed;
        //console.log(dataToPass+"datatopass")//this seems like a bad way to do this because if it fails i cant display
    return(
        <div>
            
            {content}
            <RModalContainer/>
            
        </div>
    );
}

PatEventRender.propTypes = {
    PatInfoData: PropTypes.object//data={modalStuff} <button onClick={call1} >Butt1</button>//<button onClick={call2} >Butt2</button> 
};

export default PatEventRender;
