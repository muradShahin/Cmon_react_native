import { View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist'
import { StyleSheet,Text } from 'react-native';




export default function Eod(){

    const data = [
        {time: '09:00', title: 'Switch EOD-E', description: 'Switch EOD-E (09:00 AM)'},
        {time: '10:45', title: 'Switch EOD-S', description: 'Switch EOD-S (10:45 AM)'},
        {time: '12:00', title: 'C50', description: 'C50 (12:00 AM)'},
        {time: '14:00', title: 'Switch EOD-E', description: 'Switch EOD-E (14:00 PM)'},
        {time: '16:30', title: 'Switch EOD-S', description: 'Switch EOD-E (16:30 PM)'}
      ]


      return (

        <View style={styles.container}>
            
            <Text style={styles.eod_title}>Jordan</Text>
            <Timeline 
             style={styles.list}
             data={data}
            />
        </View>
      

      )

     
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
          paddingTop:10,
          backgroundColor:'white'
    },
    list: {
      flex: 1,
      marginTop:20,
    },
    eod_title:{
        fontSize:20,
        color:'#1e88e5',
        fontWeight:'bold'
    }
  });