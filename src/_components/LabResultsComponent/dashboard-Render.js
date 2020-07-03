/****************************************************************************
This defines how the Dashboard should be rendered in the UI view
****************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import { Dashboard } from "./_dashboard";


// Render the Dashboard
export const Dashboard_Render = ( {labResults_Data} ) => {

    let content = "";

    // Render this for the status:  read Pending
    if (!labResults_Data || labResults_Data.requestPending) {
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading....</span>
                </div> 
            </div>
        );
    }
    
    // Render this for the status:  read Successful
    if (labResults_Data && labResults_Data.requestSuccessful) {
        content = (
            <Dashboard {...labResults_Data}/>
        );
    }

    // Render this for the status:  read Failed
    if (labResults_Data && labResults_Data.requestFailed) {
        content = (
            <div className="alert alert-danger" role="alert">
                Error while loading the Dashboard!
            </div>
        );
    }
    
    return (
        <div>
            {content}
        </div>
    );
}

Dashboard_Render.propTypes = {
    labResults_Data: PropTypes.object
};
