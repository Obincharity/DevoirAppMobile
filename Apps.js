import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.projet}>PROJET SJP 5</Text>

        <View style={styles.mother}>

            <View title = "1st">
                <View style={styles.box1}>
                <TouchableOpacity onPress={()=>{}}
                  >
                   <Text > Texte 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}
                  >
                   <Text > Texte 2 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}
                  >
                   <Text > Texte 3 </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                      <TouchableOpacity onPress={()=>{}}
                          style={styles.button}>
                         <Text > + </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{}}
                          style={styles.button}>
                         <Text > M </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{}}
                          style={styles.button}>
                         <Text > - </Text>
                      </TouchableOpacity>
                </View>
            </View>

            <View style={styles.dra}>
            <TouchableOpacity onPress={()=>{}}
                style={styles.arrows}>
               <Text > add </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}
                style={styles.arrows}>
               <Text > rem </Text>
            </TouchableOpacity>
            </View>

            <View title = "3rd">
                    <View style={styles.box2}>
                    </View>
                    <View style={styles.buttonContainer}>
                          <TouchableOpacity onPress={()=>{}}
                              style={styles.button}>
                             <Text > + </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={()=>{}}
                              style={styles.button}>
                             <Text > M </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={()=>{}}
                              style={styles.button}>
                             <Text > - </Text>
                          </TouchableOpacity>
                    </View>
            </View>

        </View>



      </View>
    )
  }
}


const styles = StyleSheet.create({
mainContainer: {
    backgroundColor: '#FCFFFF',
    borderColor:  '#1EC1F5',
    marginTop: 50,
    borderWidth:  3,
    height:500,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    padding: 15
  },
projet: {
  borderWidth:  2,
  backgroundColor: '#FCFFFF',
  borderColor:  '#030B0D',
  height: 50,
  width: 120,
  padding: 10,
  fontWeight: 'bold'
},
box1: {
  borderWidth:  2,
  backgroundColor: '#FCFFFF',
  borderColor:  '#9F25E8',
  padding: 10,
  height: 200,
  width: 120,
  marginTop: 25,
  marginBottom: 10

},
box2: {
  borderWidth:  2,
  backgroundColor: '#FCFFFF',
  borderColor:  '#EE7541',
  padding: 10,
  height: 200,
  width: 120,
  marginTop: 25,
  marginBottom: 10

},
buttonContainer:{
 flexDirection: 'row',
 padding: 10,
 justifyContent: 'space-evenly',
},
button: {
  borderWidth:  2,
  backgroundColor: '#FCFFFF',
  borderColor:  '#030B0D',
  width: 25
},

arrows: {
marginTop: 15
},
dra: {
  marginTop: 70,
  width: 30,
  justifyContent: 'center',
  height: 80,
  marginLeft: 15,
  marginRight: 15

},
mother: {
  flex:1,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
}

})
