/*Functionality: constructs a table showing 
data pulled from the lab report enitity 
 */

"use strict"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import React from 'react';
import PropTypes from 'prop-types';

const ModalData = ({ modalDataInfo }) => {

    
    let content = '';

    if(!modalDataInfo || modalDataInfo.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }
 
    //creates table from modal data retrieved
    if(modalDataInfo && modalDataInfo.requestSucessful){
        let xdate=modalDataInfo.modalData.value[0].wc_appointmentdate;
        let dateCode= xdate.substring(5,7)+"/"+xdate.substring(8,10)+"/"+xdate.substring(0,4)


        content = 
        (<div>
            <Paper>
                <h1 >Lab Result for {dateCode} </h1>
                <TableContainer>
                    <Table>
                        <TableHead >
                            <TableRow>
                                <TableCell>Type of Test</TableCell>
                                <TableCell >Min</TableCell>
                                <TableCell >Max</TableCell>
                                <TableCell >Value</TableCell>
                                <TableCell >Flag</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell>Red Blood Cell</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_redbloodcellmin}</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_redbloodcellmax} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_redbloodcellvalue} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_redbloodcellflag} </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>White Blood Cell</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_whitebloodcellmin}</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_whitebloodcellmax} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_whitebloodcellvalue} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_whitebloodcellflag} </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>Platelet</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_plateletmin}</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_plateletmax} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_plateletvalue} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_plateletflag} </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>Total Cholesterol</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_totalcholesterolmin}</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_totalcholesterolmax} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_totalcholesterolvalue} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_totalcholesterolflag} </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>Triglycerides</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_triglyceridesmin}</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_triglyceridesmax} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_triglyceridesvalue} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_triglyceridesflag} </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>Sodium</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_sodiummin}</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_sodiummax} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_sodiumvalue} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_sodiumflag} </TableCell>
                            </TableRow>
                        </TableBody>    
                    </Table>
                </TableContainer>
            </Paper>
        </div>)
    
    }

    if(modalDataInfo && modalDataInfo.requestFailed){
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

ModalData.propTypes = {
    modalDataInfo: PropTypes.object
};

export default ModalData;
