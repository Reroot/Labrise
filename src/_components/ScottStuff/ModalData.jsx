"use strict"
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

import React from 'react';
import PropTypes from 'prop-types';
//import RModalContainer from './RModalContainer';
//import ModalButtonContainer from './ModalButtonContainer';
//var ModalDataToBeDisplayed;
const ModalData = ({ modalDataInfo }) => {
    function createModRow(modalDataInfo,key){
        
        return (
            <TableRow >
                <TableCell>type</TableCell>
                <TableCell > {modalDataInfo.wc_appointmentdate}</TableCell>
                <TableCell > {modalDataInfo.wc_name} </TableCell>
                <TableCell> {modalDataInfo.wc_name} </TableCell>
            </TableRow>
        );
    }
    
    //console.log("fuckinghell"+JSON.stringify(modalDataInfo))
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
 

    if(modalDataInfo && modalDataInfo.requestSucessful){
        console.log(JSON.stringify(modalDataInfo))
        content = 
        (<div>
            <Paper>
                <h1 >Lab Result for {modalDataInfo.modalData.value[0].wc_appointmentdate} </h1>
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
                                <TableCell>totalcholesterol</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_totalcholesterolmin}</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_totalcholesterolmax} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_totalcholesterolvalue} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_totalcholesterolflag} </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>triglycerides</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_triglyceridesmin}</TableCell>
                                <TableCell > {modalDataInfo.modalData.value[0].wc_triglyceridesmax} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_triglyceridesvalue} </TableCell>
                                <TableCell> {modalDataInfo.modalData.value[0].wc_triglyceridesflag} </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>sodium</TableCell>
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
    
    }//{modalDataInfo.modalData.value.map((modInfo,i) => createModRow(modInfo,i))}

    if(modalDataInfo && modalDataInfo.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading patinfo!
            </div>
        )
    }
    //console.log("fuckinghell"+JSON.stringify(modalDataInfo))
    return(
        <div>
            {content}
        </div>
    );
}

ModalData.propTypes = {
    modalDataInfo: PropTypes.object//data={modalStuff} 
};

export default ModalData;
