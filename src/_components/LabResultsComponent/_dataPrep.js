/************************************************************
These functions will prepare the JSON data for plotting
************************************************************/


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
