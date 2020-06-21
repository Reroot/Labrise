/*********************************************
These are some basic charts using Chart.JS
*********************************************/
import React from 'react';
import {HorizontalBar,Line} from 'react-chartjs-2';

// Create the LineChart component
export function LineChart(props) {
    return (
        <div className="Chart-background">
            <Line data={props.data}
                options={{
                    title:{display:true, text:props.test, fontSize:28},
                    legend:{display:true, position:'right',
                        labels:{filter: function(legendItem,data) {return legendItem.datasetIndex!==2;}}
                    },
                    scales:{
                        yAxes:[{offset:true,
                            scaleLabel:{display:true, fontSize:20,
                                labelString:props.units}}],
                        xAxes:[{offset:false,
                            scaleLabel:{display:true, fontSize:20,
                                labelString:'Lab Order Date'}}]
                    },
                    maintainAspectRatio:false
                }}
                getElementAtEvent={props.click}
            />
        </div>
    );
}

// Create the TornadoChart component
export function TornadoChart(props) {
    return (
        <div className="Chart-background">
            <HorizontalBar data={props.data}
                options={{
                    title:{display:true, text:props.date, fontSize:28},
                    legend:{display:false},
                    scales:{
                        yAxes:[{offset:true,
                            }],
                        xAxes:[{offset:false,
                            ticks:{suggestedMin:-1.5,suggestedMax:1.6},
                            scaleLabel:{display:true, fontSize:20,
                                labelString:'Standardized Result Value'}}]
                    },
                    tooltips:{filter: function(tooltipItem,data) {return tooltipItem.datasetIndex===0;}},
                    maintainAspectRatio:false,
                }}
                getElementAtEvent={props.click}
            />
        </div>
    );
}
