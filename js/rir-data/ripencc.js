Highcharts.chart('container_ripencc', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Number of RIPE NCC transfers'
    },
    subtitle: {
        text: 'Source: RIPE NCC' +
        '<br />' +
        'Except 185./8 block'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            millisecond: '%Y %b',
            second: '%Y %b',
            minute: '%Y %b',
            hour: '%Y %b',
            day: '%Y %b',
            week: '%Y %b',
            month: '%Y %b',
            year: '%Y %b'
        },
        //title: {
        //  text: 'Date'
        //},
        crosshair: true
    },
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} IPs',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'IPv4 Addresses transfered',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'IPv4 Prefixes transfered',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        //x: 120,
        verticalAlign: 'top',
        //y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Prefixes',
        type: 'column',
        yAxis: 1,
        tooltip: {
            valueSuffix: ' prefixes'
        },
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: [
            [Date.UTC(2012, 10, 1), 2], [Date.UTC(2012, 11, 1), 7], [Date.UTC(2012, 12, 1), 1], [Date.UTC(2013, 1, 1), 10], [Date.UTC(2013, 2, 1), 7], [Date.UTC(2013, 3, 1), 3], [Date.UTC(2013, 4, 1), 7], [Date.UTC(2013, 5, 1), 22], [Date.UTC(2013, 6, 1), 11], [Date.UTC(2013, 7, 1), 10], [Date.UTC(2013, 8, 1), 17], [Date.UTC(2013, 9, 1), 12], [Date.UTC(2013, 10, 1), 25], [Date.UTC(2013, 11, 1), 23], [Date.UTC(2013, 12, 1), 17], [Date.UTC(2014, 1, 1), 20], [Date.UTC(2014, 2, 1), 44], [Date.UTC(2014, 3, 1), 59], [Date.UTC(2014, 4, 1), 49], [Date.UTC(2014, 5, 1), 51], [Date.UTC(2014, 6, 1), 23], [Date.UTC(2014, 7, 1), 54], [Date.UTC(2014, 8, 1), 94], [Date.UTC(2014, 9, 1), 41], [Date.UTC(2014, 10, 1), 103], [Date.UTC(2014, 11, 1), 162], [Date.UTC(2014, 12, 1), 225], [Date.UTC(2015, 1, 1), 152], [Date.UTC(2015, 2, 1), 369], [Date.UTC(2015, 3, 1), 285], [Date.UTC(2015, 4, 1), 209], [Date.UTC(2015, 5, 1), 152], [Date.UTC(2015, 6, 1), 317], [Date.UTC(2015, 7, 1), 185], [Date.UTC(2015, 8, 1), 198], [Date.UTC(2015, 9, 1), 196], [Date.UTC(2015, 10, 1), 194], [Date.UTC(2015, 11, 1), 153], [Date.UTC(2015, 12, 1), 166], [Date.UTC(2016, 1, 1), 134], [Date.UTC(2016, 2, 1), 130], [Date.UTC(2016, 3, 1), 147], [Date.UTC(2016, 4, 1), 97], [Date.UTC(2016, 5, 1), 157], [Date.UTC(2016, 6, 1), 217], [Date.UTC(2016, 7, 1), 281], [Date.UTC(2016, 8, 1), 155], [Date.UTC(2016, 9, 1), 70]
        ]
    }, {
        name: 'IPv4s',
        type: 'spline',
        tooltip: {
            valueSuffix: ' IPs'
        },
        data: [
            [Date.UTC(2012, 10, 1), 17408], [Date.UTC(2012, 11, 1), 46080], [Date.UTC(2012, 12, 1), 2048], [Date.UTC(2013, 1, 1), 40960], [Date.UTC(2013, 2, 1), 22528], [Date.UTC(2013, 3, 1), 75776], [Date.UTC(2013, 4, 1), 90112], [Date.UTC(2013, 5, 1), 393216], [Date.UTC(2013, 6, 1), 82944], [Date.UTC(2013, 7, 1), 418816], [Date.UTC(2013, 8, 1), 169984], [Date.UTC(2013, 9, 1), 116736], [Date.UTC(2013, 10, 1), 239616], [Date.UTC(2013, 11, 1), 244736], [Date.UTC(2013, 12, 1), 74752], [Date.UTC(2014, 1, 1), 259072], [Date.UTC(2014, 2, 1), 548864], [Date.UTC(2014, 3, 1), 234496], [Date.UTC(2014, 4, 1), 370688], [Date.UTC(2014, 5, 1), 857088], [Date.UTC(2014, 6, 1), 253952], [Date.UTC(2014, 7, 1), 851968], [Date.UTC(2014, 8, 1), 1287168], [Date.UTC(2014, 9, 1), 488448], [Date.UTC(2014, 10, 1), 1152256], [Date.UTC(2014, 11, 1), 1918976], [Date.UTC(2014, 12, 1), 1290496], [Date.UTC(2015, 1, 1), 532992], [Date.UTC(2015, 2, 1), 984320], [Date.UTC(2015, 3, 1), 577792], [Date.UTC(2015, 4, 1), 633856], [Date.UTC(2015, 5, 1), 872960], [Date.UTC(2015, 6, 1), 349952], [Date.UTC(2015, 7, 1), 1503488], [Date.UTC(2015, 8, 1), 475904], [Date.UTC(2015, 9, 1), 893696], [Date.UTC(2015, 10, 1), 342016], [Date.UTC(2015, 11, 1), 323072], [Date.UTC(2015, 12, 1), 906240], [Date.UTC(2016, 1, 1), 262912], [Date.UTC(2016, 2, 1), 609536], [Date.UTC(2016, 3, 1), 404736], [Date.UTC(2016, 4, 1), 256512], [Date.UTC(2016, 5, 1), 579328], [Date.UTC(2016, 6, 1), 797440], [Date.UTC(2016, 7, 1), 555776], [Date.UTC(2016, 8, 1), 725760], [Date.UTC(2016, 9, 1), 171264]
        ]
    }]
});
