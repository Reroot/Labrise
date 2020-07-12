/***********************************************************************************
These are some modular pieces that are used to assemble the Home Page component
***********************************************************************************/
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Import some Material UI icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
import TocIcon from "@material-ui/icons/Toc";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AccountBoxIcon from "@material-ui/icons/AccountBox";


// This is an Alert Box component, for displaying alert messages
// The input 'props' include:
//   1) the color theme of the Alert Box
//   2) the text content to be displayed
export function AlertBox(props) {

    // Dynamically style the Alert Box
    let boxStyle = {};
    let iconStyle = { fontSize: 50 };
    let iconType = "";
    if      (props.color === "red") {
        boxStyle = {
            borderLeft: "12px solid red",
            backgroundColor: "rgb(255, 198, 231)",
            color: "rgb(126, 7, 7)"
        };
        iconStyle.color = "red";
        iconType = ( <ErrorOutlineIcon style={iconStyle}/> );
    }
    else if (props.color === "orange") {
        boxStyle = {
            borderLeft: "12px solid orange",
            backgroundColor: "rgb(255, 232, 198)",
            color: "rgb(126, 78, 7)"
        };
        iconStyle.color = "orange";
        iconType = ( <WarningIcon style={iconStyle}/> );
    }
    
    return (
        <div className="Alert-box" style={boxStyle}>
            <div>
                {iconType}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

// This is an Info Card component, for displaying feature descriptions/links
// The input 'props' for the Info Card component are:
//   1) the feature that the Info Card should link to
//   2) the text content to be displayed
export function InfoCard(props) {

    // Style the Navigation icon
    const iconStyle = {
        color: "white",
        fontSize: 30
    }
    
    // Dynamically assign the links to other features
    let iconType = "";
    let linkString = "";
    let borderStyle = {
        borderTop: "6px solid rgb(0, 230, 0)"
    };

    switch (props.linkTo) {
        case "labReports":
            iconType = ( <TocIcon style={iconStyle}/> );
            linkString = "/labreports";
            break;
        case "dashboard":
            iconType = ( <TrendingUpIcon style={iconStyle}/> );
            linkString = "/dashboard";
            break;
        case "covid-19":
            iconType = ( <BubbleChartIcon style={iconStyle}/> );
            linkString = "/corona";
            break;
        case "invoices":
            iconType = ( <AttachMoneyIcon style={iconStyle}/> );
            linkString = "/patient";
            break;
        case "appointments":
            iconType = ( <ScheduleIcon style={iconStyle}/> );
            linkString = "/appointments";
            break;
        case "profile":
            iconType = ( <AccountBoxIcon style={iconStyle}/> );
            linkString = "/profile";
            break;
        default:
            iconType = ( <WarningIcon style={iconStyle}/> );
            linkString = ".....invalid Link.....";
    }
    
    return (
        <div>
            <Link className="Info-card" to={linkString}>
                <div>
                    {iconType}
                </div>
                <div style={borderStyle}>
                    {props.children}
                </div>
            </Link>
        </div>
    );
}

// This is an Alert Accordion component, used on the Home Page 
// to display Alert Box sub-components
export function AlertAccordion(props) {
    
    // Use some React Hooks to enable stateful functionality
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion-icon");
    const accordionContent = useRef(null);

    // Method to toggle the accordion, triggered on mouse-click
    function toggleAccordion() {
        setActiveState(
            setActive === "" ? "active" : ""
        );
        setHeightState(
            setActive === "active" ? "0px" : `${accordionContent.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
        );
    }

    return (
        <div className="shadow accordion-section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <span className="accordion-title">
                    <b>NOTICE:</b> &nbsp; Please click here to view 
                    your <b>important health alerts</b>....
                </span>
                <span className={`${setRotate}`}>+</span>
            </button>
            <div
                ref={accordionContent}
                style={{ maxHeight: `${setHeight}` }}
                className="shadow accordion-content"
            >
                {props.children}
            </div>
        </div>
    );
}

// This is a Dropup Menu component, used on the Home Page to 
// display Info Card descriptions/links to other website features
export function DropupMenu(props) {
    
    return (
        <div className="shadow dropup">
            <button className="dropup-button">
                {props.title}
            </button>
            <div className="shadow dropup-content">
                {props.children}
            </div>
        </div>
    );
}

// This is an Image Overlay component, used on the Home Page to 
// display two primary functional areas of the website
export function ImageOverlay(props) {
    
    // Choose which picture to display
    let imageSource = "";
    switch (props.icon) {
        case "plus_icon":
            imageSource = "../../../res/plus_icon.png"
            break;
        case "caduceus_icon":
            imageSource = "../../../res/caduceus_icon.png"
            break;
        default:
            imageSource = "....invalid image source...."
    }

    return (
        <div className="shadow image-container">
            <img src={imageSource} />
            <div className="image-content">
                {props.children}
            </div>
        </div>
    );
}

// This is a Welcome Banner component, used at the top of the 
// Home Page to welcome the patient to the Patient Portal
export function WelcomeBanner(props) {
    
    const imageSource = "../../../res/welcome_banner.jpg"

    return (
        <div className="welcome-container">
            <img src={imageSource} />
            <div className="welcome-content">
                {props.children}
            </div>
        </div>
    );
}
