Highcharts.chart('container_arin', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Number of ARIN transfers'
    },
    subtitle: {
        text: 'Source: ARIN' +
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
        crosshair:
            true
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
    tooltip:
        {
            shared: true
        }
    ,
    legend: {
        layout: 'vertical',
        align:
            'left',
        //x: 120,
        verticalAlign:
            'top',
        //y: 100,
        floating:
            true,
        backgroundColor:
        (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    }
    ,
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
            [Date.UTC(2009, 10, 1), 1], [Date.UTC(2009, 11, 1), 1], [Date.UTC(2009, 12, 1), 18], [Date.UTC(2010, 6, 1), 2], [Date.UTC(2011, 1, 1), 2], [Date.UTC(2011, 2, 1), 3], [Date.UTC(2011, 5, 1), 2], [Date.UTC(2011, 6, 1), 1], [Date.UTC(2011, 8, 1), 40], [Date.UTC(2011, 9, 1), 1], [Date.UTC(2011, 10, 1), 1], [Date.UTC(2011, 12, 1), 3], [Date.UTC(2012, 2, 1), 8], [Date.UTC(2012, 3, 1), 3], [Date.UTC(2012, 4, 1), 2], [Date.UTC(2012, 5, 1), 6], [Date.UTC(2012, 7, 1), 1], [Date.UTC(2012, 8, 1), 2], [Date.UTC(2012, 9, 1), 2], [Date.UTC(2012, 11, 1), 3], [Date.UTC(2013, 1, 1), 2], [Date.UTC(2013, 2, 1), 5], [Date.UTC(2013, 3, 1), 2], [Date.UTC(2013, 5, 1), 1], [Date.UTC(2013, 6, 1), 3], [Date.UTC(2013, 10, 1), 3], [Date.UTC(2013, 11, 1), 4], [Date.UTC(2013, 12, 1), 10], [Date.UTC(2014, 2, 1), 5], [Date.UTC(2014, 4, 1), 6], [Date.UTC(2014, 5, 1), 1], [Date.UTC(2014, 6, 1), 21], [Date.UTC(2014, 7, 1), 5], [Date.UTC(2014, 8, 1), 2], [Date.UTC(2014, 9, 1), 4], [Date.UTC(2014, 10, 1), 2], [Date.UTC(2014, 11, 1), 7], [Date.UTC(2014, 12, 1), 6], [Date.UTC(2015, 1, 1), 8], [Date.UTC(2015, 2, 1), 7], [Date.UTC(2015, 3, 1), 13], [Date.UTC(2015, 4, 1), 13], [Date.UTC(2015, 5, 1), 9], [Date.UTC(2015, 6, 1), 34], [Date.UTC(2015, 7, 1), 8], [Date.UTC(2015, 8, 1), 26], [Date.UTC(2015, 9, 1), 21], [Date.UTC(2015, 10, 1), 32], [Date.UTC(2015, 11, 1), 50], [Date.UTC(2015, 12, 1), 39], [Date.UTC(2016, 1, 1), 43], [Date.UTC(2016, 2, 1), 63], [Date.UTC(2016, 3, 1), 49], [Date.UTC(2016, 4, 1), 81], [Date.UTC(2016, 5, 1), 62], [Date.UTC(2016, 6, 1), 68], [Date.UTC(2016, 7, 1), 59]
        ]
    }, {
        name: 'IPv4s',
        type: 'spline',
        tooltip: {
            valueSuffix: ' IPs'
        },
        data: [
            [Date.UTC(2009, 10, 1), 2048], [Date.UTC(2009, 11, 1), 4096], [Date.UTC(2009, 12, 1), 11264], [Date.UTC(2010, 6, 1), 8192], [Date.UTC(2011, 1, 1), 512], [Date.UTC(2011, 2, 1), 66048], [Date.UTC(2011, 5, 1), 512], [Date.UTC(2011, 6, 1), 8192], [Date.UTC(2011, 8, 1), 671744], [Date.UTC(2011, 9, 1), 65536], [Date.UTC(2011, 10, 1), 4096], [Date.UTC(2011, 12, 1), 1115136], [Date.UTC(2012, 2, 1), 806912], [Date.UTC(2012, 3, 1), 1116160], [Date.UTC(2012, 4, 1), 131328], [Date.UTC(2012, 5, 1), 1118208], [Date.UTC(2012, 7, 1), 2048], [Date.UTC(2012, 8, 1), 540672], [Date.UTC(2012, 9, 1), 81920], [Date.UTC(2012, 11, 1), 1064960], [Date.UTC(2013, 1, 1), 73728], [Date.UTC(2013, 2, 1), 921856], [Date.UTC(2013, 3, 1), 3072], [Date.UTC(2013, 5, 1), 1024], [Date.UTC(2013, 6, 1), 1060864], [Date.UTC(2013, 10, 1), 196608], [Date.UTC(2013, 11, 1), 2686976], [Date.UTC(2013, 12, 1), 184320], [Date.UTC(2014, 2, 1), 22016], [Date.UTC(2014, 4, 1), 38656], [Date.UTC(2014, 5, 1), 512], [Date.UTC(2014, 6, 1), 1626112], [Date.UTC(2014, 7, 1), 3072], [Date.UTC(2014, 8, 1), 131072], [Date.UTC(2014, 9, 1), 106496], [Date.UTC(2014, 10, 1), 1052672], [Date.UTC(2014, 11, 1), 444672], [Date.UTC(2014, 12, 1), 1320192], [Date.UTC(2015, 1, 1), 4206336], [Date.UTC(2015, 2, 1), 4212224], [Date.UTC(2015, 3, 1), 2966784], [Date.UTC(2015, 4, 1), 517632], [Date.UTC(2015, 5, 1), 676352], [Date.UTC(2015, 6, 1), 277248], [Date.UTC(2015, 7, 1), 18432], [Date.UTC(2015, 8, 1), 4848896], [Date.UTC(2015, 9, 1), 5556736], [Date.UTC(2015, 10, 1), 2369024], [Date.UTC(2015, 11, 1), 8422912], [Date.UTC(2015, 12, 1), 70400], [Date.UTC(2016, 1, 1), 317440], [Date.UTC(2016, 2, 1), 352512], [Date.UTC(2016, 3, 1), 1248000], [Date.UTC(2016, 4, 1), 635648], [Date.UTC(2016, 5, 1), 176384], [Date.UTC(2016, 6, 1), 229632], [Date.UTC(2016, 7, 1), 180992]
        ]
    }]
})
;
