"use strict"
//this spits out record table with buttons
import React from 'react';
import PropTypes from 'prop-types';
import RModalContainer from './RModalContainer';
//import ModalButtonContainer from './ModalButtonContainer';
var ModalDataToBeDisplayed;
const PatEventRender = ({ patInfoData,action2,action3 }) => {
    //console.log("debugxx111"+JSON.stringify(patInfoData));
    let callValue="";
    function call1(){
 
        callValue="2020-06-06T04:00:00Z";
        action2(callValue)
        action3();
    }
    function call2(iValue){
        console.log(iValue)
        callValue=iValue;
        //action1();
        //action2(callValue);
        action2(iValue)
        action3();
        //console.log(callValue);
    }

    //const modalStuff ="Date: "+patInfoData.value[0].cr480_appointmentdate;
    function four(data,key){
        
        //console.log('afqwad');
        //console.log(JSON.stringify(data)+"what the fuck");
        //const ModalDataToBeDisplayed ="Date: "+data["cr480_appointmentdate"] + "Resultname: "+data["crba3_resultname"];
        //crba3_resultname
        //cr480_appointmentdate
   
    }
    const tableStyle={
        'border': '4px solid #555555',
        'background-color': '#D4E6F6',
        'width': '400px',
        'text-align': 'center',
        'border-collapse': 'collapse'
    }

    const tableTHTD={
        'border': '1px solid #555555',
        'padding': '5px 10px'
    }
    const tableTBTD={
        'font-size': '12px',
        'font-weight': 'bold',
        'color': '#0B3450'
    }
    const titleStyle={
        'color': '0B3450',
        'width': '400px',
        'text-align': 'center',
    }

    function createPatRow(patsInfo,key){
        const name=patsInfo.firstname
        console.log(patsInfo)
        return (
            <tr >
                <td key ={"1."+key}style={tableTBTD}> <button onClick={()=>call2(JSON.stringify(patsInfo["wc_appointmentdate"]))}>{patsInfo.wc_appointmentdate}</button> </td>
                <td style={tableTBTD}> {patsInfo.lastname} </td>
                <td style={tableTBTD}> {name} </td>
            </tr>
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
        const dataToPass=patInfoData;
        content = 
        (<table style={tableStyle}>
            <thead style={tableTHTD}>
                <tr>
                    <th style={tableTHTD}>Date of Appointment</th>
                    <th style={tableTHTD}>ID</th>
                    <th style={tableTHTD}>Result</th>
                </tr>
            </thead>
            <tbody>
                {patInfoData.patInfo.value.map((patsInfo,i) => createPatRow(patsInfo,i))}
            </tbody>    
        </table>)
    }

    if(patInfoData && patInfoData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading patinfo!
            </div>
        )
    }
        let dataToPass=ModalDataToBeDisplayed;
        console.log(dataToPass+"datatopass")//this seems like a bad way to do this because if it fails i cant display
    return(
        <div>
            <h1 style={titleStyle}>Patient Service Events</h1>
            {content}
            <RModalContainer/>
            
        </div>
    );
}

PatEventRender.propTypes = {
    PatInfoData: PropTypes.object//data={modalStuff} <button onClick={call1} >Butt1</button>//<button onClick={call2} >Butt2</button> 
};

export default PatEventRender;
