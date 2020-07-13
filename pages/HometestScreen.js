import React from 'react'
import { connect } from  'react-redux'
import { Text , View , AsyncStorage , ScrollView } from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {
  Icon,
  Container,
  Input,
  Item,
  Button
} from "native-base";
import { material } from 'react-native-typography'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CarouselScreen from './carouselScreen'
import Dummycomponent from './Dummycomponent'
import Itemlist from './Itemlist'
import Cardlist from './Cardlist'
import Personalcard from './Personalcard'

//import all the basic component we have used
class HomeScreen extends React.Component {
  
  refreshPage = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const tokenParsing = JSON.parse(userToken);
    this.props.dispatch({ type: "USER_INFO", payload: tokenParsing });
  };
  render() {
    return (
      <Container>
        <Grid>
        <NavigationEvents onDidFocus={() => this.refreshPage()} />
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5" }}>
                <Row>
                  <Col size={7}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center",padding:10}}>
                      <Item style={{backgroundColor:"#ffffff",paddingLeft:10,paddingRight:10}}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"/>
                      </Item>
                    </View>
                  </Col>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <Button transparent onPress={() => alert("it's work")}>
                        <Ionicons name={"md-heart"} size={25} color={"#019cde"} />
                      </Button>
                    </View>
                  </Col>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <Button transparent onPress={() => alert("it's work")}>
                        <Ionicons name={"md-mail"} size={25} color={"#019cde"} />
                      </Button>
                    </View>
                  </Col>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <Button transparent onPress={() => alert("it's work")}>
                        <FontAwesome name={"bell"} size={25} color={"#019cde"} />
                      </Button>
                    </View>
                  </Col>
                </Row>
              </View>
            </Col>
          </Row>
          <Row size={9}>
            <Col>
              <ScrollView>
                <Row>
                  <Col>
                    <CarouselScreen />
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Personalcard />
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Itemlist />
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Row>
                      <Col style={{paddingLeft:10,paddingTop:5,paddingBottom:1,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                          <Text style={material.title}>Title section</Text>
                        </View>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={7} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                          <Text style={material.subheading}>Subheading</Text>
                        </View>
                      </Col>
                      <Col size={3} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                          <Button transparent onPress={() => alert("it's work")}>
                            <Text style={{color:"#019cde",fontSize:15}}>Lihat semua</Text>
                          </Button>
                        </View>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Cardlist />
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Row>
                      <Col style={{paddingLeft:10,paddingTop:5,paddingBottom:1,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                          <Text style={material.title}>Title section</Text>
                        </View>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={7} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                          <Text style={material.subheading}>Subheading</Text>
                        </View>
                      </Col>
                      <Col size={3} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                          <Button transparent onPress={() => alert("it's work")}>
                            <Text style={{color:"#019cde",fontSize:15}}>Lihat semua</Text>
                          </Button>
                        </View>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Cardlist />
                  </Col>
                </Row>
              </ScrollView>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(HomeScreen);