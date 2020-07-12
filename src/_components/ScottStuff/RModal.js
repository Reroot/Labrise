"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import ModalDataContainer from './ModalDataContainer';

const RModal = ({ active,onClick}) => {
    //debugger;
    const myModalContent= {
        'backgroundColor': '#fefefe',
        'margin': "15% auto", /* 15% from the top and centered */
        'padding': '20px',
        'border': '1px solid #888',
        'width': '80%' /* Could be more or less, depending on screen size */
      };
    const myModal={ 
            'display': 'none',  /*Hidden by default */
            'position': 'fixed',/* Stay in place */
            'zIndex': '1', /* Sit on top */
            'left': '0',
            'top': '0',
            'width': '100%', /* Full width */
            'height': '100%', /* Full height */
            'overflow': 'auto', /* Enable scroll if needed */
            'backgroundColor': 'rgb(0,0,0)', /* Fallback color */
            'backgroundColor':'rgba(0,0,0,0.4)'
    }

    const myModalClose={
            'color': '#aaa',
            'float': 'right',
            'fontSize': '28px',
            'fontWeight': 'bold'
    }
 
    myModal.display=active;
    let content = '';


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