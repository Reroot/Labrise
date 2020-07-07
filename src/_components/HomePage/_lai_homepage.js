/*****************************************************
This is the root Home Page component
*****************************************************/
import React from "react";
import { groupbyLabOrders } from "../LabResultsComponent/_dataPrep"
import {
    AlertBox, AlertAccordion, 
    InfoCard, DropupMenu, 
    ImageOverlay, WelcomeBanner
} from "./_lai_homePieces";


// Define the root Home Page component
export function HomePage(props) {

    const profile_Data = props.profile_Data.pData.value;   //---> array of 1 row
    const lab_Data = props.labResults_Data.labData.value;  //---> array of 42 rows
    const patientName = profile_Data[0]["firstname"];

    // Function for summarizing the newest Lab Order
    function newestLabOrder(inputJSON) {
        
        // Find the date of the newest Lab Order
        const setOfDistinctDates = [...new Set( inputJSON.map( row=>row.wc_orderdate ) )];
        const newestOrderDate = setOfDistinctDates[ setOfDistinctDates.length - 1 ];
        
        // Summarize the newest Lab Order
        const newestLabOrder = groupbyLabOrders(inputJSON, [newestOrderDate]);

        return newestLabOrder;
    }

    // The Lab Order summary object contains:
    //   1) Order Date ---------------> .orderDate
    //   2) Doctor Name --------------> .doctor
    //   3) Abnormal Results: Low ----> .numLow
    //   4) Abnormal Results: High ---> .numHigh
    const labSummary = newestLabOrder(lab_Data)[0];
    

    return (
        <div className="background home-grid">
            
            {/* .....the Welcome Banner..... */}
            <div className="home-banner">
                <WelcomeBanner>
                    <h1>
                        Hello, <span>{patientName}</span>
                    </h1>
                    <h3>
                        Welcome to your Patient Portal
                    </h3>
                </WelcomeBanner>
            </div>


            {/* .....the Health Alerts..... */}
            <div className="home-accordion">
                <AlertAccordion>
                    <AlertBox color="orange">
                        <b>COVID-19</b> is a rapidly evolving situation.
                        <br/>
                        Stay up-to-date with the status of the coronavirus pandemic, by viewing the latest data.
                    </AlertBox>
                    <AlertBox color="red">
                        Your most recent Lab Order, dated {labSummary.orderDate}, returned 
                        some <b>Abnormal Results</b> ({labSummary.numLow} Low, {labSummary.numHigh} High). 
                        <br/>
                        Please consult your doctor, {labSummary.doctor}, to discuss your treatment options.
                    </AlertBox>
                </AlertAccordion>
            </div>
            

            {/* .....the Links to other Patient Portal features..... */}
            <div className="home-menuHealth">
                <ImageOverlay icon="plus_icon">
                    <DropupMenu title="Understand Your Health">
                        <InfoCard linkTo="labReports">
                            <p>Lab Reports</p>
                            <ul>
                                <li>View a summary of your recent Lab Reports.  Each Lab Report is summarized 
                                    to show you how many <b>Abnormal Results</b> were found.</li>
                                <li>Click on a specific date to view a <b>detailed Lab Report</b>, listing all of the 
                                    blood tests that were performed.</li>
                            </ul>
                        </InfoCard>
                        
                        <InfoCard linkTo="dashboard">
                            <p>Dashboard</p>
                            <ul>
                                <li>Explore your interactive lab results Dashboard.  The healthy range of result 
                                    values is <b>highlighted in grey</b>.</li>
                                <li>Track your health over time with the <b>Line Chart</b>.  See your health 
                                    status at a glance with the <b>Tornado Chart</b>.</li>
                            </ul>
                        </InfoCard>
                        
                        <InfoCard linkTo="covid-19">
                            <p>COVID-19</p>
                            <ul>
                                <li>See up-to-date data regarding the status of the <b>coronavirus pandemic</b>. 
                                    Critical information, such as the number of Positive Cases, is shown.</li>
                                <li>COVID-19 status data is available for both <b>the entire nation</b>, as 
                                    well as <b>your local state</b>.</li>
                            </ul>
                        </InfoCard>
                    </DropupMenu>
                </ImageOverlay>
            </div>
            
            <div className="home-menuAccount">
                <ImageOverlay icon="caduceus_icon">
                    <DropupMenu title="Manage Your Account">
                        <InfoCard linkTo="invoices">
                            <p>Invoices</p>
                            <ul>
                                <li>Review a list of your unpaid Invoices, along with 
                                    any <b>outstanding balances</b>.</li>
                                <li>For your convenience, you may use the secure <b>PayPal Checkout</b> button 
                                    that is provided, to remit your payment.</li>
                            </ul>
                        </InfoCard>
                        
                        <InfoCard linkTo="appointments">
                            <p>Appointments</p>
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </InfoCard>
                        
                        <InfoCard linkTo="profile">
                            <p>User Profile</p>
                            <ul>
                                <li>Verify the accuracy of your personal profile.  To better 
                                    serve you, we need your <b>most current information</b>.</li>
                                <li>If your contact information has changed, please <b>update your profile</b>. We 
                                    use the information listed in your profile as the primary form of contact.</li>
                            </ul>
                        </InfoCard>
                    </DropupMenu>
                </ImageOverlay>
            </div>
            
        </div>
    );
}
