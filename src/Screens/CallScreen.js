import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";

import CustomLineChart from "../CustomLineChart";
import { WebView } from 'react-native-webview';


const data2 = {
    labels: ["13:52", "13:59", "14:06", "14:13", "14:21", "15:00"],
    datasets: [
      {
        data: [ 0, 5, 10,20,15,]
      }
    ]
  };

  const chart =`

  <style>
    #chartdiv {
      width: 100%;
      height: 800px;
      font-size:20px;
    }
    </style>
    
    <!-- Resources -->
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    
    <!-- Chart code -->
    <script>
    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout,
      pinchZoomX:true
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    
    var colorSet = am5.ColorSet.new(root, {});
    
    // The data 8 red , 20 blue ,  30 orange , 35 green
    var data = [
      {
        year: "00:47",
        value: 4,
        strokeSettings: {
          stroke: colorSet.getIndex(35)
        },
        fillSettings: {
          fill: colorSet.getIndex(35),
        },
        bulletSettings: {
          fill: colorSet.getIndex(35)
        }
      },
      {
        year: "00:54",
        value: 4,
        strokeSettings: {
          stroke: colorSet.getIndex(35)
        },
        fillSettings: {
          fill: colorSet.getIndex(35),
        },
        bulletSettings: {
          fill: colorSet.getIndex(35)
        }
        
      },
      {
        year: "00:54",
        value: 8,
        strokeSettings: {
          stroke: colorSet.getIndex(30)
        },
        fillSettings: {
          fill: colorSet.getIndex(30),
        },
        bulletSettings: {
          fill: colorSet.getIndex(30)
        }
      }, {
        year: "01:00",
        value: 8,
        strokeSettings: {
          stroke: colorSet.getIndex(30)
        },
        fillSettings: {
          fill: colorSet.getIndex(30),
        },
        bulletSettings: {
          fill: colorSet.getIndex(30)
        }
      },
      {
        year: "01:10",
        value: 8,
        strokeSettings: {
          stroke: colorSet.getIndex(30)
        },
        fillSettings: {
          fill: colorSet.getIndex(30),
        },
        bulletSettings: {
          fill: colorSet.getIndex(30)
        }
      },
      {
        year: "01:20",
        value: 8,
        strokeSettings: {
          stroke: colorSet.getIndex(30)
        },
        fillSettings: {
          fill: colorSet.getIndex(30),
        },
        bulletSettings: {
          fill: colorSet.getIndex(30)
        }
      },
      {
        year: "01:20",
        value: 15,
        strokeSettings: {
          stroke: colorSet.getIndex(8)
        },
        fillSettings: {
          fill: colorSet.getIndex(8),
        },
        bulletSettings: {
          fill: colorSet.getIndex(8)
        }
      },
      {
        year: "01:30",
        value: 20,
        strokeSettings: {
          stroke: colorSet.getIndex(8)
        },
        fillSettings: {
          fill: colorSet.getIndex(8),
        },
        bulletSettings: {
          fill: colorSet.getIndex(8)
        }
      },
      {
        year: "01:30",
        value: 10,
        strokeSettings: {
          stroke: colorSet.getIndex(8)
        },
        fillSettings: {
          fill: colorSet.getIndex(8),
        },
        bulletSettings: {
          fill: colorSet.getIndex(8)
        }
      },
      {
        year: "01:30",
        value: 10,
        strokeSettings: {
          stroke: colorSet.getIndex(35)
        },
        fillSettings: {
          fill: colorSet.getIndex(35),
        },
        bulletSettings: {
          fill: colorSet.getIndex(35)
        }
      },
      {
        year: "01:48",
        value: 6,
        strokeSettings: {
          stroke: colorSet.getIndex(35)
        },
        fillSettings: {
          fill: colorSet.getIndex(35),
        },
        bulletSettings: {
          fill: colorSet.getIndex(35)
        }
      },
    ];
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("location", 0.5);
    xRenderer.labels.template.setAll({
      location: 0.5,
      multiLocation: 0.5
    });
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxPrecision: 0,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "year",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}",
        dy:-5
      })
    }));
    
    series.strokes.template.setAll({
      templateField: "strokeSettings",
      strokeWidth: 2
    });
    
    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.5,
      templateField: "fillSettings"
    });
    
    
    series.bullets.push(function() {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          templateField: "bulletSettings",
          radius: 5
        })
      });
    });
    
    series.data.setAll(data);
    series.appear(1000);
    
    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal",
      marginBottom: 20
    }));
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()
    </script>
    
    <!-- HTML -->
    <div id="chartdiv"></div>

`;



  const lowestValueInSuccess = 250;

  /**
   * dotsValues -> to be calculated from the retrived success transactions and failure transactions 
   * after we found the values where the failure transactions > or = to 10 % of the success transaction 
   * we will store ther value of the success transaction in the below array , in order to know where to show the dots
   */
  const dotsValues  = [0,380,430,0];

  

  export default function CallScreen(){

    return (

        <View style={styles.main_view}>
  
  <LineChart
    data={{
      labels: ["00:47", "00:54", "01:01", "01:08", "01:16"],
      datasets: [
        {
          data: [
           1000,
           280,
           380,
           250,
           430
          ],
           color: (opacity = 1) => `#9cff57` , withDots:true
        } ,
        {

          data: [
            91,
            21,
            120,
            50,
            11
           ],
            color: (opacity = 1) => `#039be5`,withDots:false

        },{

          data: [
            230,
            136,
            200,
            145,
            80
           ],
           color: (opacity = 1) => `#ff5f52`,fillShadowGradient :(opacity = 1) => `#9cff57` ,withDots:false
        }
      ],
      legend: ["Success ", "Time out", "Failure"]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height/2.3}
  
   // yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#a5d6a7",
      backgroundGradientFrom: "#60ad5e",
      backgroundGradientTo: "#60ad5e",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "8",
        strokeWidth: "0",
        stroke: "#ffa726"
      },
      
    }}
    getDotColor={(dataPoint, dataPointIndex) => {
      if (dataPoint >= lowestValueInSuccess) {

        var color = "";
        dotsValues.forEach(element => {

          console.log(element);
          if(dataPoint === element){
            color = "red";
          }
          
        });
        
      if(color != "")
       return color;

      return 'transparent';
      }
      return 'transparent';
      }}

    

 

    bezier
    style={{
      margin:0,
      borderRadius: 0
    }}
  />



