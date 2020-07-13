//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text , View , ScrollView , StyleSheet , Image , Dimensions } from 'react-native'
import { material } from 'react-native-typography'

import {
    Card,
    CardItem
  } from "native-base";
//import all the basic component we have used
class Personalcard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      artikelData: ["Item ke 1","Item ke 2","Item ke 3","Item ke 4","Item ke 5","Item ke 6","Item ke 7","Item ke 8","Item ke 9","Item ke 10"]
      };
  } 
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center",alignItems:"center",padding:10}}>
            <Card style={{width:"100%"}}>
            <CardItem cardBody>
                <View style={styles.padTopBottom}>
                <Text style={material.subheading,{color:"#000000",fontWeight:"bold",fontSize:15,margin:5}}>test</Text>
                <Text note numberOfLines={3} style={{textAlign:"justify",fontSize:15,margin:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
            </CardItem>
            </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
      flexDirection: 'column',
      padding:1,
      margin:0
    },
    padBottom:{
      paddingBottom:10
    }
})
export default (Personalcard);