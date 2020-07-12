/************************************************
This is the root Lab Report Viewer component
************************************************/
import React from "react";
import { LabReportModal } from './_labReportModal'
import { groupbyLabOrders } from './_dataPrep'


// Define the root Lab Report Viewer component
export class LabReportViewer extends React.Component {
    // Establish the internal state of the Lab Report Viewer
    constructor(props) {
        super(props);
        // The options for choosing a Lab Order date
        this.rawJSON = props.labData.value;
        this.dateOptions = [...new Set( props.labData.value.map( row=>row.wc_orderdate ) )];
        // The Lab Report Viewer internal state includes:
        //   1) the current visibility of the LabReport modal
        //   2) the currently chosen LabOrder date
        this.state = {
            show: false,
            chosenDate: "January"
        };
        // Bind the event handler functions
        this.showLabReport = this.showLabReport.bind(this);
    }

    // Method for showing the Lab Report modal, with toggling of show/hide
    showLabReport(evnt,date) {
        this.setState( {show: !this.state.show} );
        this.setState( {chosenDate: date} );
    };

    // Method for preparing the data for a particular Lab Report
    prepareLabReport(inputJSON, orderDate) {
        const data = inputJSON.filter(row => row.wc_orderdate===orderDate);
        const patient = data[0].wc_patient;
        const doctor = data[0].wc_doctor;
        
        return {orderDate, patient, doctor, data};
    }
    
    // Method for creating a table row in the list of Lab Orders
    createLabOrderRow(labOrder) {
        return (
            <tr key={labOrder.orderDate} className="LabOrders-row">
                <button className="OrderDate-button"
                    onClick={ (evnt) => { this.showLabReport(evnt,labOrder.orderDate); } }
                >
                    {labOrder.orderDate}
                </button>
                <td> {labOrder.doctor} </td>
                <td> {labOrder.numLow} </td>
                <td> {labOrder.numHigh} </td>
            </tr>
        );
    }

    // Method for creating a table row in the Lab Report modal
    createLabReportRow(labReportData) {
        return (
            <tr key={labReportData.wc_test} className="LabReport-row">
                <td> {labReportData.wc_test} </td>
                <td> {labReportData.wc_min} </td>
                <td> {labReportData.wc_max} </td>
                <td> {labReportData.wc_units} </td>
                <td> {labReportData.wc_value} </td>
                <td> {labReportData.wc_flag} </td>
            </tr>
        );
    }

    // Render the LabReport Viewer
    render() {
        // Prepare the data for the summarized Lab Orders
        const labOrders = groupbyLabOrders(this.rawJSON, this.dateOptions);

        // Create the table of summarized Lab Orders
        const labOrdersContent = (
            <table>
                <thead>
                    <tr className="LabOrders-header">
                        <th>Lab Report<br/>Date</th>
                        <th>Ordering<br/>Doctor</th>
                        <th>Abnormal Results:<br/>Low</th>
                        <th>Abnormal Results:<br/>High</th>
                    </tr>
                </thead>
                <tbody>
                    {labOrders.map( (labOrder) => this.createLabOrderRow(labOrder) )}
                </tbody>
            </table>
        );
        
        // Prepare the data for the chosen Lab Report
        const labReport = this.prepareLabReport(this.rawJSON, this.state.chosenDate);
        
        // Create the table of chosen Lab Report results
        const labReportContent = (
            <div>
                <div className="LabReport-modal-header">
                    <pre>Lab Report Date:   {labReport.orderDate}</pre>
                    <pre>Tested Patient:    {labReport.patient}</pre>
                    <pre>Ordering Doctor:   {labReport.doctor}</pre>
                </div>
                <table className="LabReport-modal-body">
                    <thead>
                        <tr className="LabReport-header">
                            <th>Name of <br/> Test</th>
                            <th>Healthy Min</th>
                            <th>Healthy Max</th>
                            <th>Unit of Measure</th>
                            <th>Result Value</th>
                            <th>Result Flag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {labReport.data.map( (labReportData) => this.createLabReportRow(labReportData) )}
                    </tbody>
                </table>
            </div>
        );

        return (
            <div className="background ReportViewer-flexbox">
                <div className="shadow">
                    <h2>Summary of your Lab Reports</h2>
                    {labOrdersContent}
                    <LabReportModal
                        onClose={this.showLabReport}
                        show={this.state.show}
                    >
                        {labReportContent}
                    </LabReportModal>
                </div>
            </div>
        );
    }
}
