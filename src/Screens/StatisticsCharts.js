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
import { ScrollView } from "react-native";



export default function StatisticsChart(){
    const data = [
        {
          name: "% Efawateercom",
          population: 60,
          color: "#8bc34a",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Transfers",
          population: 12,
          color: "#1976d2",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Dashboard",
          population: 44,
          color: "#80d6ff",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Login",
          population: 31,
          color: "#ab000d",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Card",
          population: 12,
          color: "#ffeb3b",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Others",
          population: 12,
          color: "#f9a825",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        }
      ];


      const data_CMGT = [
        {
          name: "% Efawateercom",
          population: 40,
          color: "#ff7d47",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Transfers",
          population: 12,
          color: "#ffffb1",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Dashboard",
          population: 44,
          color: "#00e676",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Login",
          population: 31,
          color: "#00acc1",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Card",
          population: 12,
          color: "#80deea",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Others",
          population: 12,
          color: "#78909c",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        }
      ];

      const data_ATM = [
        {
          name: "% Efawateercom",
          population: 40,
          color: "#33691e",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Transfers",
          population: 12,
          color: "#aed581",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Dashboard",
          population: 44,
          color: "#26a69a",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Login",
          population: 31,
          color: "#c2185b",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Card",
          population: 12,
          color: "#651fff",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        },
        {
          name: "% Others",
          population: 12,
          color: "#78909c",
          legendFontColor: "#ffffff",
          legendFontSize: 12
        }
      ];

      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    return (
    
       <ScrollView style={styles.container}>
    <View style={styles.view_chart}>

        <Text style={styles.project_title}>MB</Text>
    <PieChart
       
    width={Dimensions.get("window").width} // from react-native
    height={200}

        data= {data}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[5, 10]}
        absolute


    />

<Text style={styles.project_title}>CMGT</Text>
    <PieChart
       
    width={Dimensions.get("window").width} // from react-native
    height={200}

        data= {data_CMGT}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[5, 10]}
        absolute


    />


<Text style={styles.project_title}>ATM</Text>
    <PieChart
       
    width={Dimensions.get("window").width} // from react-native
    height={200}

        data= {data_ATM}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[5, 10]}
        absolute


    />

    </View>
    </ScrollView>
    )
}

const styles= StyleSheet.create({

    view_chart:{

        flex:1,
        padding:20,
        backgroundColor:'#37474f'
    },
    project_title:{
        color:"#ffffff",
        fontWeight:'bold'
    },
    container:{
        flex:1
    }

})