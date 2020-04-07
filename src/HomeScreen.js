import React,{Component} from 'react';
import {View, Text , StyleSheet,Image,ScrollView,TouchableOpacity,StatusBar, Button,TouchableHighlight,Platform} from 'react-native';
import {Col,Row,Grid} from 'react-native-easy-grid';
import {FontAwesome} from '@expo/vector-icons';
import {AntDesign} from'@expo/vector-icons';




const HomeScreen = () => {


      return(
        <View style={styles.mainView}>
          <StatusBar  
            backgroundColor = "#b3e6ff"  
            barStyle = "dark-content"   
                  />  
          <View  style={styles.headerView}>
             <Text style={styles.headTitle}>Clothify</Text>
             <TouchableOpacity style={styles.shopBag}><FontAwesome size={25} name = {'shopping-bag'} /></TouchableOpacity>
          </View>
         <ScrollView showsVerticalScrollIndicator={false} disableScrollViewPanResponder={true} >
          
           <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',top:28,marginBottom:40}}>
             <Image source={require('../src/images/techwear-outdoor-brands-main.jpg')} style={{width: 400, height: 350}}/>
     
             <Text style={styles.banner}>India's Top Designers</Text>
             </View>
             <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start'}}>
             <TouchableOpacity><Image source={require('../src/images/adidas.png')} style={{width:200,height:150,position:'relative'}}/></TouchableOpacity>
             <TouchableOpacity><Image source={require('../src/images/levis.png')} style={{width:100, height:60,position:'relative',top:45,left:10}}/></TouchableOpacity>
             </View>
             <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start'}}>
             <TouchableOpacity><Image source={require('../src/images/allen.png')} style={{width:200,height:60}}/></TouchableOpacity>
             <TouchableOpacity><Image source={require('../src/images/van.png')} style={{width:140,height:80 , bottom:10}}/></TouchableOpacity>
             </View>
             <View>
             <TouchableOpacity><Image source={require('../src/images/louis.jpg')} style={{height:80,width:200,left:80}}/></TouchableOpacity>

           </View>
           <View style={{top:50}}>
             <Text style={{textAlign:'center',fontSize:25}}>EDITOR'S CHOICE</Text>
           </View>
            <View style={{top:80}}>
              <Grid>
                <Row>
                  <TouchableOpacity>
                  <View style={styles.ItemView}>
                    <Image source={require('../src/images/tshirtv.jpg')}/>
                    <Text style={styles.itemName}>Levis Tshirt</Text>
                    <Text style={styles.itemPrice}>$60</Text>
                  </View>
                  </TouchableOpacity>
                
                <TouchableOpacity>
                  <View style={styles.ItemView}>
                    <Image source={require('../src/images/tshirtvi.jpg')}/>
                    <Text style={styles.itemName}>VanHeusen  Tshirt</Text>
                    <Text style={styles.itemPrice}>$48</Text>
                  </View>
                  </TouchableOpacity>
                </Row>
                <Row>
                  <TouchableOpacity>
                  <View style={styles.ItemView}>
                    <Image source={require('../src/images/tshirt.jpg')}/>
                    <Text style={styles.itemName}>Losis Philippe Tshirt</Text>
                    <Text style={styles.itemPrice}>$40</Text>
                  </View>
                  </TouchableOpacity>
                
                <TouchableOpacity>
                  <View style={styles.ItemView}>
                    <Image source={require('../src/images/Blue_Tshirt.jpg')}/>
                    <Text style={styles.itemName}>UCB Tshirt</Text>
                    <Text style={styles.itemPrice}>$60</Text>
                  </View>
                  </TouchableOpacity>
                </Row>
              </Grid>
            </View>
            <View style={{backgroundColor:'#FFB6C1',flex:1,padding:5,top:100}}>
              <Text style={{textAlign:'center',fontSize:30}}> What is Clothify?</Text>
              
              <Text style={{textAlign:'center',fontSize:20}}>Clothify is a curated online marketplace showcasing the best emerging fashion designers in the accessible luxury category.</Text>

              <Text style={{textAlign:'center',fontSize:20}}>We travel the world discovering the best, diverse, under-the-radar, amazingly talented designers. We then curate them for style, quality, and responsible manufacturing, and connect them directly with stylish women like you, exclusively on Clothify :) </Text>
            </View>
           <View style={{top:90}}>
            <View style={{top:60,flex:1}}>
             <Text style={{textAlign:'center',fontSize:25}}>OUR's FAVOURITE</Text>
           </View>
            <View style={{top:80}}>
              <Grid>
                <Row>
                  <TouchableOpacity>
                  <View style={styles.ItemView}>
                    <Image source={require('../src/images/tshirtb.jpg')}/>
                    <Text style={styles.itemName}>Allen Solly</Text>
                    <Text style={styles.itemPrice}>$50</Text>
                  </View>
                  </TouchableOpacity>
                
                <TouchableOpacity>
                  <View style={styles.ItemView}>
                    <Image source={require('../src/images/tshirta.jpg')}/>
                    <Text style={styles.itemName}>VanHeusen Multicolor</Text>
                    <Text style={styles.itemPrice}>$38</Text>
                  </View>
                  </TouchableOpacity>
                </Row>
                <Row>
                  <TouchableOpacity>
                  <View style={styles.ItemView}>
                    <Image source={require('../src/images/shoes.jpg')}/>
                    <Text style={styles.itemName}>Adidas Formal</Text>
                    <Text style={styles.itemPrice}>$69</Text>
                  </View>
                  </TouchableOpacity>
                
                <TouchableOpacity>
                  <View style={styles.ItemView}>
                    <Image source={require('../src/images/watcha.jpg')}/>
                    <Text style={styles.itemName}>FastTrack Black Watch</Text>
                    <Text style={styles.itemPrice}>$39</Text>
                  </View>
                  </TouchableOpacity>
                </Row>
              </Grid>
            </View>
          </View>
            </ScrollView>
         
        </View>
      );
    
  
};

const styles = StyleSheet.create({
    banner:{
      fontSize:50,
      textShadowColor:'#D3D3D3',
      color:'#FFFFFF',
      fontFamily:"Palatino-Bold",
      position: 'absolute',
      textShadowRadius:10,
      textAlign:'center',
      
    
    },
   itemName:{
     textAlign:'center',
     fontSize:15,
     fontWeight:'500',
     
   },
   itemPrice:{
     textAlign:'center',
     color:'#D3D3D3',
     fontWeight:'500'
   },
   ItemView:{
   
     height:300,
     width:200,
     right:10,
     justifyContent:'space-around',
     
   },
 
   /* cardView:{
      flexDirection:"row",
      justifyContent:"space-between",
      position:"relative",
      
      backgroundColor:"#FFFFFF",
      shadowOpacity: 0.3,
      flexWrap:"wrap"
    },*/
    mainView:{
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    

    },
    headTitle:{
      fontSize:40,
      alignContent:"center",
      fontFamily:"Palatino-Bold",
      bottom:-20
    },
    shopBag:{
     left:93,
     top:22
    },
    headerView:{
      flexDirection:'row',
      alignSelf:"center",
      marginBottom:20,
      
    }
});
export default HomeScreen;