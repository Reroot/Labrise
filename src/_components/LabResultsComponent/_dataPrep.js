/**************************************************************************
These functions will prepare the JSON data for plotting & aggregation
**************************************************************************/


// Filter the JSON based on some condition
export function FilterCondition(inputJSON, conditions) {
    let criteria;
    if      (Object.keys(conditions)[0] === 'test') {
        criteria = (row) => row.wc_test===conditions.test;
    }
    else if (Object.keys(conditions)[0] === 'date') {
        criteria = (row) => row.wc_orderdate===conditions.date;
    }
    const filtered = inputJSON.filter( criteria );
    return filtered;
}

// Parse the JSON into separate 'labels' and 'data'
//   Prepare the data for Line Chart
export function ParseLineData(inputJSON) {
    const dates = inputJSON.map( row => row.wc_orderdate );
    const min   = inputJSON.map( row => row.wc_min );
    const max   = inputJSON.map( row => row.wc_max );
    const value = inputJSON.map( row => row.wc_value );
    return {dates,min,max,value};
}

// Parse the JSON into separate 'labels' and 'data'
//   Prepare the data for Horizontal Bar Chart
export function ParseBarData(inputJSON) {
    const tests = inputJSON.map( row => row.wc_test );
    const scaledValue = inputJSON.map( row => row.wc_scaledvalue );
    return {tests,scaledValue};
}

// Method to aggregate/group by each Lab Order
//   This creates the data for the list of Lab Orders
//   The user can choose which LabReport to view from this list of Lab Orders
export function groupbyLabOrders(inputJSON, setOfDistinctDates) {
    let labOrders = [];

    // Group by each Lab Order date
    for (const date of setOfDistinctDates) {
        let rowData = {
            orderDate: "",
            doctor: "",
            numLow:  0,
            numHigh: 0
        };
        rowData.orderDate = date;
        rowData.doctor = inputJSON.find(row => row.wc_orderdate===date).wc_doctor;
        const orderResults = inputJSON.filter(row => row.wc_orderdate===date);
        const orderFlags = orderResults.map(row => row.wc_flag);

        // Count how many abnormal flags per Lab Order
        for (const flag of orderFlags) {
            if      (flag === "Low") {
                rowData.numLow++;
            }
            else if (flag === "High") {
                rowData.numHigh++;
            }
        }

        // Write the aggregated results into the list of Lab Orders
        labOrders.push(rowData);
    }
    return labOrders;
}
