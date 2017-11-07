Highcharts.chart('container_apnic', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Number of APNIC transfers'
    },
    subtitle: {
        text: 'Source: APNIC' +
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
            [Date.UTC(2010, 11, 1), 2], [Date.UTC(2011, 1, 1), 3], [Date.UTC(2011, 3, 1), 1], [Date.UTC(2011, 4, 1), 3], [Date.UTC(2011, 5, 1), 7], [Date.UTC(2011, 6, 1), 3], [Date.UTC(2011, 7, 1), 2], [Date.UTC(2011, 8, 1), 14], [Date.UTC(2011, 9, 1), 24], [Date.UTC(2011, 10, 1), 5], [Date.UTC(2011, 11, 1), 5], [Date.UTC(2011, 12, 1), 10], [Date.UTC(2012, 1, 1), 19], [Date.UTC(2012, 2, 1), 7], [Date.UTC(2012, 3, 1), 11], [Date.UTC(2012, 4, 1), 8], [Date.UTC(2012, 5, 1), 19], [Date.UTC(2012, 6, 1), 3], [Date.UTC(2012, 7, 1), 20], [Date.UTC(2012, 8, 1), 29], [Date.UTC(2012, 9, 1), 3], [Date.UTC(2012, 10, 1), 22], [Date.UTC(2012, 11, 1), 5], [Date.UTC(2012, 12, 1), 11], [Date.UTC(2013, 1, 1), 18], [Date.UTC(2013, 2, 1), 7], [Date.UTC(2013, 3, 1), 8], [Date.UTC(2013, 4, 1), 11], [Date.UTC(2013, 5, 1), 12], [Date.UTC(2013, 6, 1), 44], [Date.UTC(2013, 7, 1), 5], [Date.UTC(2013, 8, 1), 19], [Date.UTC(2013, 9, 1), 11], [Date.UTC(2013, 10, 1), 10], [Date.UTC(2013, 11, 1), 12], [Date.UTC(2013, 12, 1), 14], [Date.UTC(2014, 1, 1), 19], [Date.UTC(2014, 2, 1), 22], [Date.UTC(2014, 3, 1), 45], [Date.UTC(2014, 4, 1), 31], [Date.UTC(2014, 5, 1), 8], [Date.UTC(2014, 6, 1), 44], [Date.UTC(2014, 7, 1), 19], [Date.UTC(2014, 8, 1), 8], [Date.UTC(2014, 9, 1), 13], [Date.UTC(2014, 10, 1), 13], [Date.UTC(2014, 11, 1), 14], [Date.UTC(2014, 12, 1), 13], [Date.UTC(2015, 1, 1), 17], [Date.UTC(2015, 2, 1), 16], [Date.UTC(2015, 3, 1), 70], [Date.UTC(2015, 4, 1), 67], [Date.UTC(2015, 5, 1), 18], [Date.UTC(2015, 6, 1), 45], [Date.UTC(2015, 7, 1), 17], [Date.UTC(2015, 8, 1), 14], [Date.UTC(2015, 9, 1), 19], [Date.UTC(2015, 10, 1), 35], [Date.UTC(2015, 11, 1), 15], [Date.UTC(2015, 12, 1), 34], [Date.UTC(2016, 1, 1), 23], [Date.UTC(2016, 2, 1), 220], [Date.UTC(2016, 3, 1), 38], [Date.UTC(2016, 4, 1), 30], [Date.UTC(2016, 5, 1), 18], [Date.UTC(2016, 6, 1), 25], [Date.UTC(2016, 7, 1), 24], [Date.UTC(2016, 8, 1), 16], [Date.UTC(2016, 9, 1), 11]
        ]
    }, {
        name: 'IPv4s',
        type: 'spline',
        tooltip: {
            valueSuffix: ' IPs'
        },
        data: [
            [Date.UTC(2010, 11, 1), 2304], [Date.UTC(2011, 1, 1), 6144], [Date.UTC(2011, 3, 1), 256], [Date.UTC(2011, 4, 1), 2560], [Date.UTC(2011, 5, 1), 17408], [Date.UTC(2011, 6, 1), 24576], [Date.UTC(2011, 7, 1), 1280], [Date.UTC(2011, 8, 1), 105728], [Date.UTC(2011, 9, 1), 159488], [Date.UTC(2011, 10, 1), 1196032], [Date.UTC(2011, 11, 1), 68352], [Date.UTC(2011, 12, 1), 24064], [Date.UTC(2012, 1, 1), 385536], [Date.UTC(2012, 2, 1), 139776], [Date.UTC(2012, 3, 1), 58368], [Date.UTC(2012, 4, 1), 73472], [Date.UTC(2012, 5, 1), 5120], [Date.UTC(2012, 6, 1), 74752], [Date.UTC(2012, 7, 1), 73472], [Date.UTC(2012, 8, 1), 150528], [Date.UTC(2012, 9, 1), 131840], [Date.UTC(2012, 10, 1), 445696], [Date.UTC(2012, 11, 1), 51456], [Date.UTC(2012, 12, 1), 221440], [Date.UTC(2013, 1, 1), 77824], [Date.UTC(2013, 2, 1), 86016], [Date.UTC(2013, 3, 1), 100864], [Date.UTC(2013, 4, 1), 97792], [Date.UTC(2013, 5, 1), 212480], [Date.UTC(2013, 6, 1), 175872], [Date.UTC(2013, 7, 1), 94208], [Date.UTC(2013, 8, 1), 199680], [Date.UTC(2013, 9, 1), 34560], [Date.UTC(2013, 10, 1), 111616], [Date.UTC(2013, 11, 1), 86272], [Date.UTC(2013, 12, 1), 138240], [Date.UTC(2014, 1, 1), 103936], [Date.UTC(2014, 2, 1), 658176], [Date.UTC(2014, 3, 1), 250624], [Date.UTC(2014, 4, 1), 457472], [Date.UTC(2014, 5, 1), 21248], [Date.UTC(2014, 6, 1), 401152], [Date.UTC(2014, 7, 1), 266496], [Date.UTC(2014, 8, 1), 57344], [Date.UTC(2014, 9, 1), 282880], [Date.UTC(2014, 10, 1), 103424], [Date.UTC(2014, 11, 1), 56320], [Date.UTC(2014, 12, 1), 90368], [Date.UTC(2015, 1, 1), 35584], [Date.UTC(2015, 2, 1), 1064704], [Date.UTC(2015, 3, 1), 201984], [Date.UTC(2015, 4, 1), 141312], [Date.UTC(2015, 5, 1), 60672], [Date.UTC(2015, 6, 1), 428544], [Date.UTC(2015, 7, 1), 143616], [Date.UTC(2015, 8, 1), 36864], [Date.UTC(2015, 9, 1), 160512], [Date.UTC(2015, 10, 1), 126208], [Date.UTC(2015, 11, 1), 27648], [Date.UTC(2015, 12, 1), 92160], [Date.UTC(2016, 1, 1), 213760], [Date.UTC(2016, 2, 1), 388096], [Date.UTC(2016, 3, 1), 1103360], [Date.UTC(2016, 4, 1), 309504], [Date.UTC(2016, 5, 1), 94976], [Date.UTC(2016, 6, 1), 87808], [Date.UTC(2016, 7, 1), 1146624], [Date.UTC(2016, 8, 1), 89856], [Date.UTC(2016, 9, 1), 53504]
        ]
    }]
});
