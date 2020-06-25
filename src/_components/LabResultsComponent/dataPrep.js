/************************************************************
These functions will prepare the JSON data for plotting
************************************************************/

/*
// Define an asynchronous function to retrieve the JSON data
async function GetJSON(dataPath) {
    // Read in the raw JSON data, from a given resource path
    const response = await fetch(dataPath);
    const rawJSON = await response.json();
    return rawJSON;
}
*/

// Filter the JSON based on some condition
export function FilterCondition(inputJSON, conditions) {
    let criteria;
    if      (Object.keys(conditions)[1] === 'test') {
        criteria = (row) => row.patient===conditions.patient 
                            && row.test===conditions.test;
    }
    else if (Object.keys(conditions)[1] === 'date') {
        criteria = (row) => row.patient===conditions.patient 
                            && row.orderDate===conditions.date;
    }
    const filtered = inputJSON.filter(criteria);
    return filtered;
}

// Parse the JSON into separate 'labels' and 'data'
//   Prepare the data for Line Chart
export function ParseLineData(inputJSON) {
    const dates = inputJSON.map( row => row.orderDate );
    const min   = inputJSON.map( row => row.min );
    const max   = inputJSON.map( row => row.max );
    const value = inputJSON.map( row => row.value );
    return {dates,min,max,value};
}

// Parse the JSON into separate 'labels' and 'data'
//   Prepare the data for Horizontal Bar Chart
export function ParseBarData(inputJSON) {
    const tests = inputJSON.map( row => row.test );
    const scaledValue = inputJSON.map( row => row.scaledValue );
    return {tests,scaledValue};
}

/*
let arrSum = arr => arr.reduce((a,b) => a + b, 0);
console.log('Sum:  ', arrSum(junk.map(x => x.age)));

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
console.log('Avg:  ', arrAvg(junk.map(x => x.age)));
*/
