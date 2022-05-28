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


const data2 = {
    labels: ["13:52", "13:59", "14:06", "14:13", "14:21", "15:00"],
    datasets: [
      {
        data: [ 0, 5, 10,20,15,]
      }
    ]
  };


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


<LineChart
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