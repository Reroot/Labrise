/****************************************************************************
This defines how the Lab Report Viewer should be rendered in the UI view
****************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';
import { LabReportViewer } from "./_labReportViewer";


// Render the Lab Report Viewer
export const LabReports_Render = ( {labResults_Data} ) => {

    // Render one row of data
    // function createDataRow(rowData) {
    //     return (
    //         <tr key={rowData.wc_labtestresultid}>
    //             <td> {rowData.wc_orderdate} </td>
    //             <td> {rowData.wc_patient} </td>
    //             <td> {rowData.wc_doctor} </td>
    //             <td> {rowData.wc_test} </td>
    //             <td> {rowData.wc_min} </td>
    //             <td> {rowData.wc_max} </td>
    //             <td> {rowData.wc_value} </td>
    //             <td> {rowData.wc_flag} </td>
    //             <td> {rowData.wc_units} </td>
    //             <td> {rowData.wc_scaledvalue} </td>
    //         </tr>
    //     );
    // }

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
            // <table>
            //     <thead>
            //         <tr>
            //             <th>Order Date</th>
            //             <th>Patient</th>
            //             <th>Doctor</th>
            //             <th>Test</th>
            //             <th>Min</th>
            //             <th>Max</th>
            //             <th>Value</th>
            //             <th>Flag</th>
            //             <th>Units</th>
            //             <th>scaledValue</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {labResults_Data.labData.value.map( (rowData) => createDataRow(rowData) )}
            //     </tbody>    
            // </table>
            <LabReportViewer {...labResults_Data}/>
        );
    }

    // Render this for the status:  read Failed
    if (labResults_Data && labResults_Data.requestFailed) {
        content = (
            <div className="alert alert-danger" role="alert">
                Error while loading the Lab Reports!
            </div>
        );
    }
    
    return (
        <div>
            {content}
        </div>
    );
}

LabReports_Render.propTypes = {
    labResults_Data: PropTypes.object
};
