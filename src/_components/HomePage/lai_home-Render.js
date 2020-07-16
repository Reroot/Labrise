/****************************************************************************
This defines how the Home Page should be rendered in the UI view
****************************************************************************/
import React from "react";
import { HomePage } from "./_lai_homepage";


// Render the Home Page
export const HomePage_Render = (props) => {

    ////////    profile_Data.pData.value       ---> array of 1 row
    ////////    labResults_Data.labData.value  ---> array of 42 rows
    const profile_Data = props.profileData;
    const labResults_Data = props.labResults_Data;
    const all_Data = { profile_Data, labResults_Data };
    let content = "";

    // Render this for the status:  read Pending
    if (!profile_Data || profile_Data.requestPending || !labResults_Data || labResults_Data.requestPending) {
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading....</span>
                </div> 
            </div>
        );
    }
    
    // Render this for the status:  read Successful
    if (profile_Data && profile_Data.requestSuccessful && labResults_Data && labResults_Data.requestSuccessful) {
        content = (
            <HomePage {...all_Data}/>
        );
    }

    // Render this for the status:  read Failed
    if (profile_Data && profile_Data.requestFailed && labResults_Data && labResults_Data.requestFailed) {
        content = (
            <div className="alert alert-danger" role="alert">
                Error while loading the Home Page!
            </div>
        );
    }
    
    return (
        <div>
            {content}
        </div>
    );
}
