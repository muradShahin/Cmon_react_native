import { AreaChart,LineChart,Grid } from 'react-native-svg-charts'
import {View} from 'react-native'
import {YAxis} from 'react-native-svg-charts'
import {XAxis} from 'react-native-svg-charts'


import * as shape from 'd3-shape'




export default function CallScreen2(){
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  const contentInset = { top: 20, bottom: 20 }
  
  return(

    <View style={{ height: 200, flexDirection: 'row' ,padding:20}}>
    {/* <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
            fill: 'grey',
            fontSize: 10,
        }}
        numberOfTicks={10}
        formatLabel={(value) => `${value}ºC`}
    />
  
    <LineChart
        style={{ flex: 1, marginLeft: 16 }}
        data={data}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={contentInset}
    >
        <Grid />
    </LineChart>

    <XAxis
          style={{ marginTop: 10 }}
          data={ data }
          scale={scale.scaleBand}
          formatLabel={ (value, index) => index }
          labelStyle={ { color: 'black' } }
        /> */}

<View style={{ height: 200, padding: 20 }}>
        {/* <LineChart
          style={{ flex: 1 }}
          data={ data }
          gridMin={ 0 }
          contentInset={{ top: 10, bottom: 10 }}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
        >
          <Grid/>
        </LineChart> */}
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={ data }
          formatLabel={ (value, index) => index }
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
      </View>


      <CustomLineChart
      data={{
        labels: ["00:47", "00:54", "01:01", "01:08", "01:16"],
        datasets: [
          {
            data: [100, 110, 90, 130, 80, 103],withDots:false
          },
        ],
      }}
      width={Dimensions.get('window').width}
      height={250}
      chartConfig={{
        backgroundColor: "#0277bd",
        backgroundGradientFrom: '#0277bd',
        backgroundGradientTo: '#0277bd',
        color: (opacity = 1) => 'url(#grad)',
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      }}
      bezier
      withInnerLines={false}
      withOuterLines={false}

      getDotColor={(dataPoint, dataPointIndex) => {

        /**
         * we are going to show dots only if the latency values has changed
         */



        }}
        
        
    />
</View>
  )
}