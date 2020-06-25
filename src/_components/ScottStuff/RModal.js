"use strict"

import React from 'react';
import PropTypes from 'prop-types';
//import ModalData from './ModalData';
import ModalDataContainer from './ModalDataContainer';

const RModal = ({ active,onClick,data }) => {
    //debugger;
    const myModalContent= {
        'background-color': '#fefefe',
        'margin': "15% auto", /* 15% from the top and centered */
        'padding': '20px',
        'border': '1px solid #888',
        'width': '80%' /* Could be more or less, depending on screen size */
      };
    const myModal={ 
            'display': 'none',  /*Hidden by default */
            'position': 'fixed',/* Stay in place */
            'z-index': '1', /* Sit on top */
            'left': '0',
            'top': '0',
            'width': '100%', /* Full width */
            'height': '100%', /* Full height */
            'overflow': 'auto', /* Enable scroll if needed */
            'background-color': 'rgb(0,0,0)', /* Fallback color */
            'background-color':'rgba(0,0,0,0.4)'
    }

    const myModalClose={
            'color': '#aaa',
            'float': 'right',
            'font-size': '28px',
            'font-weight': 'bold'
    }
    console.log(JSON.stringify(active))
    console.log("before"+myModal.display);
    myModal.display=active;//I previously had active in {}, perhaps this input the whole oject or soemthing
    //console.log("after"+JSON.stringify(myModal.display));
    //console.log("how the style looks:" +JSON.stringify(myModal));
    //myModal.display=myModal.display.active;
    //console.log("how the style looks:" +JSON.stringify(myModal));
    let content = '';

    //console.log("debugxxxx67"+JSON.stringify(patInfoData));
    console.log("in  modal" +JSON.stringify(data));
    return(
        <div style={myModal}>

        
        <div style={myModalContent}>
        <button style={myModalClose} onClick={onClick} >&times;</button>
        <ModalDataContainer/>
        </div>
        </div>
    );
}
 

export default RModal;