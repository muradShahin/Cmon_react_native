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


  export default function ChartTest(){

    return (

        <View style={styles.main_view}>
  <Text style={styles.chart_title}>Calls</Text>
  <LineChart
    data={{
      labels: ["13:52", "13:59", "14:06", "14:13", "14:21", "15:00"],
      datasets: [
        {
          data: [
           0,
           1000,
           3000,
           2000
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
  
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
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
      margin:10,
      borderRadius: 16
    }}
  />




<Text style={styles.chart_title}>Transactions</Text>
  <LineChart
    data={{
      labels: ["13:52", "13:59", "14:06", "14:13", "14:21", "15:00"],
      datasets: [
        {
          data: [
            0,
            1500,
            2000,
            500,
            1000
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}

    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#1e88e5",
      backgroundGradientFrom: "#1e88e5",
      backgroundGradientTo: "#6ab7ff",
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
      margin:10,
      borderRadius: 16
    }}
  />



  





</View>





    );
  }


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
    }

  })
  