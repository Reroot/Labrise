"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as coronaActions from '../../../_actions/coronaActions';
import CoronaRender from './CoronaRender';
import { ThemeProvider, useTheme } from '@material-ui/core';
import CustomTheme from '../../../MUITheme';

const Corona = (props) => {

    useEffect(() => {
        const { actions } = props;
        const coronaParams = {state: "US", date: null};
        actions.readCoronaData(coronaParams);
    }, [] );
   
    return(
        <div>

            <ThemeProvider theme={CustomTheme}>
                <CoronaRender {...props} />
            </ThemeProvider>

        </div>
    );
}

function mapStateToProps(state){
    return {
        coronaData: state.coronaReducer.coronaData
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(coronaActions, dispatch)
    }
}

Corona.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(Corona);
