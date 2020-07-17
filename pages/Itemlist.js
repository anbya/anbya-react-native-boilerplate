//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text , View , ScrollView , StyleSheet } from 'react-native'
import { material } from 'react-native-typography'
import { Card, Icon, Button } from 'react-native-elements'

//import all the basic component we have used
class Itemlist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      artikelData: ["Item ke 1","Item ke 2","Item ke 3","Item ke 4","Item ke 5","Item ke 6","Item ke 7","Item ke 8","Item ke 9","Item ke 10"]
      };
  } 
  render() {
    return (
        <ScrollView style={{flex:1,flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 1"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 2"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 3"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 4"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 5"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 6"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 7"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 8"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 9"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 10"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 11"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
            <View style={{padding:10}}>
              <Button
              icon={<Icon name='plus-square' type='font-awesome' color='#019cde' size={25}/>}
              buttonStyle={styles.button}
              title="item ke 12"
              titleStyle={{color:"#019cde", fontSize:15}}
              />
            </View>
          </View>
        </ScrollView>
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
    }
})
export default (Itemlist);