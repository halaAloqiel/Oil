/*var stream = require("fs").createReadStream("oil.CSV")
var reader = require("readline").createInterface({ input: stream })
var arr = []
reader.on("line", (row) => { arr.push(row.split(",")) })
console.log(arr);
*/

document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chart1', {
        chart: {
            type: 'area'
        },

title: {
    text: ''
},

yAxis: {
    min: 6000,
    title: {
        text: ''
    }
},

xAxis: {
    accessibility: {
        rangeDescription: 'Range: 2010 to 2020'
    }
},



plotOptions: {
    series: {
        label: {
            connectorAllowed: false
        },
        pointStart: 2010
    }
},

series: [{
    name: 'Crude Oil Production',
    data: [8166, 9311, 9763, 9637,9713,10193, 10460, 9959, 10317, 9808,9213]
}],

responsive: {
    rules: [{
        condition: {
            maxWidth: 500,
        },

    }]
}

});
    });


    document.addEventListener('DOMContentLoaded', function () {
        Highcharts.chart('chart2', {
            chart: {
                type: 'column'
            },
    
    title: {
        text: ''
    },
    
    yAxis: {
        min : 5500,
        title: {
            text: ''
        }
    },
    
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2020'
        }
    },
    
    
    
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    
    series: [{
        name: 'Crude Oil Exports',
        data: [6644, 7218, 7556, 7570,7153,7163, 7463, 6968, 7371, 7038,6658]
    }],
    
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500,
            },
    
        }]
    }
    
    });
        });


        document.addEventListener('DOMContentLoaded', function () {
            Highcharts.chart('chart3', {
                chart: {
                    type: 'line'
                },
        
        title: {
            text: ''
        },
        
        yAxis: {
            title: {
                text: ''
            }
        },
        
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2020'
            }
        },
        
        
        
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        
        series: [{
            name: 'Crude Oil Demand',
            data: [2599, 2727,2873, 2994,3163,3319, 3210, 3272, 3105, 3199,3037]
        }],
        
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500,
                },
        
            }]
        }
        
        });
            });

            document.addEventListener('DOMContentLoaded', function () {
                Highcharts.chart('chart4', {
                    chart: {
                        type: 'column'
                    },
            
            title: {
                text: ''
            },
            
            yAxis: {
                min: 600,
                title: {
                    text: ''
                }
            },
            
            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2020'
                }
            },
            
            
            
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
            
            series: [{
                name: 'Refined Oil Export',
                data: [951, 902,862, 794,988,1155, 1503, 1438, 1971, 1300,1017]
            }],
            
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500,
                    },
            
                }]
            }
            
            });
                });