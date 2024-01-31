"use client"

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Chart = ({ timeline }) => {
    const [chartData, setChartData] = useState({
        series: [{
            name: "Profit Percentage",
            data: [
                {
                    "x": 1451586600000,
                    "y": 21.707
                },
                {
                    "x": 1451673000000,
                    "y": 21.903
                },
                {
                    "x": 1451759400000,
                    "y": 23.531
                },
                {
                    "x": 1451845800000,
                    "y": 24.215
                },
                {
                    "x": 1451932200000,
                    "y": 24.171
                },
                {
                    "x": 1452018600000,
                    "y": 21.045
                },
                {
                    "x": 1452105000000,
                    "y": 19.948
                },
                {
                    "x": 1452191400000,
                    "y": 22.101
                },
                {
                    "x": 1452277800000,
                    "y": 21.406
                },
                {
                    "x": 1452364200000,
                    "y": 20.965
                },
                {
                    "x": 1452450600000,
                    "y": 21.192
                },
                {
                    "x": 1452537000000,
                    "y": 22.854
                },
                {
                    "x": 1483209000000,
                    "y": 12.787
                },
                {
                    "x": 1483295400000,
                    "y": 11.648
                },
                {
                    "x": 1483381800000,
                    "y": 12.19
                },
                {
                    "x": 1483468200000,
                    "y": 12.425
                },
                {
                    "x": 1483554600000,
                    "y": 12.162
                },
                {
                    "x": 1483641000000,
                    "y": 12.047
                },
                {
                    "x": 1483727400000,
                    "y": 12.903
                },
                {
                    "x": 1483813800000,
                    "y": 12.114
                },
                {
                    "x": 1483900200000,
                    "y": 12.209
                },
                {
                    "x": 1483986600000,
                    "y": 12.008
                },
                {
                    "x": 1484073000000,
                    "y": 12.291
                },
                {
                    "x": 1484159400000,
                    "y": 11.865
                },
                {
                    "x": 1514745000000,
                    "y": 7.359
                },
                {
                    "x": 1514831400000,
                    "y": 6.795
                },
                {
                    "x": 1514917800000,
                    "y": 6.511
                },
                {
                    "x": 1515004200000,
                    "y": 5.698
                },
                {
                    "x": 1515090600000,
                    "y": 5.103
                },
                {
                    "x": 1515177000000,
                    "y": 4.956
                },
                {
                    "x": 1515263400000,
                    "y": 4.909
                },
                {
                    "x": 1515349800000,
                    "y": 5.479
                },
                {
                    "x": 1515436200000,
                    "y": 6.434
                },
                {
                    "x": 1515522600000,
                    "y": 6.506
                },
                {
                    "x": 1515609000000,
                    "y": 7.278
                },
                {
                    "x": 1515695400000,
                    "y": 7.056
                }
            ],
        }],
        options: {
            chart: {
                id: 'area-datetime',
                type: 'area',
                height: 350,
                zoom: {
                    autoScaleYaxis: true,
                },
            },
            annotations: {
                yaxis: [{
                    y: 30,
                    borderColor: '#999',
                }],
                xaxis: [{
                    borderColor: '#999',
                    yAxisIndex: 0,
                }]
            },
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            colors: ["#25CD25"],
            stroke: {
                width: 2,
                dashArray: [5, 5],
            },
            xaxis: {
                type: 'datetime',
                tickAmount: 20,
            },
            labels: {
                formatter: (value) => value.toFixed(3),
            },
            tooltip: {
                x: {
                    format: 'dd MM yyyy',
                },
            },
            zoom: {
                enabled: true
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100],
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(37, 205, 37, 0.40)',
                        },
                        {
                            offset: 100,
                            color: 'rgba(37, 205, 37, 0.00)',
                        },
                    ],
                },
            },
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "timeline": timeline
                    })
                });

                const profitData = await res.json();

                setChartData(prevChartData => ({
                    ...prevChartData,
                    series: [{
                        ...prevChartData.series[0],
                        data: profitData.data,
                    }],
                }));

            } catch (error) {
                console.error("Error fetching data:", error);
            }

        }

        fetchData();
    }, [timeline]);

    return (
        <div>
            <div id="chart">
                <div id="chart-timeline">
                    <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={250} width="100%" />
                </div>
            </div>
            <div id="html-dist"></div>
        </div>
    );
};


export default Chart;