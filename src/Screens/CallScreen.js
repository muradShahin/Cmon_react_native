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


const data2 = {
    labels: ["13:52", "13:59", "14:06", "14:13", "14:21", "15:00"],
    datasets: [
      {
        data: [ 0, 5, 10,20,15,]
      }
    ]
  };

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
          ],color: (opacity = 1) => `#9cff57`
        } ,
        {

          data: [
            91,
            21,
            120,
            50,
            11
           ],color: (opacity = 1) => `#039be5`

        },{

          data: [
            250,
            136,
            200,
            145,
            80
           ],color: (opacity = 1) => `#ff5f52`
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height/2.25}
  
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
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
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
            10,
            23,
            13
          ],color: (opacity = 1) => `#870000`
        } ,
        {

          data: [
           4,
           4,
           6,
           9,
           3
           ],color: (opacity = 1) => `#ffeb3b`

        },{

          data: [
           0,
           0,
           3,
           2,
           0
           ],color: (opacity = 1) => `#9cff57`
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={Dimensions.get("window").height/2}
  
   // yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#0277bd",
      backgroundGradientFrom: "#004c8c",
      backgroundGradientTo: "#0277bd",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      margin:0,
      borderRadius: 0
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