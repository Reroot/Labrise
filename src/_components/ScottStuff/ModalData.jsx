"use strict"

import React from 'react';
import PropTypes from 'prop-types';
//import RModalContainer from './RModalContainer';
//import ModalButtonContainer from './ModalButtonContainer';
//var ModalDataToBeDisplayed;
const ModalData = ({ modalDataInfo }) => {

    
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
        content = 
        (<div>
         {JSON.stringify(modalDataInfo)}
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
    //console.log("fuckinghell"+JSON.stringify(modalDataInfo))
    return(
        <div>
            <h1 >Patient Service Events</h1>
            {content}
        </div>
    );
}

ModalData.propTypes = {
    modalDataInfo: PropTypes.object//data={modalStuff} 
};

export default ModalData;
