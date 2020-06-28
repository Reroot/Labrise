
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import  Will_Component from "../Will_Component/Will_Component";
// import  Scott_Component from "../Scott_Component/Scott_Component";
import  Rory_Component from "../Rory_Component/Rory_Component";
// import  Kevin_Component from "../Kevin_Component/Kevin_Component";
// import  Artem_Component from "../Artem_Component/Artem_Component";
import Pay from "../PayComponent/Pay";

export class PatientPage extends React.Component{
    render(){
        //const user = useSelector(state => state.authentication.user);
        return (
            <div className="col-lg-8 offset-lg-2">
                {/* <h2>Welcome {user.firstName + " " + user.lastName}</h2> */}
                <h2>Welcome!</h2>
                <title>Review your patient history below</title>
                <Link to="/">Home</Link>
                <Rory_Component />
                <Pay />
                {/* <Will_Component />
                <Scott_Component />
                // <Rory_Component />
                <Kevin_Component />
                <Artem_Component /> */}
            </div>
        );    
    }
}

// export { PatientPage };
