import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';


const persons = [
    {
      id: "1",
      project: "MB",
      calls:1607,
      transactions:1049,
      funstions:["Login","Dash","EFW","AFS"]
    },
    {
        id: "2",
        project: "ATM",
        calls:0,
        transactions:204,
        funstions:["PLC","JOR","PLS","EGY","UAE","LEB"]
      },
      {
        id: "3",
        project: "CMGT",
        calls:0,
        transactions:142,
        funstions:["PLC","JOR","PLS","EGY","UAE","LEB"]
      }
  ];

  const statistics = [

    {
        id:'1',
        project:'MB',
        statistics:[
            {
                id:'1',
                name:'Login',
                stat_numb:'8815',
                perce:'24'
            },
            {
                id:'2',
                name:'Dashboard',
                stat_numb:'5079',
                perce:'14'
            },
        ]

    },
    {
        id:'2',
        project:'CMGT',
        statistics:[
            {
                id:'1',
                name:'Dashboard',
                stat_numb:'5079',
                perce:'52'
            },
            {
                id:'1',
                name:'Efawateercom',
                stat_numb:'2123',
                perce:'66'
            }
        ]

    }


  ]



export default function List(){

    
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scroll_style}> 
            <View >
              {persons.map((person) => {
                return (
                  <View style={styles.view_style}> 
                    <Text style={styles.proj_title}>{person.project}</Text>
                    
                 {(
                     ()=>{
                         if (person.calls != 0) {
                             return (
                                <View style={styles.functions_view}>
                                <Text style={styles.item2}>Calls</Text>
                                <Text style={styles.item}>{person.calls}</Text>
                                </View>
                            
                             )
                         }
                     }
                 )()}

                     
                

                    <View style={styles.functions_view}>
                    <Text style={styles.item2}>Transactions</Text>
                    <Text style={styles.item}>{person.transactions}</Text>
                    </View>
                    <View style={styles.functions_view}>

                    {person.funstions.map((func)=>{

                        return(
                        
                         <View>
                           
                           <Text style={styles.item}> {func} </Text>
                           <Image 
                           style={styles.tinyLogo}
                           source={require('/Users/muradshahin/Desktop/react_native_app/cemon_app/assets/green_round.png')}
                           />
                           
                        </View>
                        )
                    })}
                    
                  </View>

                  <View style={styles.functions_view}>

                      <Text style={styles.item2}>Server Details</Text>
                      <Image 
                           style={styles.arrowLogo}
                           source={require('/Users/muradshahin/Desktop/react_native_app/cemon_app/assets/arrow.png')}
                           />

                  </View>

                  </View>
                );
              })}
            </View>
            {/* <View style={styles.view_style}>
            <Text style={styles.proj_title}>Statistics (30) MIN</Text>

            </View> */}
          </ScrollView>
         
          <ScrollView>
               <View>
                    <View style={styles.view_style}>
                    
                    <View style={styles.statistics_header}>

                    <Text style={styles.proj_title3}>Statistics (30) MIN</Text>
                    
                    <Image 
                           style={styles.statistics_icon_details}
                           source={require('/Users/muradshahin/Desktop/react_native_app/cemon_app/assets/info.png')}
                           />
                    </View>
                    

                    {statistics.map((stat=>{
                    
                    return(

                        <View>
                            <Text style={styles.proj_title2}>{stat.project}</Text>

                            {stat.statistics.map((item)=>{

                                 return(

                                    <View>
                                        <View style={styles.functions_view}>
                                            <Text style={styles.item2}>{item.name} - </Text>
                                            <Text style={styles.item}>{item.stat_numb} ({item.perce}%)</Text>
                                        </View>
                                    </View>
                                 )

                            })}

                        </View>

                    )
                    

                    }))}

            </View>
              </View>
          </ScrollView>

        </View>
      );

}


const styles = StyleSheet.create({
    container: {
      padding: 0,
      flex: 1,
    },
    item: {
      padding: 4,
      fontSize: 15,
      marginTop: 5,
      color:'#0277bd',
      fontWeight:'bold'
    },
    proj_title:{
        paddingStart:4,
        fontWeight:'bold',
        fontSize:20,
        backgroundColor:'#0069c0',
        color:'#ffffff'
    },
    view_style:{
        margin:10,
        backgroundColor:'#ffffff',
        borderRadius:20
    },
    functions_view:{
        flexDirection:'row'
    },
    tinyLogo: {
        width: 20,
        height: 20,
        marginStart:10,
        marginBottom:4
      },
      item2: {
        fontWeight:'bold',
        padding: 4,
        fontSize: 15,
        marginTop: 5,
        color:'#37474f'
        
      },
      arrowLogo: {
        width: 25,
        height: 20,
        marginStart:210,
        marginBottom:4,
        alignItems:'flex-end'
      },
      proj_title2:{
        paddingStart:4,
        fontWeight:'bold',
        fontSize:20,
        color:'#0277bd'
    },
    scroll_style:{
        height:400
    },
    proj_title3:{
        paddingStart:4,
        fontWeight:'bold',
        fontSize:20,
        backgroundColor:'#37474f',
        color:'#ffffff'
    },
    statistics_header:{
        flexDirection:'row',
        backgroundColor:'#37474f'
    },
    statistics_icon_details:{
        alignItems:'center',
        width: 25,
        height: 20,
        marginStart:135,
        marginTop:2
        
    }
  });