{/* <BarChart
  style={styles.chart_bar2}
  data={data2}
  width={Dimensions.get("window").width}
  height={Dimensions.get("window").height /2}
  //yAxisLabel="$"
  chartConfig={{
    backgroundColor: "#0277bd",
    backgroundGradientFrom: "#004c8c",
    backgroundGradientTo: "#0277bd",
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
 
  
  }}


/> */}


{/* <LineChart
    data={{
      labels: ["00:47", "00:54", "01:01", "01:08", "01:16"],
      datasets: [
        {
          data: [
            10,
            10,
            30,
            10,
            10,
            16,
            16,
            16,
            12
          
          ],color: (opacity = 1) => `black`
        }, 
        
      ],
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height/2.3}
  
   // yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e0e0e0",
      backgroundGradientFrom: "#e0e0e0",
      backgroundGradientTo: "#e0e0e0",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `#34515e`,
      labelColor: (opacity = 1) => `#607d8b`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "0",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      margin:0,
      borderRadius: 0
    }}

    getDotColor={(dataPoint, dataPointIndex)=>{

      if(dataPoint >=23)
      return 'red'
      else if(dataPoint <23 && dataPoint >12)
      return 'green'
      else
      return 'yellow'


    }}
  /> */}

<WebView
      originWhitelist={['*']}
      source={{ html: chart }}
    />



</View>
)}




const styles = StyleSheet.create({


    chart_title:{
        textAlign:'center',
        color:'#000000',
        fontWeight:'bold',
        margin:4
    },
    main_view:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    chart_bar2:{
        marginRight:0,
     
    }

  })