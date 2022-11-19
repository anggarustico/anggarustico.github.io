window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "dark2",
        title: {
            text: "Grafik Data"
        },
        axisX: {
            valueFormatString: "hh:mm TT",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Satuan Sensor",
            includeZero: true,
            crosshair: {
                enabled: true
            }
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "line",
            showInLegend: true,
            name: "Curah Hujan",
            markerType: "square",
            xValueFormatString: "hh:mm TT",
            color: "#F08080",
            dataPoints: [
                { x: new Date(2017, 0, 3, 0), y: 650 },
                { x: new Date(2017, 0, 3, 1 ), y: 700 },
                { x: new Date(2017, 0, 3, 2), y: 710 },
                { x: new Date(2017, 0, 3, 3), y: 658 },
                { x: new Date(2017, 0, 3, 4), y: 734 },
                { x: new Date(2017, 0, 3, 5), y: 963 },
                { x: new Date(2017, 0, 3, 6), y: 847 },
                { x: new Date(2017, 0, 3, 7), y: 853 },
                { x: new Date(2017, 0, 3, 8), y: 869 },
                { x: new Date(2017, 0, 3, 9), y: 943 },
                { x: new Date(2017, 0, 3, 10), y: 970 },
                { x: new Date(2017, 0, 3, 11), y: 869 },
                { x: new Date(2017, 0, 3, 12), y: 890 },
                { x: new Date(2017, 0, 3, 13), y: 930 },
                { x: new Date(2017, 0, 3, 14), y: 600 },
                { x: new Date(2017, 0, 3, 15), y: 560 },
                { x: new Date(2017, 0, 3, 16), y: 820 },
                { x: new Date(2017, 0, 3, 17), y: 700 },
                { x: new Date(2017, 0, 3, 18), y: 345 },
                { x: new Date(2017, 0, 3, 19), y: 103 },
                { x: new Date(2017, 0, 3, 20), y: 432 },
                { x: new Date(2017, 0, 3, 21), y: 540 },
                { x: new Date(2017, 0, 3, 22), y: 930 },
                { x: new Date(2017, 0, 3, 23), y: 900 },
            ]
        },
        {
            type: "line",
            showInLegend: true,
            name: "Temperature",
            dataPoints: [
                { x: new Date(2017, 0, 3, 0), y: 550 },
                { x: new Date(2017, 0, 3, 1 ), y: 600 },
                { x: new Date(2017, 0, 3, 2), y: 610 },
                { x: new Date(2017, 0, 3, 3), y: 558 },
                { x: new Date(2017, 0, 3, 4), y: 634 },
                { x: new Date(2017, 0, 3, 5), y: 863 },
                { x: new Date(2017, 0, 3, 6), y: 747 },
                { x: new Date(2017, 0, 3, 7), y: 753 },
                { x: new Date(2017, 0, 3, 8), y: 769 },
                { x: new Date(2017, 0, 3, 9), y: 843 },
                { x: new Date(2017, 0, 3, 10), y: 870 },
                { x: new Date(2017, 0, 3, 11), y: 769 },
                { x: new Date(2017, 0, 3, 12), y: 690 },
                { x: new Date(2017, 0, 3, 13), y: 830 },
                { x: new Date(2017, 0, 3, 14), y: 500 },
                { x: new Date(2017, 0, 3, 15), y: 460 },
                { x: new Date(2017, 0, 3, 16), y: 720 },
                { x: new Date(2017, 0, 3, 17), y: 600 },
                { x: new Date(2017, 0, 3, 18), y: 545 },
                { x: new Date(2017, 0, 3, 19), y: 603 },
                { x: new Date(2017, 0, 3, 20), y: 732 },
                { x: new Date(2017, 0, 3, 21), y: 440 },
                { x: new Date(2017, 0, 3, 22), y: 630 },
                { x: new Date(2017, 0, 3, 23), y: 800 },
            ]
        }]
    });
    chart.render();

    function toogleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}