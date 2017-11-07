Highcharts.chart('container_rir', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Number of RIR transfers'
    },
    subtitle: {
        text: 'Source: RIPE NCC, APNIC, ARIN' +
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
            [Date.UTC(2009, 10, 1), 1], [Date.UTC(2009, 11, 1), 1], [Date.UTC(2009, 12, 1), 18], [Date.UTC(2010, 6, 1), 2], [Date.UTC(2010, 11, 1), 2], [Date.UTC(2011, 1, 1), 5], [Date.UTC(2011, 2, 1), 3], [Date.UTC(2011, 3, 1), 1], [Date.UTC(2011, 4, 1), 3], [Date.UTC(2011, 5, 1), 9], [Date.UTC(2011, 6, 1), 4], [Date.UTC(2011, 7, 1), 2], [Date.UTC(2011, 8, 1), 54], [Date.UTC(2011, 9, 1), 25], [Date.UTC(2011, 10, 1), 6], [Date.UTC(2011, 11, 1), 5], [Date.UTC(2011, 12, 1), 13], [Date.UTC(2012, 1, 1), 19], [Date.UTC(2012, 2, 1), 15], [Date.UTC(2012, 3, 1), 14], [Date.UTC(2012, 4, 1), 10], [Date.UTC(2012, 5, 1), 25], [Date.UTC(2012, 6, 1), 3], [Date.UTC(2012, 7, 1), 21], [Date.UTC(2012, 8, 1), 31], [Date.UTC(2012, 9, 1), 5], [Date.UTC(2012, 10, 1), 25], [Date.UTC(2012, 11, 1), 15], [Date.UTC(2012, 12, 1), 19], [Date.UTC(2013, 1, 1), 32], [Date.UTC(2013, 2, 1), 19], [Date.UTC(2013, 3, 1), 13], [Date.UTC(2013, 4, 1), 21], [Date.UTC(2013, 5, 1), 38], [Date.UTC(2013, 6, 1), 60], [Date.UTC(2013, 7, 1), 16], [Date.UTC(2013, 8, 1), 37], [Date.UTC(2013, 9, 1), 24], [Date.UTC(2013, 10, 1), 38], [Date.UTC(2013, 11, 1), 42], [Date.UTC(2013, 12, 1), 43], [Date.UTC(2014, 1, 1), 39], [Date.UTC(2014, 2, 1), 73], [Date.UTC(2014, 3, 1), 108], [Date.UTC(2014, 4, 1), 92], [Date.UTC(2014, 5, 1), 64], [Date.UTC(2014, 6, 1), 91], [Date.UTC(2014, 7, 1), 83], [Date.UTC(2014, 8, 1), 106], [Date.UTC(2014, 9, 1), 69], [Date.UTC(2014, 10, 1), 130], [Date.UTC(2014, 11, 1), 230], [Date.UTC(2014, 12, 1), 248], [Date.UTC(2015, 1, 1), 177], [Date.UTC(2015, 2, 1), 417], [Date.UTC(2015, 3, 1), 375], [Date.UTC(2015, 4, 1), 299], [Date.UTC(2015, 5, 1), 191], [Date.UTC(2015, 6, 1), 396], [Date.UTC(2015, 7, 1), 212], [Date.UTC(2015, 8, 1), 246], [Date.UTC(2015, 9, 1), 239], [Date.UTC(2015, 10, 1), 264], [Date.UTC(2015, 11, 1), 222], [Date.UTC(2015, 12, 1), 258], [Date.UTC(2016, 1, 1), 200], [Date.UTC(2016, 2, 1), 431], [Date.UTC(2016, 3, 1), 255], [Date.UTC(2016, 4, 1), 228], [Date.UTC(2016, 5, 1), 246], [Date.UTC(2016, 6, 1), 338], [Date.UTC(2016, 7, 1), 388], [Date.UTC(2016, 8, 1), 186], [Date.UTC(2016, 9, 1), 84]
        ]
    }, {
        name: 'IPv4s',
        type: 'spline',
        tooltip: {
            valueSuffix: ' IPs'
        },
        data: [
            [Date.UTC(2009, 10, 1), 2048], [Date.UTC(2009, 11, 1), 4096], [Date.UTC(2009, 12, 1), 11264], [Date.UTC(2010, 6, 1), 8192], [Date.UTC(2010, 11, 1), 2304], [Date.UTC(2011, 1, 1), 6656], [Date.UTC(2011, 2, 1), 66048], [Date.UTC(2011, 3, 1), 256], [Date.UTC(2011, 4, 1), 2560], [Date.UTC(2011, 5, 1), 17920], [Date.UTC(2011, 6, 1), 32768], [Date.UTC(2011, 7, 1), 1280], [Date.UTC(2011, 8, 1), 777472], [Date.UTC(2011, 9, 1), 225024], [Date.UTC(2011, 10, 1), 1200128], [Date.UTC(2011, 11, 1), 68352], [Date.UTC(2011, 12, 1), 1139200], [Date.UTC(2012, 1, 1), 385536], [Date.UTC(2012, 2, 1), 946688], [Date.UTC(2012, 3, 1), 1174528], [Date.UTC(2012, 4, 1), 204800], [Date.UTC(2012, 5, 1), 1123328], [Date.UTC(2012, 6, 1), 74752], [Date.UTC(2012, 7, 1), 75520], [Date.UTC(2012, 8, 1), 691200], [Date.UTC(2012, 9, 1), 213760], [Date.UTC(2012, 10, 1), 463360], [Date.UTC(2012, 11, 1), 1162496], [Date.UTC(2012, 12, 1), 225536], [Date.UTC(2013, 1, 1), 225280], [Date.UTC(2013, 2, 1), 1030400], [Date.UTC(2013, 3, 1), 179712], [Date.UTC(2013, 4, 1), 352256], [Date.UTC(2013, 5, 1), 804352], [Date.UTC(2013, 6, 1), 1389312], [Date.UTC(2013, 7, 1), 514048], [Date.UTC(2013, 8, 1), 370176], [Date.UTC(2013, 9, 1), 151808], [Date.UTC(2013, 10, 1), 547840], [Date.UTC(2013, 11, 1), 3091712], [Date.UTC(2013, 12, 1), 400384], [Date.UTC(2014, 1, 1), 363008], [Date.UTC(2014, 2, 1), 1295104], [Date.UTC(2014, 3, 1), 625408], [Date.UTC(2014, 4, 1), 892672], [Date.UTC(2014, 5, 1), 1469184], [Date.UTC(2014, 6, 1), 2288384], [Date.UTC(2014, 7, 1), 1131008], [Date.UTC(2014, 8, 1), 1477632], [Date.UTC(2014, 9, 1), 1158400], [Date.UTC(2014, 10, 1), 2315776], [Date.UTC(2014, 11, 1), 2452736], [Date.UTC(2014, 12, 1), 2710016], [Date.UTC(2015, 1, 1), 4774912], [Date.UTC(2015, 2, 1), 6679552], [Date.UTC(2015, 3, 1), 4275968], [Date.UTC(2015, 4, 1), 2349568], [Date.UTC(2015, 5, 1), 2872320], [Date.UTC(2015, 6, 1), 1055744], [Date.UTC(2015, 7, 1), 1681920], [Date.UTC(2015, 8, 1), 5689856], [Date.UTC(2015, 9, 1), 6616576], [Date.UTC(2015, 10, 1), 2843392], [Date.UTC(2015, 11, 1), 9042944], [Date.UTC(2015, 12, 1), 4577280], [Date.UTC(2016, 1, 1), 794112], [Date.UTC(2016, 2, 1), 1971456], [Date.UTC(2016, 3, 1), 3468800], [Date.UTC(2016, 4, 1), 1238784], [Date.UTC(2016, 5, 1), 1007360], [Date.UTC(2016, 6, 1), 2445312], [Date.UTC(2016, 7, 1), 2517248], [Date.UTC(2016, 8, 1), 1086976], [Date.UTC(2016, 9, 1), 265984]
        ]
    }]
});
